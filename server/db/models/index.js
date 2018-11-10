const Character = require('./character')
const DiceSet = require('./diceset')

DiceSet.belongsTo(Character)
Character.hasMany(DiceSet)

module.exports = { Character, DiceSet };
