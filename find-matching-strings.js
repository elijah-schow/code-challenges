// Return all strings that are as longer or longer than a given length
function filterLength (length, array) {
  var results = [];
  if(array.length < 1){
    return results;
  }
  if(array[0].length >= length){
    results.push(array[0]);
  }
  return results.concat(filterLength(length, array.slice(1)));
}

// First implementation
// function filterLength (length, array) {
//   var results = [];
//   for(var i = 0; i < array.length; i++){
//     if(array[i].length >= length){
//       results.push(array[i]);
//     }
//   }
//   return results;
// }
