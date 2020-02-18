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
        res.json({
            "author": {
                "firstName": "Estefan",
                "lastName": "Hu",
                "email": "estefanhu074@gmail.com",
                "credibility": 9487542
            },
            "post": {
                "title": "Where We Come from",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut aliquam libero, at volutpat sapien. Aenean nec feugiat elit. Curabitur finibus pulvinar mattis. Maecenas ut dolor accumsan, mattis arcu eget, aliquam nisl. Nunc vel gravida sapien. Vivamus sit amet elit sit amet quam suscipit pulvinar sed in lectus. Vestibulum a dolor sed justo accumsan dapibus. Phasellus ac urna tempus, facilisis neque sit amet, fermentum lacus.Praesent ut felis laoreet, finibus urna et, hendrerit tellus. Cras ut sagittis justo. Proin convallis a nisi ac molestie. Morbi nibh leo, aliquet sit amet semper quis, euismod id magna. Proin auctor enim in urna pellentesque porta. Sed eu velit a orci porta condimentum ultrices rutrum est. Vestibulum fringilla ut velit vel rutrum. Vivamus a nisi nunc. Suspendisse arcu risus, gravida vel mi id, euismod scelerisque neque. Aenean sit amet volutpat ante. Maecenas ornare ante non ex rutrum egestas. Donec bibendum odio a nibh aliquet, id lacinia nibh convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et tortor hendrerit, tempor lacus ut, pellentesque massa. Curabitur dignissim eget turpis in tempusNulla facilisi. Quisque consequat, odio non ultricies pharetra, urna nibh consectetur augue, at hendrerit est tellus sit amet mauris. Vivamus bibendum est leo, vitae sollicitudin ipsum ultrices vel. Morbi ac commodo velit, vel congue mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sed condimentum eros, non rhoncus purus. Ut nisi sem, laoreet at dignissim in, lobortis lacinia ligula. Quisque faucibus neque non urna bibendum luctus. Proin rutrum mollis dui, a ornare arcu molestie quis. Aenean malesuada sapien ante, congue tristique ex tempus at. Praesent ut auctor nunc, quis dapibus mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam pharetra eu nulla a convallis. Donec non arcu eu velit eleifend suscipit id sit amet quam. In porttitor, risus quis vehicula ornare, lorem turpis blandit ipsum, et volutpat arcu leo et urna. Integer in urna non odio sagittis aliquam ac quis augue.Pellentesque sed placerat urna. Sed ante turpis, lobortis quis luctus vitae, pharetra at tortor. Integer in velit a diam scelerisque finibus. In non ipsum sollicitudin, venenatis augue gravida, fermentum enim. Sed lobortis velit id condimentum semper. Ut sed ipsum non velit ullamcorper imperdiet. Maecenas egestas dolor non purus aliquam volutpat. Nunc eget purus quis odio fermentum tincidunt mollis vel metus. Mauris gravida egestas molestie. Cras massa metus, porttitor eget interdum id, sodales sed turpis. Ut aliquam at nisl eu dignissim. In mollis bibendum enim vel bibendum. Nam pulvinar magna at eros bibendum, non aliquet ligula luctus. Donec et mollis enim. Morbi ut sollicitudin lectus, a laoreet magna. Maecenas iaculis sem nulla, quis efficitur dolor posuere dictum. Integer ultricies vehicula magna eu ultricies. Nulla ac aliquam purus, non lobortis velit. Nunc cursus non ligula quis sagittis. Vivamus vestibulum elementum aliquam. Aliquam urna ex, pellentesque in maximus sed, eleifend quis metus. Duis at eleifend eros, vel convallis ligula. Nam vel ex id sem tempus porttitor. Mauris volutpat cursus turpis nec commodo. Nunc eget pharetra turpis, euismod imperdiet nibh. Duis ullamcorper lacus a mi pharetra, at elementum mauris laoreet. Sed egestas malesuada purus, at efficitur sem tincidunt sit amet. Donec elementum leo ac nisl pretium, nec finibus ex consectetur.",
                "credibility": 94862,
                "genre": "Fiction",
                "date": "Jan 7",
                "comments": [
                    {
                        "id": 1,
                        "comment": "Wow such a great piece thank you for making it",
                        "creator": "Steven W."
                    },
                    {
                        "id": 2,
                        "comment": "Awfull. No thanks",
                        "creator": "Jessica O."
                    }
                ]
            }
        });
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