var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.sized=0;
  return instance;
};

var stackMethods = {
  push:function(value){
    this.storage[this.sized] = value;
    this.sized++;
  },
  pop: function(){
    if(this.sized>0){
    var temp = this.storage[(this.sized-1).toString()];
    delete this.storage[(this.sized-1).toString()];
    this.sized--;
    return temp;
    }
    return;
  },
  size: function(){
    return this.sized;
  }
};


