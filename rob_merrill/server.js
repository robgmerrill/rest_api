'use strict'

const express = require('express');
const app = module.exports = exports = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/beers_app_dev');

const beersRouter = require(__dirname + '/routes/beers');
const brewersRouter = require(__dirname + '/routes/brewers');
const beersDrankRouter = require(__dirname + '/routes/beersDrankRouter');
const userRouter = require(__dirname + '/routes/userRoutes');

app.use('/api', beersRouter);
app.use('/api', brewersRouter);
app.use('/api', userRouter);

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server is up on port: ' + PORT));
