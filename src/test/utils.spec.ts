import * as routes from '../utils/utils-route';
const nock = require('nock');
let chai = require('chai');
let chaiHttp = require('chai-http');
let assert   = require('assert');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:3001/api_admision';
let modells= require ('../utils/utils-models');

describe("Check Sum Function: ", function() {
 it("Check the returned value using: assert(typeof(value, 'value')): ", function() {
    let result   = modells['codSuper'];
    assert(typeof(result), "string");
  });
});