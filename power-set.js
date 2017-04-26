// Return an array that contains the power set of a given string.
function powerSet (string) {
  var letters = string.split('');
  var subsets = ['']; // must begin with a null set to work
  var duplicates = [];

  letters.forEach(letter => {
    if(!duplicates.includes(letter)){
      // iterate through subsets
      let newsubsets = [];
      subsets.forEach( subset => {
        // break subsets into an array so they can be sorted
        let newsubset = subset.split('');
        newsubset.push(letter);
        newsubset.sort();
        newsubsets.push(
          newsubset.join('')
        );
      });
      subsets = subsets.concat(newsubsets);
      duplicates.push(letter);
    }
  });

  subsets.sort();
  return subsets;
}
