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

const home = require('./routes/home');

app.use('/home', home);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});