var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sized = 0;
  this.storage = {};
};

Stack.prototype.push = function(value){
  this.storage[this.sized] = value;
  this.sized++;
};

Stack.prototype.pop = function(){

  if(this.sized===0) return;

  var temp = this.storage[(this.sized-1).toString()];
  delete this.storage[(this.sized-1).toString()];
  this.sized--;
  return temp;
};

Stack.prototype.size = function(){
  return this.sized;
};

