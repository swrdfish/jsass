exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var pos = 0; pos < arr.length; pos++){
      if (arr[pos] === item){
        return pos;
      }
    }
    return -1;
  },

  sum: function(arr) {
    var total = 0;
    for (var pos = 0; pos < arr.length; pos++){
      total += arr[pos];
    }
    return total;
  },

  remove: function(arr, item) {
    for (var pos = 0; pos < arr.length; pos++){
      if (arr[pos] === item){
        arr.splice(pos, 1);
        pos--;
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for (var pos = 0; pos < arr.length; pos++){
      if (arr[pos] === item){
        arr.splice(pos, 1);
        pos--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop(arr);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    arr.forEach(function(e) {
      if (e === item){
        count++;
      }
    });
    return count;
  },

  duplicates: function(arr) {
    arr.sort();
    var result = [];
    var flag = false;
    for (var pos = 1; pos < arr.length; pos++) {
      while(pos < arr.length && arr[pos-1] === arr[pos]) {
        flag = true;
        pos++;
      }
      if(flag === true) {
        flag = false;
        result.push(arr[pos-1]);
      }
    }
    return result;
  },

  square: function(arr) {
    return arr.map( (x) => x*x );
  },

  findAllOccurrences: function(arr, target) {
    var m = arr.map(function(v, i){
      if(v == target) return i;
      return -1;
    });

    return m.reduce(function(a, b){
      if( b!= -1 ) a.push(b);
      return a;
    }, []);
  }
};
