var Tree = function(){
  this.children = [];
};

// Implement `getClosestCommonAncestor` on the given Tree class
Tree.prototype.getClosestCommonAncestor = function(a, b){
  var result = null;
  var apath = this.getAncestorPath(a);
  var bpath = this.getAncestorPath(b);
  if (apath === null || bpath === null) {
    return result;
  }
  for(var i = 0; i < apath.length; i++){
    if (apath[i] === bpath[i]) {
      result = apath[i];
    } else {
      break;
    }
  }
  return result;
}

// Implement `getAncestorPath` on the given Tree class
Tree.prototype.getAncestorPath = function(decendant){
  var path = [this];
  if(this === decendant) {
    return path;
  }
  for (let i = 0; i < this.children.length; i++) {
    let childpath = this.children[i].getAncestorPath(decendant);
    if (childpath) {
      return path.concat( childpath );
    }
  }
  return null;
}

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
