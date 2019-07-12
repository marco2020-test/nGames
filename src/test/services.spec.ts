import * as routes from '../client/client-routes';
const nock = require('nock');
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:3001/api_admision';


describe('Admisión', () => {
  describe('Route POST /searchClient', () => {
    it('Ver Admisión', (done) => {
      const scope = nock(url)
        .post('/searchClient')
        .reply(404, {
          results: [{ statusCode: 404 }],
        });
      done();
    });
  });
});

describe('Admisión', () => {
  describe('Route POST /searchQuotes', () => {
    it('Ver Admisión', (done) => {
      const scope = nock(url)
        .post('/searchQuotes')
        .reply(200, {
          results: [{ codigo: 23 }],
        });
      done();
    });
  });
});
