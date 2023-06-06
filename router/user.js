const express = require('express')
const { getAll, getById, add, update, del, login } = require('../controllers/user')
const checkToken = require('../middlewares/checkToken')

const router = express.Router()

router.get('/', checkToken, getAll)
router.get('/:id', checkToken, getById)
router.post('/', add)
router.put('/:id', checkToken, update)
router.delete('/:id', checkToken, del)
router.post('/login', login)

module.exports = router
