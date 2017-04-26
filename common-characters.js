// Given two strings, return a string of characters that are in both strings
var commonCharacters = function(string1, string2){
  var result = "";
  // for each character in string1
  for (var char1 = 0; char1 < string1.length; char1++){
    // for each charactr in string2
    for (var char2 = 0; char2 < string2.length; char2++){
      // if character in string1 equals character in string 2
      // ignore white space and duplicates
      if (
        string1[char1] === string2[char2]
        && string1[char1] !== " "
        && !result.includes(string1[char1])
      ){
        // add character to result
        result += string1[char1];
      }
    }
  }
  return result;
};
