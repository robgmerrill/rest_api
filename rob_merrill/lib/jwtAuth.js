'use strict';

const User = require(__dirname + '/../models/user');
const jwt = require('jsonwebtoken');

module.exports = exports = function(req, res, next) {
  var decoded;
  try {
    decoded = jwt.verify(req.headers.token, process.env.APP_SECRET || 'changethis');
  } catch (e) {
    constole.log(e);
    return res.status(401).json({msg: 'you are not an authentic user'});
  }
  User.findOne({ _id: decoded.id }, (err, user) => {
    if (err) return res.status(401).json({ msg: 'you are not an authentic user'});
    if (!user) return res.status(401).json({ msg: 'you are not an authentic user'});
    req.user = user;
    next();
  });
};
