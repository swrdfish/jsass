exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var arr = [];

    if (data.dir === dirName) {
      return this.listFiles(data);
    }

    for (var pos = 0; pos < data.files.length; pos++){
      if ( typeof data.files[pos] === 'object'){
        arr = arr.concat(this.listFiles(data.files[pos], dirName));
      }
      else if (dirName === void 0){
        arr.push(data.files[pos]);
      }
    }

    return arr;
  },

  res: [],

  permute: function(arr, i) {
    var ipos, pos, temp;
    ipos = i || 0;

    if ( ipos === arr.length - 1){
      this.res.push(arr.slice(0));
    }
    else {
      for (pos = ipos; pos < arr.length; pos++ ){

        // Swap
        temp = arr[pos];
        arr[pos] = arr[ipos];
        arr[ipos] = temp;

        this.permute(arr, pos + 1);
        // Swap back
        temp = arr[pos];
        arr[pos] = arr[ipos];
        arr[ipos] = temp;
      }
    }

    console.log(this.res);
    return this.res;
  },

  fibonacci: function(n) {
    if ( n === 1 || n === 2 || n === 0 ){
      return 1;
    }
    return this.fibonacci(n - 1) + this.fibonacci( n - 2);
  },

  validParentheses: function(n) {

  }
};
