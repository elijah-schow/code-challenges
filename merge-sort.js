// Sort an array using the merge sort method
function mergeSort(arr){
  // base case
  if(arr.length === 1) {
    return arr;
  }

  // split the array in half, and merge sort on each
  let half = Math.floor(arr.length/2);
  let a = mergeSort(arr.slice(0, half));
  let b = mergeSort(arr.slice(half, arr.length));

  return merge(a, b);
}

function merge (a, b) {
  let c = [];
  let firstItemA = 0;
  let firstItemB = 0;

  // while we haven't reached the end of either array
  while( firstItemA < a.length && firstItemB < b.length) {
    // if a's first item is less than b's
    if(a[firstItemA] < b[firstItemB]) {
      // move a's first item to results
      c.push(a[firstItemA]);
      // emulate removing a's first item
      firstItemA++;
    } else {
      // add b's first item to results
      c.push(b[firstItemB]);
      // emulate removing b's first item
      firstItemB++;
    }
  }
  // clean up the remaining items
  while(firstItemA < a.length) {
    // move a's first item to results
    c.push(a[firstItemA]);
    // emulate removing a's first item
    firstItemA++;
  }
  while(firstItemB < b.length) {
    // move b's first item to results
    c.push(b[firstItemB]);
    // emulate removing b's first item
    firstItemB++;
  }
  return c;
}
