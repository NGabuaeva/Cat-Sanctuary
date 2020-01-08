const Sequelize = require('sequelize')
const db = require('../db')

const Cat = db.define('cat', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/favicon.ico'
  },
  age: {
    type: Sequelize.INTEGER,
  },
  breed: {
    type: Sequelize.STRING,
  },
  favoriteSnack: {
    type: Sequelize.STRING,
  },
  color: {
    type: Sequelize.STRING,
  },
  hobby: {
    type: Sequelize.STRING,
  }
})

module.exports = Cat
