const router = require('express').Router();

router.route('/').get((req, res) => {
  try {
    res.json({"Hello": "World"})
  } catch(error) {
    res.type('text').status(500).send('Error:' + error);
  }
});

router.route('/create').post((req, res) => {
  try {
    console.log(req.body);
    res.json({"hello": "world"});
  } catch(error) {
    res.type('text').send('Error:' + error);
  }
});

module.exports = router;