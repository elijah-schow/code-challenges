// Given n rounds, return all possible rock-paper-scissors play possibilities.
const moves = ['r', 'p', 's'];

// n rounds => array of combinations
function rockPaperPermutation (roundCount) {
  let results = [];
  let round = "";

  // edge case
  if (roundCount === 0) {
    return [];
  }

  f();

  return results;

  function f () {
    // base case
    if (round.length >= roundCount) {
      return results.push(round);
    }
    moves.forEach(function (move) {
      round += move;
      f();
      round = round.substring(0, round.length - 1);
    });
  }
}
