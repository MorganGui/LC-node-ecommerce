const model = require('../models/orderRow')
const Order = require('../models/order')
const Product = require('../models/product')
const functions = require('./functions')

const checkValues = async (orderRow, res) => {
  if ([null, undefined].includes(orderRow.order) || typeof orderRow.order !== 'number')
    res.status(400).end('Invalid order')
  if ([null, undefined].includes(orderRow.product) || typeof orderRow.product !== 'number')
    res.status(400).end('Invalid product')
  if ([null, undefined].includes(orderRow.quantity) || typeof orderRow.quantity !== 'number')
    res.status(400).end('Invalid quantity')

  try {
    const order = await Order.getById(orderRow.order)
    if (order === null) {
      res.status(404).end('Cannot find order')
    }
    const product = await Product.getById(orderRow.product)
    if (product === null) {
      res.status(404).end('Cannot find product')
    }
  } catch {
    sendError(res)
  }
}

const getAll = async (req, res) => {
  await functions.getAll(model, res)
}
const getById = async (req, res) => {
  await functions.getById(model, res, req.params.id)
}

const add = async (req, res) => {
  const orderRow = {
    order: req.body.order,
    product: req.body.product,
    quantity: req.body.quantity
  }
  await checkValues(orderRow, res)
  await functions.add(model, orderRow, res)
}
const update = async (req, res) => {
  const orderRow = {
    id: req.params.id,
    order: req.body.order,
    product: req.body.product,
    quantity: req.body.quantity
  }
  await checkValues(orderRow, res)
  await functions.update(model, orderRow, res)
}
const del = async (req, res) => {
  await functions.del(model, req, res)
}

module.exports = { getAll, getById, add, update, del }
