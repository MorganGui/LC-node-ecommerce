const db = require('../data/init')

const getAll = async () => {
  return await db.database.all('select * from orderRow')
}
const getById = async (id) => {
  return await db.database.get('select * from orderRow where id=?', id)
}

const add = async ({ order, product, quantity }) => {
  return await db.database.run(
    'insert into orderRow (order, product, quantity) values (?, ?, ?)',
    order, product, quantity
  )
}
const update = async ({ id, order, product, quantity }) => {
  return await db.database.run(
    'update orderRow set order=?, product=?, quantity=? where id=?',
    order, product, quantity, id
  )
}
const del = async (id) => {
  return await db.database.run(
    'delete from orderRow where id=?',
    id
  )
}

module.exports = { getAll, getById, add, update, del }
