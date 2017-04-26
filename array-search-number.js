// Return whether the array contains a number evenly divisable by a given number
function findDivisible (divider, array) {
  if(array.length < 1){
    return false;
  }
  if(array[0] % divider === 0 && array[0] !== 0){
    return true;
  }
  return findDivisible(divider, array.slice(1));
}

// First implementation
// function findDivisible (divider, array) {
//   for(var i = 0; i < array.length; i++){
//     if(array[i] % divider === 0 && array[i] !== 0){
//       return true
//     }
//   }
//   return false;
// }
