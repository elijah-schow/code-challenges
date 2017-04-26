// Finishing writing the `addChild` and `contains` methods
var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};
treeMaker.methods = {};
treeMaker.methods.addChild = function(value){
  var node = treeMaker(value);
  this.children.push(node);
}
treeMaker.methods.contains = function(value){
  if (this.value === value) {
    return true;
  }
  return this.children.reduce(function(contains, child){
    return child.contains(value) || contains;
  }, false);
}
