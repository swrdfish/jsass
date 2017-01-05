exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise( (resolve, reject) => {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise( (resolve, reject) => {
      $.getJSON(url, (data) => {
        let arr = data.people.map((v)=> v.name);
        arr.sort();
        resolve(arr);
      });
    });
  }
};
