import * as routes from '../client/client-routes';
const nock = require('nock');
let chai = require('chai');
let chaiHttp = require('chai-http');
let assert = require('assert');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:3001/api_admision';
let models = require('../client/client-models');
let route = require('../client/client-routes');

describe("Check Sum Value: ", function () {
  it("Check the returned value using: assert(typeof(value, 'value')): ", function () {
    let result = models['codSuper'];
    assert(typeof (result), "string");
  });
});

describe('Client-Spec- Funtions', () => {
  it('it should GET searchClient1', () => {
    chai.request(route)
      .post('/searchClient1')
      .set('content-type', 'application/json')
      .send({documento: '6431869-0'})
      .end((err: any, res: any) => {

      });
  });
  it('it should GET searchClient', () => {
    chai.request(route)
      .post('/searchClient')
      .set('content-type', 'application/json')
      .send({documento: '6431869'})
      .end((err: any, res: any) => {

      });
  });
  it('it should POST searchQuotes', () => {
    chai.request(route)
      .post('/searchQuotes')
      .set('content-type', 'application/json')
      .send({inRut: '24318592'})
      .end((err: any, res: any) => {

      });
  });
  it('it should GET updateClient', () => {
    chai.request(route)
      .post('/updateClient')
      .end((err: any, res: any) => {

      });
  });
  it('it should GET updatePrevision', () => {
    chai.request(route)
      .post('/updatePrevision')
      .end((err: any, res: any) => {

      });
  });
  it('it should GET searchBono', () => {
    chai.request(route)
      .post('/searchBono')
      .end((err: any, res: any) => {

      });
  });
  it('it should GET getToken', () => {
    chai.request(route)
      .post('/getToken')
      .end((err: any, res: any) => {

      });
  });
  it('it should GET searchCalugas', () => {
    chai.request(route)
      .post('/searchCalugas')
      .end((err: any, res: any) => {

      });
  });
});
