// Concatenate an array of arrays
// Bonus: use recursion
function concatArrays (arrays) {
  if(arrays.length > 0) {
    return arrays[0].concat(concatArrays(arrays.slice(1)));
  } else {
    return [];
  }
}

// First implementation
// function concatArrays (arrays) {
//   var result = [];
//   for(var i = 0; i < arrays.length; i++){
//     result = result.concat(arrays[i]);
//   }
//   return result;
// }
