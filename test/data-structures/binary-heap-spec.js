// ----------------------------------------------------------------------------
// Union Find network tests
// ----------------------------------------------------------------------------

define(['../../lib/data-structures/binary-heap'],
       function (BinaryHeap) {

  var chai = require('chai');
  var expect = chai.expect;

  describe('Data structure: BinaryHeap', function () {
    var heap;

    beforeEach(function createNodes() {
      heap = new BinaryHeap(function(x) { return x; });
      [10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5].forEach(function pushToHeap(node) {
        heap.push(node);
      });
    });

    it('pops the minimum always', function () {
      expect( heap.pop() ).to.equal(1);
    });

    it('removes nodes', function () {
      heap.remove(1);
      heap.remove(2);
      heap.remove(2);
      expect( heap.pop() ).to.equal(3);
    });
  });
});
