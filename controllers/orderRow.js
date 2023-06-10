const model = require('../models/orderRow')
const Order = require('../models/order')
const Product = require('../models/product')

const checkValues = async (orderRow, res) => {
  if ([null, undefined].includes(orderRow.order) || typeof orderRow.order !== 'number')
    res.status(400).json('Invalid order')
  if ([null, undefined].includes(orderRow.product) || typeof orderRow.product !== 'number')
    res.status(400).json('Invalid product')
  if ([null, undefined].includes(orderRow.quantity) || typeof orderRow.quantity !== 'number')
    res.status(400).json('Invalid quantity')

  try {
    const order = await Order.getById(orderRow.order)
    if (order === null) {
      res.status(404).json('Cannot find order')
    }
    const product = await Product.getById(orderRow.product)
    if (product === null) {
      res.status(404).json('Cannot find product')
    }
  } catch {
    sendError(res)
  }
}

const getAll = async (req, res) => {
  try {
    const response = await model.getAll()
    res.status(200).json(response)
  } catch {
    res.status(500).json('Internal Server Error')
  }
}
const getById = async (req, res) => {
  try {
    const response = await model.getById(req.params.id)
    res.status(200).json(response)
  } catch {
    res.status(500).json('Internal Server Error')
  }
}

const add = async (req, res) => {
  const orderRow = {
    order: req.body.order,
    product: req.body.product,
    quantity: req.body.quantity
  }
  await checkValues(orderRow, res)

  try {
    const response = await model.add(orderRow)
    res.status(200).json(response)
  } catch {
    res.status(500).json('Internal Server Error')
  }
}
const update = async (req, res) => {
  const orderRow = {
    id: req.params.id,
    order: req.body.order,
    product: req.body.product,
    quantity: req.body.quantity
  }
  await checkValues(orderRow, res)

  try {
    const response = await model.update(orderRow)
    res.status(200).json(response)
  } catch {
    res.status(500).json('Internal Server Error')
  }
}
const del = async (req, res) => {
  try {
    const response = await model.del(req.params.id)
    res.status(200).json(response)
  } catch {
    res.status(500).json('Internal Server Error')
  }
}

module.exports = { getAll, getById, add, update, del }
