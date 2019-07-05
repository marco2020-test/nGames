
import * as chai from 'chai';
import chaiHttp from 'chai-http';
import * as routes from '../listas/listas-route';
const nock = require('nock');
import { Request, Response } from "express";
chai.use(chaiHttp);
const request = chai.request;
const expect = chai.expect;
const url = 'http://localhost:3001';

describe('Arancel', () => {
  describe('Route GET /searchList', () => {
    it('Ver Arancel', (done) => {
      const scope = nock(url)
        .get('/searchList')
        .reply(200, {
          results: [{ codigo: 23 }],
        });
        console.log('aqui');
        done();
    });
});
})