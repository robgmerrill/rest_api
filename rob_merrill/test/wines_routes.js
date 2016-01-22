const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const mongoose = require('mongoose');
process.env.MONGOLAB_URI = 'mongodb://localhost/wines_app_test';
const server = require(__dirname + '/../server');
const Wine = require(__dirname + '/../models/wine');

describe('the wines api', () => {
  after((done) => {
    mongoose.connection.db.dropDatabase() => {
      done();
  });
});

it('should be able to retrieve all of our wines', (done) => {
  chai.request('localhost:3000')
    .get('/api/wines')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(Array.isArray(res.body)).to.eql(true);
      done();
    });
});

it('should create a wine with a POST', (done) => {
  chai.request('localhost:3000')
    .post('/api/wines')
    .send({name: 'test wine'})
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.body.name).to.eql('test wine');
      expect(res.body).to.have.property('_id');
      done()
    });
});
