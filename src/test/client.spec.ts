import * as routes from '../client/client-routes';
const nock = require('nock');
let chai = require('chai');
let chaiHttp = require('chai-http');
let assert   = require('assert');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:3001/api_admision';
let models= require ('../client/client-models');

describe("Check Sum Function: ", function() {
 it("Check the returned value using: assert(typeof(value, 'value')): ", function() {
    let result   = models['codSuper'];
    assert(typeof(result), "string");
  });
});
describe('Admisión', () => {
  describe('Route POST /searchVar', () => {
    it('Ver Admisión', (done) => {
      const scope = nock(url)
        .get('/searchVar')
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
