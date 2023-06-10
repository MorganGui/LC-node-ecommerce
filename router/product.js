const express = require('express')
const { getAll, getById, add, update, del } = require('../controllers/product')
const checkToken = require('../middlewares/checkToken')
const checkAdmin = require('../middlewares/checkAdmin')

const router = express.Router()

router.get('/',    getAll)
router.get('/:id', getById)

router.post('/',      checkToken, checkAdmin, add)
router.put('/:id',    checkToken, checkAdmin, update)
router.delete('/:id', checkToken, checkAdmin, del)

module.exports = router
