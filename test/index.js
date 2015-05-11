var should = require('chai').should(),
    objectAttributes = require('..')
;

describe('object-attributes', function() {
  var expected = ["foo", "bar"]
  var expectedString = JSON.stringify(expected)
  it('should eaual ' + expectedString, function(done) {
    var test = objectAttributes({ foo:1, bar: 2 })
    var json = JSON.stringify(test)
    json.should.equal(expectedString);
    done();
  });
});
