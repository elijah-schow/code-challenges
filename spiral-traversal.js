// Given a 2D array, print every value in a spiral that starts at the upper
// left-hand corner and ends in the center.
function spiralTraversal (matrix) {
  const results = [];
  const border = {
    left: 0,
    right: matrix[0].length - 1,
    top: 0,
    bottom: matrix.length - 1
  };
  console.log('initial', border);

  let x;
  let y;
  while (border.left <= border.right && border.top <= border.bottom) {
    x = border.left;
    y = border.top;
    // advance to right border
    while (x < border.right) {
      results.push(matrix[y][x]);
      x++;
    }
    border.top++;
    let checky = y;
    // advance to bottom border
    while (y < border.bottom) {
      results.push(matrix[y][x]);
      y++;
    }
    border.right--;
    if(checky === y) {  results.push(matrix[y][x]); break; }
    let checkx = x;
    // regress to left border
    while (x > border.left) {
      results.push(matrix[y][x]);
      x--;
    }
    border.bottom--;
    if(checkx === x) {  results.push(matrix[y][x]); break; }
    // regress to top border
    while (y > border.top) {
      results.push(matrix[y][x]);
      y--;
    }
    results.push(matrix[y][x]);
    border.left++;
  }

  return results;
}
