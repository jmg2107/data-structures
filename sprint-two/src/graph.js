

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var node1 = new GraphNode();
  node1.value = node;
  this.storage[node1.value] = node1;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if(node in this.storage) return true;
  return false;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if(node in this.storage) delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(this.storage[fromNode].edge[toNode] && this.storage[toNode].edge[fromNode]){
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edge[toNode] = this.storage[toNode];
  this.storage[toNode].edge[fromNode] = this.storage[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode].edge[toNode];
  delete this.storage[toNode].edge[fromNode];
};
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var nodes in this.storage){
    cb(nodes);
  }
};

var GraphNode = function(){
  this.value = undefined;
  this.edge = {};
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
// addNode - O(1) constant
// contains - O(1) constant
// removeNode - O(1) constant
// hasEdge - O(1) constant
// addEdge - O(1) constant
// removeEdge - O(1) constant
// forEachNode - O(N) linear

