import * as routes from '../lists/lists-route';
const nock = require('nock');
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:3001/api_admision';

describe('Admisión', () => {
  describe('Route GET /searchList', () => {
    it('Ver Admisión', (done) => {
      const scope = nock(url)
        .get('/searchList')
        .reply(200, {
          results: [{ codigo: 23 }],
        });
      done();
    });
  });
});