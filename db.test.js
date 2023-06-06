const db = require('./data/init')
const Product = require('./models/product')
const User = require('./models/user')

db.connect()

setTimeout(async () => {
  // console.log(await Product.getAll())
  // console.log(await Product.getById(1))
  // console.log(await Product.add('test 2', 'desc of test 2', 12.34, ''))
  // console.log(await Product.update(2, 'test 2 updated', 'desc of test 2', 12.34, ''))
  // console.log(await Product.del(2))
  // console.log(await User.add('Bravo', 'TestUser', 'bravo@test.user', '123456'))
  // console.log(await User.login('bravo@test.user', '123456'))
}, 500)
