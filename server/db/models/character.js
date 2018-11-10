const Sequelize = require('sequelize')
const db = require('../db')

const Character = db.define('character', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  race: {
    type: Sequelize.STRING,
  },
  class: {
    type: Sequelize.STRING,
  }
})

module.exports = Character
