// Return the fibonacci sequence of length `n`
// Do not use recursion. Your solution must run in linear time
nthFibonacci = function(n) {
  let result
  let first = 0
  let second = 1
  if(n === 0) {
    return first
  }
  if(n === 1) {
    return second
  }
  for (let i = 2; i <= n; i++) {
    result = first + second
    first = second
    second = result
  }
  return result
};
