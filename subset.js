// Return whether a context array is a subset of a given array.
// Assume that both arrays only contain strings.

Array.prototype.toObject = function () {
  var object = {};
  this.forEach(function(value, index){
    object[value] = index;
  });
  return object;
};

Array.prototype.isSubsetOf = function(array) {
  // To reduce time complexity, make subset an object
  var subset = array.toObject();
  return this.reduce(function(memo, value){
    // .hasOwnProperty has constant time complexity
    return subset.hasOwnProperty(value) && memo;
  }, true);
}

// First implementation O(n^2)
// Array.prototype.isSubsetOf = function(array) {
//   return this.reduce(function(memo, value){
//     return array.includes(value) && memo;
//   }, true);
// };
