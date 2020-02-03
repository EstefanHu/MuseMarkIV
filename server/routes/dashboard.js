const router = require('express').Router();

router.route('/').get((req, res) => {
  res.json({"content": [{
    "id": 1,
    "title": "Hello World",
    "genre": "Software",
    "crediblilty": 10543,
    "author": "Estefan Hu",
    "description": "This is a small test of wether or not something like this can actually work or not"
  }]});
});

module.exports = router;