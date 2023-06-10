const express = require('express')
const { getAll, getById, getAdmin, register, update, del, login } = require('../controllers/user')
const checkToken = require('../middlewares/checkToken')
const checkAdmin = require('../middlewares/checkAdmin')

const router = express.Router()

router.get('/', checkToken, getAll)
router.get('/admin', checkToken, checkAdmin, getAdmin)
router.get('/:id', checkToken, getById)

router.post('/', register)
router.put('/:id', checkToken, update)
router.delete('/:id', checkToken, del)
router.post('/login', login)

module.exports = router
