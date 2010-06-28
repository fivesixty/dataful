module("Stack");

test("basics", function() {
  
  var stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  equals( stack.peek(), 3, "peek()" );
  equals( stack.pop(), 3, "pop()" );
  equals( stack.peek(), 2, "peek after pop" );
  
  stack.pop();
  stack.pop();
  
  equals( stack.peek(), undefined, "peeking empty stack" );
  equals( stack.pop(), undefined, "popping empty stack" );
  
});