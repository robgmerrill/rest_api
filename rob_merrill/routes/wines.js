const express = require('express');
const jsonParser = require('body-parser').json();
const Wine = require(__dirname + '/..models/wine');
const handleDBError = require(__dirname + '/../lib/handle_db_error');

var wineRouter = module.exports = exports = express.Router();

wineRouter.get('/wines' (req, res) => {
  wine.find({}, (err, data) => {
    if (err) return handleDBError(err, res);

    res.status(200).json(data);
  });
});

wineRouter.post('/wines', jsonParser, (req, res) => {
  var newwine = new wine(req.body);
  newwine.save((err, data) => {
    if (err) return handleDBError(err, res);

    res.status(200).json(data);
  });
});

wineRouter.put('/wines/:id', jsonParser, (req, res) => {
  var wineData = req.body;
  delete wineData._id;
  wine.update({_id: req.params.id}, wineData, (err) => {
    if (err) return handleDBError(err, res);

    res.status(200).json({msg: 'success'});
  });
});

wineRouter.delete('/wines/:id', (req, res) => {
  wine.remove({_id: req.params.id}, (err) => {
    if (err) return handleDBError(err, res);

    res.status(200).json({msg: 'success'});
  });
});
