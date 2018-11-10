const router = require('express').Router()

router.use('/characters', require('./characters'))
router.use('/dicesets', require('./dicesets'))

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router
