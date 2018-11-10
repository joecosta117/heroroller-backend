const router = require('express').Router()
const { Character, DiceSet } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const characters = await Character.findAll()
    res.send(characters)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const character = await Character.findAll({
      where: {id},
      include: [{
        model: DiceSet
      }]
    })
    res.send(character)
  } catch (err) {
    next(err)
  }
})

router.delete('/id', async (req, res, next) => {
  try {
    const id = req.params.id
    const deleted = await Character.destroy({
      where: {id}
    })
    res.send('deleted')
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const updated = await Character.findById(req.params.id)
    await updated.update({
      name: req.body.name,
      class: req.body.class,
      race: req.body.race
    })
    res.send(updated)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newCharacter = await Character.create({
      name: req.body.name,
      class: req.body.class,
      race: req.body.race
    })
    res.send(newCharacter)
  } catch (err) {
    next(err)
  }
})
