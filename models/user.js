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
  return await db.database.get('select * from user where mail=?', mail)
}
const getAdmin = async () => {
  return await db.database.all('select * from user where role="admin"')
}

const register = async ({ firstname, lastname, mail, password, role }) => {
  const hash = await bcrypt.hash(password, saltRounds)
  const response = await db.database.run(
    'insert into user (firstname, lastname, mail, password, role) values (?, ?, ?, ?, ?)',
    firstname, lastname, mail, hash, role
  )
  const user = { id: response.lastID, firstname, lastname, mail, role }
  const token = jwt.sign(user, jwtKey)
  return { token, user }
}
const update = async ({ id, firstname, lastname, mail, role = 'user' }) => {
  return await db.database.run(
    'update user set firstname=?, lastname=?, mail=?, role=? where id=?',
    firstname, lastname, mail, role, id
  )
}
const del = async (id) => {
  return await db.database.run(
    'delete from user where id=?',
    id
  )
}

const login = async (mail, password) => {
  const response = await db.database.get(
    'select * from user where mail=?',
    mail
  )
  if (response) {

    if (await bcrypt.compare(password, response.password)) {
      delete response.password
      const token = jwt.sign(response, jwtKey)
      return { token, user: response }
    }
    else return { error: 'auth/wrong-password' }

  }
  else return { error: 'auth/wrong-mail' }
}

module.exports = { getAll, getById, getByMail, getAdmin, register, update, del, login }
