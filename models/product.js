const db = require('../data/init')

const getAll = async () => {
  return await db.database.all('select * from product')
}
const getById = async (id) => {
  return await db.database.get('select * from product where id=?', id)
}

const add = async ({ name, desc, price }) => {
  return await db.database.run(
    'insert into product (name, desc, price) values (?, ?, ?)',
    name, desc, price
  )
}
const update = async ({ id, name, desc, price }) => {
  return await db.database.run(
    'update product set name=?, desc=?, price=? where id=?',
    name, desc, price, id
  )
}
const del = async (id) => {
  return await db.database.run(
    'delete from product where id=?',
    id
  )
}

module.exports = { getAll, getById, add, update, del }
