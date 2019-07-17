import * as routes from '../lists/lists-route';
const nock = require('nock');
let chai = require('chai');
let chaiHttp = require('chai-http');
let assert = require('assert');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:3001/api_admision';
let modells = require('../lists/lists-models');

describe("Check Sum Function modells: ", function () {
  it("Check the returned value using: assert(typeof(value, 'value')): funcion recuperarListas", function () {
      let result = modells.recuperarListas();
      assert(typeof (result), "string");
  });
});

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

