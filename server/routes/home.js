const router = require('express').Router();

router.route('/').get((req, res) => {
  res.json({"hubs": [
      {
        "id": 1,
        "title": "Write Away!",
        "pitch": "People think dreams aren't real just because they aren't made of matter, of particles."
      },
      {
        "id": 2,
        "title": "AU",
        "pitch": "Speculative Arts & Lit Journal of the University of Washington"
      },
      {
        "id": 3,
        "title": "UW Poetry Club",
        "pitch": "Passion Never Rests"
      },
      {
        "id": 4,
        "title": "ASUWQSC",
        "pitch": "The Queer Student Commission aims to bring equity and justice for queer and trans students on campus."
      }
    ]
  });
});

module.exports = router;