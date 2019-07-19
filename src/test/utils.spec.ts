import * as routes from '../utils/utils-route';
const nock = require('nock');
let chai = require('chai');
let chaiHttp = require('chai-http');
let assert = require('assert');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:3001/api_admision';
let modells = require('../utils/utils-models');
let controller= require ('../utils/utils-controller');
let route = require('../utils/utils-route');

describe("Check Sum Variables: ", function () {
    it("Check the returned value using: assert(typeof(value, 'value')): Variable codSuper ", function () {
        let result = modells['codSuper'];
        assert(typeof (result), "string");
    });
});

/* describe("Check Sum Function modells: ", function () {
    it("Check the returned value using: assert(typeof(value, 'value')): funcion searchVar", function () {
        let result = modells.searchVar();
        assert(typeof (result), "string");
    });
    it("Check the returned value using: assert(typeof(value, 'value')): funcion prevision", function () {
        let result = modells.prevision('110');
        assert(typeof (result), "string");
    });
    it("Check the returned value using: assert(typeof(value, 'value')): funcion searchXML cath", function () {
        let data={"xmlClienteNatural":"<nat:cliente xmlns:nat='http://www.alemana.cl/mantenedor/clientes/naturales'><nat:idCliente><![CDATA[6615336]]></nat:idCliente><nat:tipoIdentificacion><![CDATA[1]]></nat:tipoIdentificacion><nat:numeroIdentificacion><![CDATA[6383170]]></nat:numeroIdentificacion><nat:digitoIdentificacion><![CDATA[0]]></nat:digitoIdentificacion><nat:nombreTipoIdentificacion></nat:cliente>"};
        let result = modells.searchXML(data);
        assert(typeof (result), "string");
    });
});

describe("Check Sum Function controller: ", function () {
    it("Check the returned value using: assert(typeof(value, 'value')): funcion searchVar", function () {
        let result = controller.searchVar();
        assert(typeof (result), "string");
    });
    it("Check the returned value using: assert(typeof(value, 'value')): funcion searchXML cath", function () {
        let data={"xmlClienteNatural":"<nat:cliente xmlns:nat='http://www.alemana.cl/mantenedor/clientes/naturales'><nat:idCliente><![CDATA[6615336]]></nat:idCliente><nat:tipoIdentificacion><![CDATA[1]]></nat:tipoIdentificacion><nat:numeroIdentificacion><![CDATA[6383170]]></nat:numeroIdentificacion><nat:digitoIdentificacion><![CDATA[0]]></nat:digitoIdentificacion><nat:nombreTipoIdentificacion></nat:cliente>"};
        let result = controller.searchXML(data);
        assert(typeof (result), "string");
    });
});*/
