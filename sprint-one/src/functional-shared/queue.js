var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {
    storage : {},
    min : 0,
    max : 0
  };
  jQuery.extend(instance, Queue.queueMethods);
  return instance;

};


Queue.queueMethods = {

  enqueue: function(value){

    this.storage[this.max] = value;
    this.max++;

  },
  dequeue: function(){
    if(this.storage[this.min] ===  undefined){
      return;
    }
    var temp = this.storage[this.min];
    delete this.storage[this.min];
    this.min++;
    return temp;

  },
  size: function(){
    return this.max - this.min;
  }

};



