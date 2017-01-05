exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  start: 0,
  end: 0,
  flag: true,

  counter: function (){
    console.log(this.start);
    if (this.start < this.end && this.flag === true){
      this.start++;
      setTimeout(this.counter.bind(this), 100);
    }
  },

  cancel: function () {
    this.flag = false;
  },

  count: function (start, end) {
    this.start = start;
    this.end = end;
    this.counter();
    return this;
  }
};
