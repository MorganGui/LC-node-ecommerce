const db = require('../data/init')

const getAll = async () => {
  return await db.database.all('select * from `order`')
}
const getById = async (id) => {
  return await db.database.get('select * from `order` where id=?', id)
}

const add = async ({ user }) => {
  return await db.database.run(
    'insert into `order` (user) values (?)',
    user
  )
}
const update = async ({ id, user }) => {
  return await db.database.run(
    'update `order` set user=? where id=?',
    user, id
  )
}
const del = async (id) => {
  return await db.database.run(
    'delete from `order` where id=?',
    id
  )
}

module.exports = { getAll, getById, add, update, del }
