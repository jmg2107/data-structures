var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function() {
    var temp = storage[(someInstance.size()-1).toString()];
    delete storage[(someInstance.size()-1).toString()];
    return temp;
  };

  someInstance.size = function() {
    var size =0;
    for(var key in storage){
      size ++;
    }
    return size;
  };

  return someInstance;
};




