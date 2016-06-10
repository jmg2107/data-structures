var Tree = function(value) {
  var newTree = {};
  jQuery.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var treeBaby = new Tree(value);
  this.children.push(treeBaby);
};

treeMethods.contains = function(target) {
  var doesContain = false;
  if(this===null)return;
  if(this.value===target){
    doesContain = true;
  }
  for(var i=0;i<this.children.length;i++){
    if(doesContain){
      break;
    }
    doesContain = this.children[i].contains(target);
  }
  return doesContain;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
