

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var item = [k, v];

  if(this._storage.get(index) === undefined){
     var newList = [];
     newList.push(item);
     this._storage.set(index, newList);
     return;
  }else{
    _.forEach(this._storage.get(index), function(tuple, ind){
        if(tuple[0]===k){
          tuple[1]=v;
          return;
        }
    });

    this._storage.get(index).push(item);
  }
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;

  if(this._storage.get(index) === undefined){
    return undefined;
  }
  _.forEach(this._storage.get(index), function(tuple,ind){
    if(tuple[0]===k){
      result = tuple[1];
    }
  });
  return result;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

    _.forEach(this._storage.get(index) , function(tuple , ind, bucket){

      var foundInd;

      if(tuple[0]===k){
        foundInd = ind;
      }
      if(foundInd !== undefined && ind<bucket.length-1){
        bucket[ind] = bucket[ind+1];
      }
      if(ind===bucket.length-1){
        bucket.pop();
      }
    });


};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 //insert - O(n) - linear
 //retrieve - O(n) - linear
 //remove - O(n) - linear


