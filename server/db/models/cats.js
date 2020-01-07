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
    allowNull: false
  },
  breed: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  favoriteSnack: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hobby: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = Cat
