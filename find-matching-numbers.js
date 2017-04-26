// Return all even numbers from an array
function findEven (numbers) {
  var results = [];
  if(numbers.length < 1){
    return results;
  }
  if(numbers[0] % 2 === 0){
    results.push(numbers[0]);
  }
  return results.concat(findEven(numbers.slice(1)));
}

// First implementation
// function findEven (numbers) {
//   var results = [];
//   for(var i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//       results.push(numbers[i]);
//     }
//   }
//   return results;
// }
