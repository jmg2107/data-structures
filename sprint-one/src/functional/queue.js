var Queue = function() {
  var someInstance = {};
  var min = 0;
  var max = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {

    storage[max] = value;
    max++;

  };

  someInstance.dequeue = function() {
    if(storage[min] == undefined){
      return;
    }
    var temp = storage[min];
    min++;
    return temp;
  };

  someInstance.size = function() {
    return max - min;
  };

  return someInstance;
};
