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

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
