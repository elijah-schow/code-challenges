// Sort an array using the quick sort method
function quickSort(array) {
  var pivot;
  var left = [];
  var right = [];
  if(array.length < 2) {
    return array
  }
  pivot = array[array.length - 1];
  // don't compare the pivot to itself!
  for(let i = 0; i < array.length - 1; i++) {
    if(array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat( [pivot], quickSort(right)  );
}
