const express = require('express');
const jsonParser = require('body-parser').json();
const Beer = require(__dirname + '/..models/beer');
const handleDBError = require(__dirname + '/../lib/handle_db_error');

var beerRouter = module.exports = exports = express.Router();

beerRouter.get('/beers' (req, res) => {
  Beer.find({}, (err, data) => {
    if (err) return handleDBError(err, res);

    res.status(200).json(data);
  });
});

beerRouter.post('/beers', jsonParser, (req, res) => {
  var newBeer = new Beer(req.body);
  newBeer.save((err, data) => {
    if (err) return handleDBError(err, res);

    res.status(200).json(data);
  });
});

beerRouter.put('/beers/:id', jsonParser, (req, res) => {
  var beerData = req.body;
  delete beerData._id;
  Beer.update({_id: req.params.id}, beerData, (err) => {
    if (err) return handleDBError(err, res);

    res.status(200).json({msg: 'success'});
  });
});

beerRouter.delete('/beers/:id', (req, res) => {
  Beer.remove({_id: req.params.id}, (err) => {
    if (err) return handleDBError(err, res);

    res.status(200).json({msg: 'success'});
  });
});
