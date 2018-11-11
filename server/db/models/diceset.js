const Sequelize = require('sequelize')
const db = require('../db')

const DiceSet = db.define('diceset', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dice: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = DiceSet
