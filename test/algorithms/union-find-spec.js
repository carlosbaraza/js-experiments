// ----------------------------------------------------------------------------
// Union Find network tests
// ----------------------------------------------------------------------------

define(['../../lib/algorithms/union-find'],
       function (unionFind) {

  var chai = require('chai');
  var expect = chai.expect;

  var union = unionFind.union;
  var Network = unionFind.Network;

  describe('unionFind network', function () {
    var network;

    beforeEach(function createNodes() {
      network = new Network(10);
    });

    it('can connect two nodes', function () {
      network.union(1,2);
      expect( network.connected(1,2) ).to.equal(true);
    });

    it('has all the nodes disconnected by default', function () {
      expect( network.connected(1,2) ).to.equal(false);
    });

  });
});
