const model = require('../models/product')
const functions = require('./functions')

const checkValues = (product, res) => {
  if ([null, undefined].includes(product.name) || typeof product.name !== 'string')
    res.status(400).end('Invalid name')
  if ([null, undefined].includes(product.desc) || typeof product.desc !== 'string')
    res.status(400).end('Invalid desc')
  if ([null, undefined].includes(product.price) || typeof product.price !== 'number')
    res.status(400).end('Invalid price')
}

const getAll = async (req, res) => {
  await functions.getAll(model, res)
}
const getById = async (req, res) => {
  await functions.getById(model, res, req.params.id)
}

const add = async (req, res) => {
  const product = {
    name: req.body.name,
    desc: req.body.desc,
    price: req.body.price,
    picture: req.body.picture
  }
  checkValues(product, res)
  await functions.add(model, product, res)
}
const update = async (req, res) => {
  const product = {
    id: req.params.id,
    name: req.body.name,
    desc: req.body.desc,
    price: req.body.price,
    picture: req.body.picture
  }
  checkValues(product, res)
  await functions.update(model, product, res)
}
const del = async (req, res) => {
  await functions.del(model, req, res)
}

module.exports = { getAll, getById, add, update, del }
