'use strict'

const express = require('express');
const app = module.exports = exports = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/beers_app_dev');

//changed from plural to singular (beers/brewers)
const beerRouter = require(__dirname + '/routes/beers');
const brewerRouter = require(__dirname + '/routes/brewers');
const beersDrankRouter = require(__dirname + '/routes/beersDrankRouter');
const userRouter = require(__dirname + '/routes/userRoutes');

app.use('/api', beerRouter);
app.use('/api', brewerRouter);
app.use('/api', userRouter);
// app.use('/beersDrank', beersDrankRouter);

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('server is up on port: ' + PORT));
