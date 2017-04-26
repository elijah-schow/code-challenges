// 1. Implement a queue
//    Do not create a storage array for your queue.
// 2. Implement a stack using two queues

var Stack = function() {
  var storage = [];

  this.push = function(value){
    storage.push(value);
  };

  this.pop = function(){
    return storage.pop();
  };

  this.size = function(){
    return storage.length;
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value){
    let item;
    while (item = outbox.pop()) {
      inbox.push(item);
    }
    inbox.push(value);
  };

  this.dequeue = function(){
    let item;
    while (item = inbox.pop()) {
      outbox.push(item);
    }
    return outbox.pop();
  };

  this.size = function(){
    return inbox.size() + outbox.size();
  };
};
