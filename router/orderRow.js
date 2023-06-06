const express = require('express')
const { getAll, getById, add, update, del } = require('../controllers/orderRow')
const checkToken = require('../middlewares/checkToken')

const router = express.Router()

router.get('/', checkToken, getAll)
router.get('/:id', checkToken, getById)
router.post('/', checkToken, add)
router.put('/:id', checkToken, update)
router.delete('/:id', checkToken, del)

module.exports = router
