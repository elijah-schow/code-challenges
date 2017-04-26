// Find the first item that occurs an even number of times in an array.
function evenOccurrence (arr) {

  // storage counters in an object for constant-time lookiup
  var counters = {};

  // iterate through the array
  for(var i = 0; i < arr.length; i++){
    // increment this item's counter
    // if the counter doesn't exist yet, default to 1
    counters[arr[i]] = counters[arr[i]] + 1 || 1;
  }

  // after we've counted ALL the occurances of
  // every item, iterate through the array again
  for(var i = 0; i < arr.length; i++){
    // if this item occurred an even number of times
    if(counters[arr[i]] % 2 === 0){
      return arr[i];
    }
  }

  // If there are no even-occurrence items
  return null;
}
