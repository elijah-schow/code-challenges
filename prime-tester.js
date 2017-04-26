// Return whether a number is prime
function primeTester (n) {
  if(n <= 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  // for each integer between 1 and this number
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // if n is divisible by this number
    if (n % i === 0) {
      return false;
    }
  }
  // otherwise, n is only divisable by 1 and itself
  return true;
}
