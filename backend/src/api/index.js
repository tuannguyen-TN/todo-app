const express = require('express');

const emojis = require('./emojis');
const random = require('./random');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/task/random', random);

module.exports = router;
