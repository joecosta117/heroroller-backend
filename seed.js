const db = require('./server/db/db')
const { green, red } = require('chalk');
const { Character, DiceSet } = require('./server/db/models')

const characters = [
  {
    name: 'Rykar',
    class: 'Monk',
    race: 'Human'
  },
  {
    name: 'Xarro',
    class: 'Wizard',
    race: 'Dark Elf'
  }
]

const dicesets = [
  {
    dice: '1d8+5',
    characterId: 1
  },
  {
    dice: '8d6',
    characterId: 2
  },
  {
    dice: '4d12+5',
    characterId: 2
  },
  {
    dice: '1d20+5',
    characterId: 1
  }
]

const seed = async () => {
  await db.sync({ force: true });

  await Character.bulkCreate(characters);
  await DiceSet.bulkCreate(dicesets);
  // await Promise.all(DiceSet.map(set => DiceSet.create(set)))

  console.log(green('Seeding success!'));
  await db.close();
};

seed().catch(err => {
  console.error(red('Oh no, something went wrong!'));
  console.error(err);
  db.close();
})
