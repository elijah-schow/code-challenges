// Build a class to represent a range of numbers that
// (1) has a start index
// (2) has an [optional] end index
// (3) an [optional] step, and
// (4) works in constant time

var Range = function(start, end, step) {
  this.start = start;
  if (end === undefined) {
    this.end = this.start;
  } else {
    this.end = end;
  }
  if (step === undefined) {
    this.step = Math.sign(this.end - this.start);
  } else {
    this.step = step;
  }
};

Range.prototype.size = function () {
  if (this.start === this.end) {
    return 1;
  } else {
    const max = Math.max(this.start, this.end);
    const min = Math.min(this.start, this.end);
    return 1 + Math.round((max - min) / this.step);
  }
};

Range.prototype.each = function (callback) {
  if (this.start === this.end) {
    callback(this.start);
  } else if (this.step < 0) {
    for (let index = this.start; index >= this.end; index += this.step) {
      callback(index);
    }
  } else {
    for (let index = this.start; index <= this.end; index += this.step) {
      callback(index);
    }
  }
};

Range.prototype.includes = function (value) {
  let result = false;
  this.each(function (index) {
    if (index === value) {
      result = true;
    }
  })
  return result;
};
