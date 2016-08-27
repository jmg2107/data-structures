 var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    instSize: 0
  };
  someInstance = extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.instSize] = value;
    this.instSize++;
  },
  pop: function(){
  if(this.instSize>0){
    this.instSize--;
   }
    var temp = this.storage[(this.instSize).toString()];
    delete this.storage[(this.instSize).toString()];
    return temp;
  },
  size: function(){
    return this.instSize;
  }
};

var extend = function(org, other){
  for(var key in other){
    org[key]=other[key];
  }
  return org;
};
