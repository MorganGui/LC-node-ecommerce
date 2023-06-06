const db = require('../data/init')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { jwtKey, saltRounds } = require('../data/keys')

const getAll = async () => {
  return await db.database.all('select * from user')
}
const getById = async (id) => {
  return await db.database.get('select * from user where id=?', id)
}
const getByMail = async (mail) => {
  return await db.database.all('select * from user where mail=?', mail)
}

const add = async ({ firstname, lastname, mail, password }) => {
  const hash = await bcrypt.hash(password, saltRounds)
  return await db.database.run(
    'insert into user (firstname, lastname, mail, password, role) values (?, ?, ?, ?, ?)',
    firstname, lastname, mail, 'user', hash
  )
}
const update = async ({ id, firstname, lastname, mail, password, role = 'user' }) => {
  return await db.database.run(
    'update user set firstname=?, lastname=?, mail=?, password=?, role=? where id=?',
    firstname, lastname, mail, password, role, id
  )
}
const del = async (id) => {
  return await db.database.run(
    'delete from user where id=?',
    id
  )
}

const login = async (mail, password) => {
  const result = await db.database.get(
    'select * from user where mail=?',
    mail
  )
  if (result) {

    if (await bcrypt.compare(password, result.password)) {
      delete result.password
      const token = jwt.sign(result, jwtKey)
      return { token }
    }
    else return { error: 'Wrong mail or password' }

  }
  else return { error: 'Wrong mail or password' }
}

module.exports = { getAll, getById, getByMail, add, update, del, login }
