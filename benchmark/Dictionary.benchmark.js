var hm = new Dictionary();
var arr = [];
var obj = {};
 
function popHM() {
  hm.init();
  for (var i = 0; i < 50000; i++) {
    hm.set(i, true);
  }
}
 
function popArrObj() {
  arr = [];
  obj = {};
  for (var i = 0; i < 50000; i++) {
    arr.push(i);
    obj[i] = true;
  }
}
 
function forIn() {
  for (var x in obj) {
    obj[x] === true;
  }
}
 
function keyIter() {
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] === true;
  }
}
 
function keyIterC() {
  for (var i = 0, len=arr.length; i < len; i++) {
    obj[arr[i]] === true;
  }
}
 
function forEach() {
  arr.forEach(function(el) {
    obj[el] === true;
  });
}
 
function hmEach() {
  hm.each(function(el) {
    el === true;
  });
}
 
function objIn() {
  for (var i = 0; i < 50000; i++) {
    i in obj;
  }
}
 
function objDefined() {
  for (var i = 0; i < 50000; i++) {
    obj[i] !== undefined;
  }
}
 
function hmHasKey() {
  for (var i = 0; i < 50000; i++) {
    hm.hasKey(i);
    // Dictionary.hasKey = function (key) {
    //   return this.keyhash[key] !== undefined;
    // };
  }
}

function hmHasKeyRaw() {
  for (var i = 0; i < 50000; i++) {
    hm.keyhash[i] !== undefined;
  }
}

JSLitmus.test('Populating - Dictionary', popHM);
JSLitmus.test('Populating - Array/Object Pair', popArrObj);
JSLitmus.test('Iterating - A/O: forIn', forIn);
JSLitmus.test('Iterating - A/O: keyIter', keyIter);
JSLitmus.test('Iterating - A/O: keyIterC', keyIterC);
JSLitmus.test('Iterating - A/O: forEach', forEach);
JSLitmus.test('Iterating - Dictionary: each', hmEach);
JSLitmus.test('Membership - A/O: in', objIn);
JSLitmus.test('Membership - A/O: defined', objDefined);
JSLitmus.test('Membership - Dictionary: hasKey', hmHasKey);
JSLitmus.test('Membership - Dictionary: hasKeyRaw', hmHasKeyRaw);