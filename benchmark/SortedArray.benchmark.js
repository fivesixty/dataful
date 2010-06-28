var size = 2000;

function rNumSort (a,b) {
  if (a=== undefined || b===undefined)
    return 0;
  return b.key - a.key;
}

function benchArray() {
  var sarray = new SortedArray(rNumSort);
  var i = size, j = size;
  while (j--) {
    sarray.add({key:Math.random(), payload:"bytes"});
  }
  while (i--) {
    sarray.pop();
  }
}

function benchLazyArray() {
  var sarray = new LazySortedArray(rNumSort);
  var i = size, j = size;
  while (j--) {
    sarray.add({key:Math.random(), payload:"bytes"});
  }
  while (i--) {
    sarray.pop();
  }
}

function pbenchArray() {
  var sarray = new SortedArray(rNumSort);
  var i = size*2, rnd;
  while (i--) {
    rnd = Math.random();
    if (rnd > (i/(size*2)))
      sarray.add({key:rnd, payload:"bytes"});
    else
      sarray.pop();
  }
}

function pbenchLazyArray() {
  var sarray = new LazySortedArray(rNumSort);
  var i = size*2, rnd;
  while (i--) {
    rnd = Math.random();
    if (rnd > (i/(size*2)))
      sarray.add({key:rnd, payload:"bytes"});
    else
      sarray.pop();
  }
}

JSLitmus.test("SortedArray", benchArray);
JSLitmus.test("LazySortedArray", benchLazyArray);

JSLitmus.test("SortedArray Probalistic", pbenchArray);
JSLitmus.test("LazySortedArray Probalistic", pbenchLazyArray);