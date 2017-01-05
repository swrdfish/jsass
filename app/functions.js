exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction: function(str) {
    return function(msg){
      return str + ', ' + msg;
    };
  },

  makeClosures: function(arr, fn) {
    var res = [];
    var closingFn = function(i) {
      return function(){
        return fn(arr[i]);
      };
    };
    for ( var pos = 0; pos < arr.length; pos++) {
      res.push(closingFn(pos));
    }
    return res;
  },

  partial: function(fn, str1, str2) {
    return function(msg) {
      return fn(str1, str2, msg);
    };
  },

  useArguments: function() {
    var res = 0;
    for (var pos = 0; pos < arguments.length; pos++){
      res += arguments[pos];
    }
    return res;
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments);
    // Alternative methods
    // var args = [].slice.call(arguments);
    // var args = Array.from(arguments);
    // var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));

    args.shift();
    var res = fn.apply(null, args);
    return res;
  },

  partialUsingArguments: function(fn) {
    var args = Array.from(arguments);
    args.shift();
    return function() {
      var moreargs = Array.from(arguments);
      return fn.apply(null, args.concat(moreargs));
    };
  },

  curryIt: function(fn) {
    function applyArguments(_fn, args) {
      return _fn.apply(null, args);
    }

    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
      return function (currentArgument) {
        accumulatedArguments.push(currentArgument);

        var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

        if (allArgumentsProvided) {
          return applyArguments(fn, accumulatedArguments);
        }

        return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
      };
    }

    return getArgumentAccumulator([], fn.length);
  }
};
