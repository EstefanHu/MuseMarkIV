const router = require('express').Router();

router.route('/').get((req, res) => {
  res.json({"hubs": [
    {
      "id": 1,
      "title": "Write Away!",
      "img": "writeaway!.jpg"
    },
    {
      "id": 2,
      "title": "AU",
      "img": "au.jpg"
    },
    {
      "id": 3,
      "title": "UW Poetry Club",
      "img": "uwpoetryclub.jpg"
    },
    {
      "id": 4,
      "title": "ASUWQSC",
      "img": "asuwqsc.jpg"
    }
  ]});
});

module.exports = router;