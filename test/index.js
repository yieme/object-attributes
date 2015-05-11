var should = require('chai').should(),
    objectAttributes = require('..')
;

describe('object-attributes', function() {
  it('should say hello', function(done) {
    var test = objectAttributes()
    test.value.should.equal('Hello, world');
    done();
  });
});
