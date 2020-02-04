const router = require('express').Router();

router.route('/').get((req, res) => {
  res.json({"hubs": [
    {
      "id": 1,
      "title": "Write Away!"
    },
    {
      "id": 2,
      "title": "Alternate Universe"
    },
    {
      "id": 3,
      "title": "University of Washington Poetry Society"
    }
  ]});
});

module.exports = router;