// ----------------------------------------------------------------------------
// This is a sample module
//
// The module implements a Int checker for validations that is tessted using
// Mocha and Chai.
// ----------------------------------------------------------------------------

(function (root, factory) {
  if (typeof define === 'function') {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.isInt = factory();
  }
}(this, function () {

  var isInt = function isInt(value) {
    var x;
    if (isNaN(value)) {
      return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
  };

  return isInt;
}));
