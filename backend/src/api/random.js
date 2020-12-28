const faker = require('faker');

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    id: Math.floor(Math.random() * 10000),
    text: faker.random.words()
  });
});

module.exports = router;
