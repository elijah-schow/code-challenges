// Given an array of unqiue words, return the word that contains the greatest
// number of other words. A word must be 2 or more letters long.
function nestedWordCount (wordList) {
  const countContainedWords = (word) => (
    wordList.reduce((sum, otherWord) => (
      word.includes(otherWord) && word !== otherWord ? sum + 1 : sum
    ), 0)
  );
  return wordList.reduce((biggest, word) => {
    const count = countContainedWords(word);
    return count > biggest.count ? { count, word } : biggest;
  },{ count: 0 }).word;
}

// First implementation
// function nestedWordCount (wordList) {
//   const count = word => {
//     return wordList.reduce((sum, otherWord) => {
//       return word.includes(otherWord) && word !== otherWord ? sum + 1 : sum;
//     }, 0);
//   };
//   let biggestCount = 0;
//   let biggestWord;
//   wordList.forEach(word => {
//     let wordCount = count(word);
//     if (wordCount > biggestCount) {
//       biggestCount = wordCount;
//       biggestWord = word;
//     }
//   });
//   return biggestWord;
// }
