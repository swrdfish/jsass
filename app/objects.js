exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.apply(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var res = [];
    for (var key in obj){
      if (obj.hasOwnProperty(key)){
        res.push('' + key + ': ' + obj[key]);
      }
    }

    return res;
  }
};
