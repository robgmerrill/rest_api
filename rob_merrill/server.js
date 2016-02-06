'use strict'

const express = require('express');
const app = module.exports = exports = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/beers_app_dev');

const beersRouter = require(__dirname + '/routes/beers');
const wineRouter = require(__dirname + '/routes/wines')

app.use('/api', beersRouter);

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server is up on port: ' + PORT));
