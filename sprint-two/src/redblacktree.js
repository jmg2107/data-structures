var RedBlackTree = function() {
  this.root=null;

};
var RBNode = function(value){
  this.value = value;
  this.color = "red";
  this.left = null;
  this.right = null;
};

RedBlackTree.prototype.recolor = function(node){
  if(node.color === "red") node.color = "black";
  else node.color = "red";
}

RedBlackTree.protoype.rotation = function(node1, node2){
  //temp node holds color and value of node1
  //node1 gets color and value of node2
  //node2 gets color and value of temp

  var temp = new NilNode();
  temp.value = node1.value;
  temp.color = node1.color;

  node1.value = node2.value;
  node1.color = node2.color;

  node2.value = temp.value;
  node2.color = temp.color;


}

RedBlackTree.prototype.redChildCheck = function(node){

//base case if we've reached null, return
if(!node){
  return;
}
//check if child is red and if you are red, return node
if(node.color === "red" &&
  (node.right.color === "red" || node.left.color === "red"))
  return node;
//traverse down left side of tree
redChildCheck(node.left);
//traverse down right side of tree
redChildCheck(node.right);

}


RedBlackTree.prototype.insert = function(val, node){
  if(this.root === null){
    this.root = new RBNode();
    this.root.value = val;
    this.root.color = "black";
    return;
  }
  var testNode = this.root;
  if(node){
    testNode = node;
  }

    if(testNode.value<val){
      if(!testNode.right.value){
        testNode.right = new RBNode(val);
        return;
      }else{
        this.insert(val,testNode.right);
      }
    }else{
      if(!testNode.left.value){
        testNode.left = new RBNode(val);
        return;
      }else{
        this.insert(val,testNode.left);
      }
    }

  };

RedBlackTree.prototype.contains = function(val, node){
      if(!node){
        node = this.root;
      }
      var testNode = node;

      if(testNode.value ===val){
        return true;
      }
      if(testNode.value<val){
      if(!testNode.right.value){
        return false;
      }else{
        return this.contains(val, testNode.right);
      }
    }else{
      if(!testNode.left.value){
        return false;
      }else{
        return this.contains(val, testNode.left);
      }
    }


};



/*
 * Complexity: What is the time complexity of the above functions?
 */

