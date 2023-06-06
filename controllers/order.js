const model = require('../models/order') 
const User = require('../models/user')
const functions = require('./functions')

const checkValues = async (order, res) => {
  if ([null, undefined].includes(order.user) || typeof order.user !== 'number')
    res.status(400).end('Invalid user')

  try {
    const user = await User.getById(order.user)
    if (user === null) {
      res.status(404).end('Cannot find user')
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
  const order = {
    user: req.body.user
  }
  await checkValues(order, res)
  await functions.add(model, order, res)
}
const update = async (req, res) => {
  const order = {
    id: req.params.id,
    user: req.body.user
  }
  await checkValues(order, res)
  await functions.update(model, order, res)
}
const del = async (req, res) => {
  await functions.del(model, req, res)
}

module.exports = { getAll, getById, add, update, del }
