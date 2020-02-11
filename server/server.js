'use strict';
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const DB_CONNECTION = 'musedb';
mongoose.connect(`mongodb://localhost/${DB_CONNECTION}`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

mongoose.connection.once('open', () => {
    console.log(`connection has been established to ${DB_CONNECTION}`);
}).on('err', err => {
    console.log('Connection Error: ' + err);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/trending', (req, res) => {
    try {
        const trending = {
            "trending": [
                {
                    "id": 1,
                    "title": "Gen X Will Not go Quitly",
                    "author": "Amber Fraley",
                    "date": "Jan 23"
                },
                {
                    "id": 2,
                    "title": "The Actual State of the Union",
                    "author": "Drew Magnorly",
                    "date": "Jan 28"
                },
                {
                    "id": 3,
                    "title": "Teslas Cybertruck has a huge coboy probelm",
                    "author": "David H Freeman",
                    "date": "Feb 3"
                },
                {
                    "id": 4,
                    "title": "Want to Feel loved? Get Cancer.",
                    "author": "Brandon Janouse",
                    "date": "Jan 12"
                }
            ]
        }
        res.json(trending);
    } catch(error) {
        res.type('text').status(500).send('Error:' + error);
    }
})

app.post('/createComment/:post', (req, res) => {
    try {
        res.json('gotit');
    } catch(error) {
        res.type('text').status(500).send('Error:' + error);
    }
});

app.get('/genre/:genre', (req, res) => {
    try {
        const genre = req.params.genre;
        console.log(genre);
        res.json({
            "posts": [
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
                  "id": 6,
                  "title": "Bricolage",
                  "pitch": "UW's undergraduate literary arts magazine"
                },
                {
                  "id": 4,
                  "title": "ASUWQSC",
                  "pitch": "The Queer Student Commission aims to bring equity and justice for queer and trans students on campus."
                },
                {
                  "id": 5,
                  "title": "The Daily",
                  "pitch": "Daily news for the University of Washington"
                }
              ]
        });
    } catch(error) {
        res.type('text').status(500).send('Error:' + error);
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});