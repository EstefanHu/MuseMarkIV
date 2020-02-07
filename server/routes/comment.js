const router = require('express').Router();

router.route('/').get((req, res) => {
  res.json({"Hello": "World"})
});

module.exports = router;