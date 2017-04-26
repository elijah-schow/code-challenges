// Given a number of pence, return the possible number coin combinations
var coins = [1,2,5,10,20,50,100,200];
function coinSums (total) {
  let result = 0;
  const max = coins.map( coin => Math.floor(total/coin) );
  // Horrifying, but it works...
  for (let one = 0; one <= max[0]; one++) {
    for (let two = 0; two <= max[1]; two++) {
      for (let five = 0; five <= max[2]; five++) {
        for (let ten = 0; ten <= max[3]; ten++) {
          for (let twenty = 0; twenty <= max[4]; twenty++) {
            for (let fifty = 0; fifty <= max[5]; fifty++) {
              for (let onehundred = 0; onehundred <= max[6]; onehundred++) {
                for (let twohundred = 0; twohundred <= max[7]; twohundred++) {
                  const sum = one * coins[0] +
                              two * coins[1] +
                              five * coins[2] +
                              ten * coins[3] +
                              twenty * coins[4] +
                              fifty * coins[5] +
                              onehundred * coins[6] +
                              twohundred * coins[7];
                  if (sum === total) {
                    result++;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return result;
}
