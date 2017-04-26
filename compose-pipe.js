// Implement `compose` and `pipe` functions
var compose = (...fs) => (arg) => ( fs.reduceRight( (prev, f) => f.call(this, prev), arg ) );
var pipe = (...fs) => (arg) => ( fs.reduce( (prev, f) => f.call(this, prev), arg ) );

// First implementation
// var compose = function(...functions) {
//   return function(argument) {
//     let previous = argument;
//     for(let i = functions.length - 1; i >= 0; i--) {
//       previous = functions[i].call(this, previous);
//     }
//     return previous;
//   }
// };
