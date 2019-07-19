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

