// Sort an array using the bubble sort method
function bubbleSort (input) {
  var result = input.slice();
  var swapped;
  do {
    swapped = false;
    result.forEach((value, index, array) => {
      let next = array[index + 1];
      if (value > next) {
        array[index] = next;
        array[index + 1] = value;
        swapped = true;
      }
    });
  } while (swapped);
  return result;
}

// First implementation
// function bubbleSort (input) {
//   var result = input.slice();
//   var swapped;
//   do {
//     swapped = false;
//     // for each pair in the array
//     for (let i = 0; i < result.length; i++) {
//       // if current is greater than next
//       if(result[i] > result[i+1]){
//         // swap
//         let temp = result[i];
//         result[i+1] = result[i];
//         result[i] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return result;
// }
