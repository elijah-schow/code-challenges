// Given a string, return the longest run of identical characters
function longestRun (string) {
  let runs = string.match(/(?=(.))\1{2,}/g);
  if(!runs){
    return [0,0];
  }
  let longest = runs.reduce( (longest, run) => {
    if (run.length > longest.length) {
      return run;
    }
    return longest;
  });
  let start = string.search(longest);
  let end = start + longest.length - 1;
  return [start, end];
}
