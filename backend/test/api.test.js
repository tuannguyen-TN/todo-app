const request = require('supertest');

const chai = require('chai');

const app = require('../src/app');

describe('GET /api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'API - 👋🌎🌍🌏'
      }, done);
  });
});

describe('GET /api/v1/emojis', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1/emojis')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, ['😀', '😳', '🙄'], done);
  });
});

describe('GET /api/v1/task/random', () => {
  it('responds with success', (done) => {
    request(app)
      .get('/api/v1/task/random')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /api/v1/task/random', () => {
  it('checks for error', (done) => {
    request(app)
      .get('/api/v1/task/random')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) return err;
        return done();
      })
      .expect(200);
  });
});

describe('GET /api/v1/task/random', () => {
  it('checks for error', (done) => {
    request(app)
      .get('/api/v1/task/random')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return err;
        chai.expect(res.body).to.not.be.a('string');
        return done();
      })
      .expect(200);
  });
});
