const express = require('express')
const db = require('./data/init')
const userRouter = require('./router/user')
const productRouter = require('./router/product')
const orderRouter = require('./router/order')
const orderRowRouter = require('./router/orderRow')

db.connect()
const app = express()
app.use(express.json()) 

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/order', orderRouter)
app.use('/api/order-row', orderRowRouter)

app.listen(3000)
