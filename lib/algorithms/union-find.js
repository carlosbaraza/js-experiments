// ----------------------------------------------------------------------------
// Union Find problem JS implementation
//
// The module implements a extremely simple and unefficient quick-find solution
// ----------------------------------------------------------------------------

(function (root, factory) {
  if (typeof define === 'function') {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.unionFind = factory();
  }
}(this, function () {

  // Network with the given amount of nodes.
  var Network = function Network(size) {
    this._nodes = new Array(size);
    for (var i = 0; i < size; i++) {
      this._nodes[i] = i;
    }
  };

  // Union two nodes from the Network
  Network.prototype.union = function union(node1, node2) {
    this._nodes[node1] = node2;
  };

  // Find the root of the given node
  Network.prototype.root = function root(node) {
    currentNode = node;
    while (this._nodes[currentNode] != currentNode) {
      currentNode = this._nodes[currentNode];
    }
    return currentNode;
  };

  // Are these two nodes connected?
  Network.prototype.connected = function connected(node1, node2) {
    if(this.root(node1) === this.root(node2)) {
      return true;
    }
    return false;
  };

  // Return module API
  return {
    Network: Network
  };
}));
