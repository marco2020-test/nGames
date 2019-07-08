import 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;
const assert = chai.assert;
const url = 'http://localhost:3001/';

describe('Array', function() {
  describe('#indexOf()', function() {
      it('should return -1 when not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
      });
  });
});
