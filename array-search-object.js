// Find the given person in an array and return their hobby
function findPerson (name, people) {
  if(people.length < 1){
    return false;
  }
  if(people[0].name === name){
    return people[0].hobby;
  }
  return findPerson(name, people.slice(1));
}

// First implementation
// function findPerson (name, people) {
//   for(var i = 0; i < people.length; i++){
//     if(people[i].name === name){
//       return people[i].hobby;
//     }
//   }
//   return false;
// }
