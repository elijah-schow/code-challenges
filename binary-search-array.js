// Given a sorted array of integers, return the index of the target value
// using a binary search algorithm.

function binarySearch (array, target) {
  let start = 0;
  let end = array.length - 1;
  // do until there is nothing left to search
  while (end - start >= 0) {
    // split the array in half
    let middle = start + Math.floor( (end-start) / 2);
    if (array[middle] === target) {
      return middle;
    }
    if (target > array[middle]) {
      // set the next interval to the second half
      start = middle + 1;
    }
    if (target < array[middle]) {
      // set the next interval to the first half
      end = middle - 1;
    }
  }
  // value not found
  return -1;
}
