// Return the names of all players that have a score above 100
function topPlayers (players) {
  var results = [];
  if(players.length < 1){
    return results;
  }
  if(players[0].score > 100){
    results.push(players[0].name);
  }
  return results.concat(topPlayers(players.slice(1)));
}

// First implementation
// function topPlayers (players) {
//   var results = [];
//   for(var i = 0; i < players.length; i++){
//     if(players[i].score > 100){
//       results.push(players[i].name);
//     }
//   }
//   return results;
// }
