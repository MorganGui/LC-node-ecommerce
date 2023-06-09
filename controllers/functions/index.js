const sendError = (res) => {
  res.status(500).end('Internal Server Error')
}

const getAll = async (model, res) => {
  try {
    const results = await model.getAll()

    if (results) {
      res.status(200).json(results)
    } else {
      res.status(404).json([])
    }

  } catch (e) {
    sendError(res)
  }
}
const getById = async (model, res, id) => {
  try {
    const results = await model.getById(id)

    if (results) {
      res.status(200).json(results)
    } else {
      res.status(404).json(null)
    }

  } catch {
    sendError(res)
  }
}

const add = async (model, req, res) => {
  try {
    const results = await model.add(req)

    if (results.changes) {
      res.status(200).json('ok: document successfully created')
    } else {
      sendError(res)
    }

  } catch {
    sendError(res)
  }
}
const update = async (model, req, res) => {
  try {
    const results = await model.update(req)

    if (results.changes) {
      res.status(200).json('ok: document successfully updated')
    } else {
      sendError(res)
    }

  } catch {
    sendError(res)
  }
}
const del = async (model, req, res) => {
  try {
    const results = await model.del(req.params.id)

    if (results.changes) {
      res.status(200).json('ok: document successfully deleted')
    } else {
      sendError(res)
    }

  } catch {
    sendError(res)
  }
}

module.exports = { getAll, getById, add, update, del }
