// Implement an algorithm that calculates the result of an expression written
// in Reverse Polish notation.
function calculate (inputs) {
  var numbers = [];
  inputs.split(' ').forEach(char => {
    // Operator
    if(isNaN(char)){
      let a = numbers.pop();
      let b = numbers.pop();
      let result;
      if(char === '+') { result = b + a; }
      else if (char === '*') { result = b * a; }
      else if (char === '/') { result = b / a; }
      numbers.push(
        Math.round(result)
      );
    // Number
    } else {
      numbers.push( Number(char) );
    }
  });
  return numbers.pop();
}
