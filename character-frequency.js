// Given a string, return an array of arrays sorted in descending order by
// frequency and then in ascending order by character.
function characterFrequency (string) {
  var frequencies = {};
  var results = [];

  // Count the frequency of each letter
  string.split('').forEach(function(letter){
    frequencies[letter] = frequencies[letter] + 1 || 1;
  });
  Object.keys(frequencies).forEach(function(key){
    results.push([key, frequencies[key]]);
  });

  // Sort the results
  return results.sort(function(a,b){
    // Sort by frequency in decending order
    if( a[1] > b[1]) { return -1; }
    if( a[1] < b[1]) { return 1; }
    if( a[1] === b[1]) {
      // Sort by character in ascending order
      if(a[0] < b[0]){ return -1; }
      if(a[0] > b[0]){ return 1; }
      if(a[0] === b[0]){ return 0; }
    }
  });
}
