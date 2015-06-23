// ----------------------------------------------------------------------------
// Mocha Spec loading dependencies using RequireJS
// ----------------------------------------------------------------------------

define(['../../lib/algorithms/is-int'],
       function (isInt) {

  var chai = require('chai');
  var expect = chai.expect;

  describe('an integer checker', function () {

    it('returns true if integer', function () {
      expect( isInt(42)    ).to.equal(true);
      expect( isInt("42")  ).to.equal(true);
      expect( isInt(4e2)   ).to.equal(true);
      expect( isInt("4e2") ).to.equal(true);
      expect( isInt(" 1 ") ).to.equal(true);
    });

    it('returns false if not integer', function () {
      expect( isInt("")         ).to.equal(false);
      expect( isInt("  ")       ).to.equal(false);
      expect( isInt(42.1)       ).to.equal(false);
      expect( isInt("1a")       ).to.equal(false);
      expect( isInt("4e2a")     ).to.equal(false);
      expect( isInt(null)       ).to.equal(false);
      expect( isInt(undefined)  ).to.equal(false);
      expect( isInt(NaN)        ).to.equal(false);
    });

  });

});
