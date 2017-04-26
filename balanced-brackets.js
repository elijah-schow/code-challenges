// Given a string, return whether all pairs of (), [], and {} are balanced
function isBalanced (str) {
  const pairs = { '(': ')', '[': ']', '{': '}' };
  let balanced = true;
  let stack = [];
  for (i = 0; i < str.length; i ++) {
    let char = str[i];
    for (let start in pairs) {
      let end = pairs[start];
      if(char === start){
        stack.push(end);
      } else if (char === end) {
        let expected = stack.pop();
        if (char !== expected) {
          console.log('NOT EXPECTED', 'char', char, 'expected', expected);
          stack.push(expected);
          balanced = false;
        }
      }
    }
  }
  if(stack.length > 0){
    balanced = false;
  }
  return balanced;
}
