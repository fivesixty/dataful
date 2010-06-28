module("Queue");

test("Stack implementation", function() {
  
  var queue = new Queue();
  
  queue.push(1);
  queue.push(2);
  queue.push(3);
  
  equals( queue.front(), 1, "peek() with empty out" );
  equals( queue.pop(), 1, "pop()" );
  equals( queue.size(), 2, "size()" );
  equals( queue.pop(), 2, "pop()" );
  equals( queue.front(), 3, "peek() with valued out" );
  
  queue.pop();
  
  equals( queue.pop(), undefined, "popping empty queue" );
  
});

test("Array implementation", function() {
  
  var queue = new ArrayQueue();
  
  queue.push(1);
  queue.push(2);
  queue.push(3);
  
  equals( queue.front(), 1, "peek() with empty out" );
  equals( queue.pop(), 1, "pop()" );
  equals( queue.size(), 2, "size()" );
  equals( queue.pop(), 2, "pop()" );
  equals( queue.front(), 3, "peek() with valued out" );
  
  queue.pop();
  
  equals( queue.pop(), undefined, "popping empty queue" );
  
});