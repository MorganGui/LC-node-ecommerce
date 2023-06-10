const model = require('../models/product')

const checkValues = (product, res) => {
  if ([null, undefined].includes(product.name) || typeof product.name !== 'string')
    res.status(400).end('Invalid name')
  if ([null, undefined].includes(product.desc) || typeof product.desc !== 'string')
    res.status(400).end('Invalid desc')
  if ([null, undefined].includes(product.price) || typeof product.price !== 'number')
    res.status(400).end('Invalid price')
}

const getAll = async (req, res) => {
  try {
    const response = await model.getAll()
    res.status(200).json(response)
  } catch {
    res.status(500).end('Internal server error.')
  }
}
const getById = async (req, res) => {
  try {
    const response = await model.getById(req.params.id)
    res.status(200).json(response)
  } catch {
    res.status(500).end('Internal Server Error')
  }
}

const add = async (req, res) => {
  const product = {
    name: req.body.name,
    desc: req.body.desc,
    price: req.body.price
  }
  checkValues(product, res)

  try {
    const response = await model.add(product)
    res.status(200).json(response)
  } catch {
    res.status(500).end('Internal Server Error')
  }
}
const update = async (req, res) => {
  const product = {
    id: req.params.id,
    name: req.body.name,
    desc: req.body.desc,
    price: req.body.price
  }
  checkValues(product, res)

  try {
    const response = await model.update(product)
    res.status(200).json(response)
  } catch {
    res.status(500).end('Internal Server Error')
  }
}
const del = async (req, res) => {
  try {
    const response = await model.del(req.params.id)
    res.status(200).json(response)
  } catch {
    res.status(500).end('Internal Server Error')
  }
}

module.exports = { getAll, getById, add, update, del }
