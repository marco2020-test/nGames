import * as routes from '../utils/utils-route';
const nock = require('nock');
let chai = require('chai');
let chaiHttp = require('chai-http');
let assert = require('assert');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:3001/api_admision';
let modells = require('../utils/utils-models');

describe("Check Sum Variables: ", function () {
    it("Check the returned value using: assert(typeof(value, 'value')): Variable codSuper ", function () {
        let result = modells['codSuper'];
        assert(typeof (result), "string");
    });
});

describe("Check Sum Function: ", function () {
    it("Check the returned value using: assert(typeof(value, 'value')): funcion searchVar", function () {
        let result = modells.searchVar();
        assert(typeof (result), "string");
    });
    it("Check the returned value using: assert(typeof(value, 'value')): funcion prevision", function () {
        let result = modells.prevision('110');
        assert(typeof (result), "string");
    });
});
