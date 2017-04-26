// Given a string, return the first non-repeating character.
// Return 'sorry' for strings will all repeating characters.
function firstNonRepeatedCharacter(string) {

  var chars = string.split('');

  for(var i = 0; i < chars.length; i++) {

    let char = chars[i];

    // skip backlashes, otherwise regex breaks
    if(char === '\\'){continue;}

    // if this character only occurs once
    let regex = new RegExp(`^[^${char}]*${char}[^${char}]*$`);

    if(string.match(regex)){
      return char;
    }

  }

  return 'sorry';
}

// First implementation
// function firstNonRepeatedCharacter (string) {
//   var characters = string.split('');

//   // storage counters in an object for constant-time lookiup
//   var counters = {};

//   // iterate through the characters
//   for(var i = 0; i < characters.length; i++){
//     // increment this item's counter
//     // if the counter doesn't exist yet, default to 1
//     counters[characters[i]] = counters[characters[i]] + 1 || 1;
//   }

//   // after we've counted ALL the occurances of
//   // every item, iterate through the array again
//   for(var i = 0; i < characters.length; i++){
//     // if this character occurred only 1 time
//     if(counters[characters[i]] === 1){
//       return characters[i];
//     }
//   }

//   // If all characters occurred multiple times
//   return 'sorry';
// }
