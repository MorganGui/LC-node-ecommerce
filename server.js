const express = require('express')
const cors = require('cors') 
const db = require('./data/init')
const userRouter = require('./router/user')
const productRouter = require('./router/product')
const orderRouter = require('./router/order')
const orderRowRouter = require('./router/orderRow')

db.connect()
const app = express()
app.use(cors())
app.use(express.json()) 

app.use('/api/v1/user', userRouter)
app.use('/api/v1/product', productRouter)
app.use('/api/v1/order', orderRouter)
app.use('/api/v1/order-row', orderRowRouter)

app.listen(3000)
