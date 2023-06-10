const model = require('../models/user')

const checkValues = async (user, res) => {
  if ([null, undefined].includes(user.firstname) || typeof user.firstname !== 'string')
    res.status(400).json('Invalid firstname')
  if ([null, undefined].includes(user.lastname) || typeof user.lastname !== 'string')
    res.status(400).json('Invalid lastname')
  if ([null, undefined].includes(user.mail) || typeof user.mail !== 'string')
    res.status(400).json('Invalid mail')
  if ([null, undefined].includes(user.password) || typeof user.password !== 'string')
    res.status(400).json('Invalid password')
    if (!['user', 'admin'].includes(user.role))
      res.status(400).json('Invalid role')

  try {
    const mails = await model.getByMail(user.mail)
    if (mails.length > 0 && mails[0].id !== user.id) {
      res.status(400).json('Mail is already registered')
    }
  } catch {
    res.status(500).json('Internal Server Error')
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
const getAdmin = async (req, res) => {
  try {
    const response = await model.getAdmin()
    res.status(200).json(response)
  } catch {
    res.status(500).json('Internal Server Error')
  }
}

const register = async (req, res) => {
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    mail: req.body.mail,
    password: req.body.password,
    role: 'user'
  }
  await checkValues(user, res)

  try {
    const response = await model.register(user)
    res.status(200).json(response)
  } catch {
    res.status(500).json('Internal server error.')
  }
}
const update = async (req, res) => {
  const user = {
    id: req.params.id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    mail: req.body.mail,
    password: req.body.password,
    role: req.body.role
  }
  await checkValues(user, res)

  try {
    const response = await model.update(user)
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



const login = async (req, res) => {
  try {
    const response = await model.login(req.body.mail, req.body.password)
    res.status(200).json(response)
  } catch {
    res.status(500).json('Internal Server Error')
  }
}

module.exports = { getAll, getById, getAdmin, register, update, del, login }
