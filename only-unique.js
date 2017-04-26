// Remove any characters that are NOT unique from a string
function onlyUnique (str) {
  let encountered = {};
  let result = '';
  for(let i = 0; i < str.length; i++){
    const char = str[i];
    encountered[char] = encountered[char] + 1 || 1;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (encountered[char] === 1) {
      result += char;
    }
  }
  return result;
}
