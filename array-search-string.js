// Return whether a string exists in an array
function searchString (str, array) {
  if(array.length < 1){
    return false;
  }
  if(array[0] === str){
    return true;
  }
  return searchString(str, array.slice(1));
}

// First implementation
// function searchString (str, array) {
//   for(var i = 0; i < array.length; i++){
//     if(array[i] === str){
//       return true;
//     }
//   }
//   return false;
// }
