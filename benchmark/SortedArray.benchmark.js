var randoms = [];
for (var i = 0; i < 50000; i++) {
  randoms.push(Math.random());
}
var numSort = function (a,b) {
  return a-b;
}

var tArray;
function sortTest() {
  tArray = [];
  
  for (var i = 0; i < 500; i++) {
    tArray.push(randoms[i]);
    if (randoms[i] < 0.1) {
      tArray.sort(numSort);
    }
  }
}

function lnTest() {
  tArray = new SortedArray(numSort);
  
  for (var i = 0; i < 500; i++) {
    tArray.add(randoms[i]);
  }
}

JSLitmus.test("sort", sortTest);
JSLitmus.test("sortedInsert", lnTest);