var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.max = 0;
  this.min = 0;
  this.storage = {};
};


Queue.prototype.enqueue = function(value){
  this.storage[this.max]= value;
  this.max++;
};
Queue.prototype.dequeue = function(){
  if(this.storage[this.min]===undefined) return;
  var temp = this.storage[this.min];
  delete this.storage[this.min];
  this.min++;
  return temp;
};
Queue.prototype.size = function(){
  return this.max-this.min;
};