exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var res = (num >> bit - 1) & 1
    return res;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var str = num.toString(2);
    while (str.length < 8){
      str = '0' + str;
    }
    return str;
  },

  multiply: function(a, b) {
    function adjust(num) {
      var exponent, multiplier;

      if (num < 1) {
        exponent = Math.floor( Math.log(num) * -1 );
        multiplier = Math.pow(10, exponent);

        return {adjusted: num * multiplier, multiplier: multiplier};
      }

      return {adjusted: num, multiplier: 1};
    }

    a = adjust(a);
    b = adjust(b);

    var result = (a.adjusted * b.adjusted) / (a.multiplier * b.multiplier);

    return result;
  }
};
