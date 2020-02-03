const router = require('express').Router();

router.route('/').get((req, res) => {
  res.json({'hello': 'yes'});
});

module.exports = router;