var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var temp = new Node(value);

    if(list.head === null && list.tail === null){
      list.head = temp;
    }
    else{
      list.tail.next = temp;
    }
    list.tail = temp;
  };

  list.removeHead = function() {

    var temp = list.head;
    if(list.head != null){
      list.head = list.head.next;
    }
    return temp.value;
  };

  list.contains = function(target) {

    var node = list.head;

    while(node != null){
      if(node.value === target){
        return true;
      }
      node = node.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
