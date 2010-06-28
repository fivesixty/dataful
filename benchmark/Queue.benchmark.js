var queue = new Queue();
var arrqueue = new ArrayQueue();
var arr = [];

function qPush (count) {
  while (count--) {
    queue.push(count);
  };
};

function aqPush (count) {
  while (count--) {
    arrqueue.push(count);
  };
};

function aPush (count) {
  while (count--) {
    arr.push(count);
  };
};

function qPop (count) {
  while (count--) {
    queue.pop();
  };
};

function aqPop (count) {
  while (count--) {
    arrqueue.pop();
  };
};

function aPop (count) {
  while (count--) {
    arr.shift();
  };
};

function qAmortise (count) {
  queue = new Queue();
  var i = count;
  while (i--) {
    queue.push(i);
  };
  while (count--) {
    queue.pop();
  };
};

function aqAmortise (count) {
  arrqueue = new ArrayQueue();
  var i = count;
  while (i--) {
    arrqueue.push(i);
  };
  while (count--) {
    arrqueue.pop();
  };
};

function aAmortise (count) {
  arr = [];
  var i = count;
  while (i--) {
    arr.push(i);
  };
  while (count--) {
    arr.shift();
  };
};

function qAlt (count) {
  queue = new Queue();
  while (count--) {
    queue.push(count);
    queue.push(count);
    queue.push(count);
    queue.pop();
    queue.pop();
    queue.pop();
  };
};

function aqAlt (count) {
  arrqueue = new ArrayQueue();
  while (count--) {
    arrqueue.push(count);
    arrqueue.push(count);
    arrqueue.push(count);
    arrqueue.pop();
    arrqueue.pop();
    arrqueue.pop();
  };
};

function aAlt (count) {
  arr = [];
  while (count--) {
    arr.push(count);
    arr.push(count);
    arr.push(count);
    arr.shift();
    arr.shift();
    arr.shift();
  };
};

JSLitmus.test("Queue Push", qPush);
JSLitmus.test("ArrayQueue Push", aqPush);
JSLitmus.test("Array Push", aPush);
JSLitmus.test("Queue Pop", qPop);
JSLitmus.test("ArrayQueue Pop", aqPop);
JSLitmus.test("Array Pop", aPop);
JSLitmus.test("Queue Amortise", qAmortise);
JSLitmus.test("ArrayQueue Amortise", aqAmortise);
JSLitmus.test("Array Amortise", aAmortise);
JSLitmus.test("Queue Alt", qAlt);
JSLitmus.test("ArrayQueue Alt", aqAlt);
JSLitmus.test("Array Alt", aAlt);