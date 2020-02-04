const router = require('express').Router();

router.route('/').get((req, res) => {
  res.json({"hubs": [
    {
      "id": 1,
      "title": "Write Away!"
    },
    {
      "id": 2,
      "title": "AU"
    },
    {
      "id": 3,
      "title": "UW Poetry Club"
    },
    {
      "id": 4,
      "title": "ASUWQSC"
    }
  ]});
});

module.exports = router;