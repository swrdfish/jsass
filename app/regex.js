exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return (/\d+/).test(str);
  },

  containsRepeatingLetter: function(str) {
    return (/([a-zA-Z])\1/).test(str);
  },

  endsWithVowel: function(str) {
    return (/[aeiou]$/i).test(str);
  },

  captureThreeNumbers: function(str) {
    var res = str.match(/\d{3}/);
    return res === null ? false : res[0];
  },

  matchesPattern: function(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },

  isUSD: function(str) {
    var reg = /^\$(\d{1,3})(,\d{3})*(\.\d{2})?$/;
    return reg.test(str);
  }
};
