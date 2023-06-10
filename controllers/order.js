const model = require('../models/order') 
const User = require('../models/user')

const checkValues = async (order, res) => {
  if ([null, undefined].includes(order.user) || typeof order.user !== 'number')
    res.status(400).end('Invalid user')

  try {
    const user = await User.getById(order.user)
    if (user === null) {
      res.status(404).end('Cannot find user.')
    }
  } catch {
    res.status(500).end('Internal server error.')
  }
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
    const response = await model.getById(id)
    res.status(200).json(response)
  } catch {
    res.status(500).end('Internal server error.')
  }
}

const add = async (req, res) => {
  const order = {
    user: req.body.user
  }
  await checkValues(order, res)

  try {
    const response = await model.add(order)
    res.status(200).json(response)
  } catch {
    res.status(500).end('Internal server error.')
  }
}
const update = async (req, res) => {
  const order = {
    id: req.params.id,
    user: req.body.user
  }
  await checkValues(order, res)

  try {
    const response = await model.update(req)
    res.status(200).json(response)
  } catch {
    res.status(500).end('Internal server error.')
  }
}
const del = async (req, res) => {
  try {
    const response = await model.del(req.params.id)
    res.status(200).json(response)
  } catch {
    res.status(500).end('Internal server error.')
  }
}

module.exports = { getAll, getById, add, update, del }
