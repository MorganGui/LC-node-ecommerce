const model = require('../models/user')
const functions = require('./functions')

const checkValues = async (user, res) => {
  if ([null, undefined].includes(user.firstname) || typeof user.firstname !== 'string')
    res.status(400).end('Invalid firstname')
  if ([null, undefined].includes(user.lastname) || typeof user.lastname !== 'string')
    res.status(400).end('Invalid lastname')
  if ([null, undefined].includes(user.mail) || typeof user.mail !== 'string')
    res.status(400).end('Invalid mail')
  if ([null, undefined].includes(user.password) || typeof user.password !== 'string')
    res.status(400).end('Invalid password')

  try {
    const mails = await model.getByMail(user.mail)
    if (mails.length > 0) {
      res.status(409).end('Mail is already registered')
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
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    mail: req.body.mail,
    password: req.body.password,
    role: req.body.role
  }
  await checkValues(user, res)
  await functions.add(model, user, res)
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
  checkValues(user, res)
  await functions.update(model, user, res)
}
const del = async (req, res) => {
  await functions.del(model, req, res)
}



const login = async (req, res) => {
  try {
    const results = await model.login(req.body.mail, req.body.password)

    if (results.error) {
      res.status(500).end(results.error)
    } else {
      res.status(200).json(results)
    }

  } catch {
    res.status(500).end('Internal Server Error')
  }
}

module.exports = { getAll, getById, add, update, del, login }
