const db = require('./db')
const Cat = require('./models/cats')
// register models in case we need to create associations later


module.exports = { db, Cat }
