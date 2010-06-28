var stack = new Stack(), arr = [];

function stackPush(count) {
  while(count--) {
    stack.push(count);
  }
}

function arrPush(count) {
  while(count--) {
    arr.push(count);
  }
}

function stackPeek(count) {
  while(count--) {
    stack.peek();
  }
}

function arrPeek(count) {
  while(count--) {
    arr[arr.length-1];
  }
}

function stackPop(count) {
  while (count--) {
    stack.push("a");
    stack.pop();
  }
}

function arrPop(count) {
  while (count--) {
    arr.push("b");
    arr.pop();
  }
}

function stackAmortise(count) {
  while (count--) {
    stack.push("a");
    stack.peek();
    stack.pop();
  }
}

function arrAmortise(count) {
  while (count--) {
    arr.push("a");
    arr[arr.length-1];
    arr.pop();
  }
}

JSLitmus.test("Stack: Push", stackPush);
JSLitmus.test("Array: Push", arrPush);
JSLitmus.test("Stack: Peek", stackPeek);
JSLitmus.test("Array: Peek", arrPeek);
JSLitmus.test("Stack: Pop", stackPop);
JSLitmus.test("Array: Pop", arrPop);
JSLitmus.test("Stack: Amortise", stackAmortise);
JSLitmus.test("Array: Amortise", arrAmortise);