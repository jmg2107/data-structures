var BinarySearchTree = function(value) {
  this.left = null;
  this.right = null;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(val){
    if(this.value<val){
      if(!this.right){
        this.right = new BinarySearchTree(val);
        return;
      }else{
        this.right.insert(val);
      }
    }else{
      if(!this.left){
        this.left = new BinarySearchTree(val);
        return;
      }else{
        this.left.insert(val);
      }
    }
  };

BinarySearchTree.prototype.contains = function(val){
      if(this.value ===val){
        return true;
      }
      if(this.value<val){
      if(!this.right){
        return false;
      }else{
        return this.right.contains(val);
      }
    }else{
      if(!this.left){
        return false;
      }else{
        return this.left.contains(val);
      }
    }


};
BinarySearchTree.prototype.depthFirstLog = function(func){
  if(this.value===undefined){
    return;
  }
  func(this.value);
  if(this.left)this.left.depthFirstLog(func);
  if(this.right)this.right.depthFirstLog(func);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 //insert - O(log(n)) - logarithmic
 //contains - O(log(n)) - logarithmic
 //depthFirstLog - O(n) - linear
