// Implement a linked list
var LinkedList = function (initialValue) {
  const node = initialValue ? { value: initialValue, next: null } : null;
  this.head = node;
  this.tail = node;
};

LinkedList.prototype.addToTail = function(value) {
  const node = { value, next: null };
  if (this.tail) {
    this.tail.next = node;
    this.tail = node;
  } else {
    this.head = this.tail = node;
  }
};

LinkedList.prototype.removeHead = function() {
  if (this.head.next) {
    this.head = this.head.next;
  } else {
    this.head = this.tail = null;
  }
};

LinkedList.prototype.contains = function(value) {
  let node = this.head;
  do {
    if (node.value === value) { return true; }
  }
  while (node = node.next);
  return false;
};
