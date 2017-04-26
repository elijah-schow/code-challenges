// Given an array of three integers, return the largest possible product from
// three of those numbers.
function largestProductOfThree (array) {
  array.sort((a, b) => a - b);
  const product = (sum, value) => (
    sum * value
  );
  const product1 = array.slice(Math.max(array.length - 3, 0)).reduce(product);

  // Edge Case: negative numbers
  const greatestPositive = array.reduce((greatest, value) => Math.max(greatest, value));
  const leastNegative = array.slice(0, Math.min(array.length, 2)).reduce(product);
  const product2 = leastNegative * greatestPositive;

  return Math.max(product1, product2);
}
