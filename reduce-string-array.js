// Concatenate an array of strings
// Bonus: use recursion
function concatStrings (strings) {
  if(strings.length > 0) {
    return strings[0] + concatStrings(strings.slice(1));
  } else {
    return "";
  }
}

// First implementation
// function concatStrings (strings) {
//   var result = "";
//   for(i = 0; i < strings.length; i++){
//     result += strings[i];
//   }
//   return result;
// }
