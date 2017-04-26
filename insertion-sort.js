// Sort an array using the insertion sore method
function insertionSort (array) {
  // for each item in the array
  for (let i = 0; i < array.length; i++ ) {
    let j = i;
    while(array[j-1] && array[j-1].value > array[j].value) {
      let temp = array[j-1];
      array[j-1] = array[j];
      array[j] = temp;
      j--;
    }
  }
  return array;
}
