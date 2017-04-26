// Given an array of nested arrays, return the deepest level that contains a
// non-array value.
function arrayception (array) {
  return decend(array, 0);
  function decend(array, depth) {
    if(!Array.isArray(array)){
      return depth;
    }
    var deepest = 0;
    for (let i = 0; i < array.length; i++) {
      deepest = Math.max( deepest, decend(array[i], depth + 1) );
    }
    return deepest;
  }
}
