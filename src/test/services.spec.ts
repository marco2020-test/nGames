import * as routes from '../services/services-routes';
const nock = require('nock');
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://localhost:3001/api_admision';

describe('Admisión', () => {
  describe('Route POST /searchClient', () => {
    it('Ver Admisión', (done) => {
      const scope = nock(url)
        .post('/searchClient')
        .reply(200, {
          results: [{ codigo: 23 }],
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

  describe('Admisión', () => {
    describe('Route POST /searchQuotes1', () => {
      it('Ver Admisión', (done) => {
        const scope = nock(url)
          .post('/searchQuotes1')
          .reply(200, {
            results: [{ codigo: 23 }],
          });
        done();
      });
    });
  });

  describe('Admisión', () => {
    describe('Route POST /searchIndicators', () => {
      it('Ver Admisión', (done) => {
        const scope = nock(url)
          .post('/searchIndicators')
          .reply(200, {
            results: [{ codigo: 23 }],
          });
        done();
      });
    });
  });

  describe('Admisión', () => {
    describe('Route POST /typeArancel', () => {
      it('Ver Admisión', (done) => {
        const scope = nock(url)
          .post('/typeArancel')
          .reply(200, {
            results: [{ codigo: 23 }],
          });
        done();
      });
    });
  });

  describe('Admisión', () => {
    describe('Route POST /codeConvenio', () => {
      it('Ver Admisión', (done) => {
        const scope = nock(url)
          .post('/codeConvenio')
          .reply(200, {
            results: [{ codigo: 23 }],
          });
        done();
      });
    });
  });

  describe('Admisión', () => {
    describe('Route POST /typeProduct', () => {
      it('Ver Admisión', (done) => {
        const scope = nock(url)
          .post('/typeProduct')
          .reply(200, {
            results: [{ codigo: 23 }],
          });
        done();
      });
    });
  });

  describe('Admisión', () => {
    describe('Route POST /convenio', () => {
      it('Ver Admisión', (done) => {
        const scope = nock(url)
          .post('/convenio')
          .reply(200, {
            results: [{ codigo: 23 }],
          });
        done();
      });
    });
  });


  describe('Admisión', () => {
    describe('Route POST /searchXML', () => {
      it('Ver Admisión', (done) => {
        const scope = nock(url)
          .post('/searchXML')
          .reply(200, {
            results: [{ codigo: 23 }],
          });
        done();
      });
    });
  });

  describe('Admisión', () => {
    describe('Route POST /searchVar', () => {
      it('Ver Admisión', (done) => {
        const scope = nock(url)
          .post('/searchVar')
          .reply(200, {
            results: [{ codigo: 23 }],
          });
        done();
      });
    });
  });

  describe('Admisión', () => {
    describe('Route POST /updateClient', () => {
      it('Ver Admisión', (done) => {
        const scope = nock(url)
          .post('/updateClient')
          .reply(200, {
            results: [{ codigo: 23 }],
          });
        done();
      });
    });
  });

  describe('Admisión', () => {
    describe('Route POST /updatePrevision', () => {
      it('Ver Admisión', (done) => {
        const scope = nock(url)
          .post('/updatePrevision')
          .reply(200, {
            results: [{ codigo: 23 }],
          });
        done();
      });
    });
  });