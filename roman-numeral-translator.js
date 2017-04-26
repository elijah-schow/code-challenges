// Given a string of Roman Numerals, return the corresponding base-10 integer
function translateRomanNumeral (romanNumeral) {
  let sum = 0;
  let a = romanNumeral.split('');
  for (let i = 0; i < a.length; i++) {
    const n = a[i];
    if (DIGIT_VALUES[n] === undefined) { return "null"; }
    const current = DIGIT_VALUES[n];
    const next_n = a[i + 1];
    const next = DIGIT_VALUES[next_n];
    if (current < next) {
      sum -= current;
    } else {
      sum += current;
    }
  };
  return sum;
}
