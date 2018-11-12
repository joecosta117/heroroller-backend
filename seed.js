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
  },
  {
    name: 'Kirk',
    class: 'Gunslinger',
    race: 'Gnome'
  },
  {
    name: 'Ramiel',
    class: 'Paladin',
    race: 'Aasimar'
  },
  {
    name: 'Red Dragon'
  },
  {
    name: 'Karissa',
    class: 'Rogue / Bard',
    race: 'Half-elf'
  }
]

const dicesets = [
  {
    name: 'Punch Damage',
    dice: '1d8+5',
    characterId: 1
  },
  {
    name: 'Fireball',
    dice: '8d6',
    characterId: 2
  },
  {
    name: 'Cone of Cold',
    dice: '8d8',
    characterId: 2
  },
  {
    name: 'Punch Attack',
    dice: '1d20+9',
    characterId: 1
  },
  {
    name: 'Shotgun Blast',
    dice: '2d10+4',
    characterId: 3
  },
  {
    name: 'Pistol Attack',
    dice: '1d20+8',
    characterId: 3
  },
  {
    name: 'Divine Smite',
    dice: '5d8',
    characterId: 4
  },
  {
    name: 'Greatsword Slash',
    dice: '1d20+10',
    characterId: 4
  },
  {
    name: 'Fire Breath',
    dice: '18d6',
    characterId: 5
  },
  {
    name: 'Claw Attack',
    dice: '1d20+14',
    characterId: 5
  },
  {
    name: 'Rapier of Lightning',
    dice: '1d8+1d6+5',
    characterId: 6
  },
  {
    name: 'Lightning Bolt',
    dice: '8d6',
    characterId: 6
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
