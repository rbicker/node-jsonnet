const { expect } = require('chai');
const fs = require('fs');
const path = require('path');

const Jsonnet = require('../index');


/* global describe before after it :true */

describe('jsonnet', () => {
  before(() => {
    this.jsonnet = new Jsonnet();
  });
  it('should process examples', () => {
    ['example1', 'example2'].forEach((item) => {
      const sourcePath = path.join(__dirname, 'src', `${item}.jsonnet`);
      const expectedPath = path.join(__dirname, 'expected', `${item}.json`);
      const source = fs.readFileSync(sourcePath, 'utf8');
      const expected = fs.readFileSync(expectedPath, 'utf8');
      const result = this.jsonnet.eval(source);
      expect(result).to.deep.equal(JSON.parse(expected));
    });
  });
});
