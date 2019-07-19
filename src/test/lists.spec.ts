import * as routes from '../lists/lists-route';
const nock = require('nock');
let chai = require('chai');
let chaiHttp = require('chai-http');
let assert = require('assert');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:3001/api_admision';
let modells = require('../lists/lists-models');
let route=require('../lists/lists-route');

describe("Check Sum Function modells: ", function () {
  it("Check the returned value using: assert(typeof(value, 'value')): funcion recuperarListas", function () {
      let result = modells.recuperarListas();
      assert(typeof (result), "string");
  });
});

describe('List-Spec- Funtions', () => {
   it('it should GET searchList', () => {
    chai.request(route)
        .get('/searchList')
        .end((err: any, res: any) => {

        });
  });
  it('it should GET typeArancel', () => {
    chai.request(route)
        .get('/typeArancel')
        .end((err: any, res: any) => {
        });
  });
  it('it should GET codeConvenio', () => {
    chai.request(route)
        .get('/codeConvenio')
        .end((err: any, res: any) => {
        });
  });
  it('it should GET typeProduct', () => {
    chai.request(route)
        .get('/typeProduct')
        .end((err: any, res: any) => {
        });
  });
  it('it should GET convenio', () => {
    chai.request(route)
        .get('/convenio')
        .end((err: any, res: any) => {
        });
  });
  it('it should GET searchPais', () => {
    chai.request(route)
        .get('/searchPais')
        .end((err: any, res: any) => {
        });
  });
  it('it should GET searchComuna', () => {
    chai.request(route)
        .get('/searchComuna')
        .end((err: any, res: any) => {
        });
  });
  it('it should GET searchFinan', () => {
    chai.request(route)
        .get('/searchFinan')
        .end((err: any, res: any) => {
        });
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
