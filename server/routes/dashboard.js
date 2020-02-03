const router = require('express').Router();

router.route('/').get((req, res) => {
  res.json({"content": [{
    "id": 1,
    "title": "Hello World",
  }]});
});

module.exports = router;