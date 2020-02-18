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

app.get('/home', (req, res) => {
    try {
        const home = {
            "showcase": [
                {
                    "id": 1,
                    "title": "Unexpected Stranger",
                    "author": "Lidia H.",
                    "date": "Jan 23"
                },
                {
                    "id": 2,
                    "title": "Literacy is in the Eye of the Beholder",
                    "author": "EDP",
                    "date": "Jan 28"
                },
                {
                    "id": 3,
                    "title": "The Valley & The Brothers",
                    "author": "Elsa Petrov",
                    "date": "Feb 3"
                },
                {
                    "id": 4,
                    "title": "Want to Feel loved? Get Cancer.",
                    "author": "Brandon Janouse",
                    "date": "Jan 12"
                }
            ],
            "posts": [
                {
                    "id": 1,
                    "genre": "Short Story",
                    "title": "Unexpected Stranger",
                    "author": "Lidia H.",
                    "date": "Jan 23",
                    "pitch": "When a Stranger person enters a strange new place",
                    "credibility": 89634,
                    "length": "5 min"
                },
                {
                    "id": 2,
                    "genre": "Poem",
                    "title": "Literacy is in the Eye of the Beholder",
                    "author": "EDP",
                    "date": "Jan 28",
                    "pitch": "When a Stranger person enters a strange new place",
                    "credibility": 894311,
                    "length": "5 min"
                },
                {
                    "id": 3,
                    "genre": "Poem",
                    "title": "The Valley & The Brothers",
                    "author": "Elsa Petrov",
                    "date": "Feb 3",
                    "pitch": "When a Stranger person enters a strange new place",
                    "credibility": 1934817,
                    "length": "5 min"
                },
                {
                    "id": 4,
                    "genre": "Short Story",
                    "title": "Unexpected Stranger",
                    "author": "Lidia H.",
                    "date": "Jan 23",
                    "pitch": "When a Stranger person enters a strange new place",
                    "credibility": 89634,
                    "length": "5 min"
                },
                {
                    "id": 5,
                    "genre": "Poem",
                    "title": "Literacy is in the Eye of the Beholder",
                    "author": "EDP",
                    "date": "Jan 28",
                    "pitch": "When a Stranger person enters a strange new place",
                    "credibility": 894311,
                    "length": "5 min"
                },
                {
                    "id": 6,
                    "genre": "Poem",
                    "title": "The Valley & The Brothers",
                    "author": "Elsa Petrov",
                    "date": "Feb 3",
                    "pitch": "When a Stranger person enters a strange new place",
                    "credibility": 1934817,
                    "length": "5 min"
                },
                {
                    "id": 7,
                    "genre": "Short Story",
                    "title": "Unexpected Stranger",
                    "author": "Lidia H.",
                    "date": "Jan 23",
                    "pitch": "When a Stranger person enters a strange new place",
                    "credibility": 89634,
                    "length": "5 min"
                },
                {
                    "id": 8,
                    "genre": "Poem",
                    "title": "Literacy is in the Eye of the Beholder",
                    "author": "EDP",
                    "date": "Jan 28",
                    "pitch": "When a Stranger person enters a strange new place",
                    "credibility": 894311,
                    "length": "5 min"
                },
                {
                    "id": 9,
                    "genre": "Poem",
                    "title": "The Valley & The Brothers",
                    "author": "Elsa Petrov",
                    "date": "Feb 3",
                    "pitch": "When a Stranger person enters a strange new place",
                    "credibility": 1934817,
                    "length": "5 min"
                },
                {
                    "id": 10,
                    "genre": "Short Story",
                    "title": "Unexpected Stranger",
                    "author": "Lidia H.",
                    "date": "Jan 23",
                    "pitch": "When a Stranger person enters a strange new place",
                    "credibility": 89634,
                    "length": "5 min"
                },
                {
                    "id": 11,
                    "genre": "Poem",
                    "title": "Literacy is in the Eye of the Beholder",
                    "author": "EDP",
                    "date": "Jan 28",
                    "pitch": "When a Stranger person enters a strange new place",
                    "credibility": 894311,
                    "length": "5 min"
                },
                {
                    "id": 12,
                    "genre": "Poem",
                    "title": "The Valley & The Brothers",
                    "author": "Elsa Petrov",
                    "date": "Feb 3",
                    "pitch": "When a Stranger person enters a strange new place",
                    "credibility": 1934817,
                    "length": "5 min"
                }
            ]
        }
        res.json(home);
    } catch(error) {
        res.type('text').status(500).send('Error:' + error);
    }
});

app.get('/post/:id', (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        res.json('yaaaas');
    } catch(error) {
        res.type('text').status(500).send('Error:' + error);
    }
});

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
            "posts": "hello"
        })
    } catch(error) {
        res.type('text').status(500).send('Error:' + error);
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});