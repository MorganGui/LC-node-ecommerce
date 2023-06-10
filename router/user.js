const express = require('express')
const { getAll, getById, getByMail, getAdmin, register, update, del, login } = require('../controllers/user')
const checkToken = require('../middlewares/checkToken')
const checkAdmin = require('../middlewares/checkAdmin')
const checkOwnOrAdmin = require('../middlewares/checkOwnOrAdmin')

const router = express.Router()

router.get('/admin',      checkToken, checkAdmin,      getAdmin)
router.get('/mail/:mail', checkToken, checkAdmin,      getByMail)
router.get('/',           checkToken, checkAdmin,      getAll)
router.get('/:id',        checkToken, checkOwnOrAdmin, getById)

router.post('/',      register)
router.put('/:id',    checkToken, checkOwnOrAdmin, update)
router.delete('/:id', checkToken, checkOwnOrAdmin, del)
router.post('/login', login)

module.exports = router
