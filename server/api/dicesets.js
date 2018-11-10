const router = express('express').Router()
const { DiceSet } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const dicesets = await DiceSet.findAll()
    res.send(dicesets)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const diceset = await DiceSet.findById(req.params.id)
    res.send(diceset)
  } catch (err) {
    next(err)
  }
})

router.delete('/id', async (req, res, next) => {
  try {
    const id = req.params.id
    const deleted = await DiceSet.destroy({
      where: {id}
    })
    res.send('deleted')
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const updated = await DiceSet.findById(req.params.id)
    await updated.update({
      set: req.body.set
    })
    res.send(updated)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newDiceSet = await DiceSet.create({
      set: req.body.set
    })
    res.send(newDiceSet)
  } catch (err) {
    next(err)
  }
})
