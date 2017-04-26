// Return the sum of an array of numbers
// Bonus: use recursion
function sum (numbers) {
  if(numbers.length > 0) {
    return numbers[0] + sum(numbers.slice(1));
  } else {
    return 0;
  }
}

// First implementation
// function sum (numbers) {
//   var result = 0;
//   for(var i = 0; i < numbers.length; i++){
//     result += numbers[i];
//   }
//   return result;
// }
