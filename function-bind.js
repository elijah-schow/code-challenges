// Implement JavaScript's `bind` function from scratch
var bind = function(func, context, ...outerArgs){
  return function(...innerArgs){
    return func.apply(context, outerArgs.concat(innerArgs));
  }
};

Function.prototype.bind = function(context, ...outerArgs) {
  let func = this;
  return function(...innerArgs){
    return func.apply(context, outerArgs.concat(innerArgs));
  }
};
