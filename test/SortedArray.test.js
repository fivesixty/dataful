module("SortedArray");

test("array", function() {
  
  function sortNum(a,b) {
    return a-b;
  }
  
  var sarray = new SortedArray(sortNum, [3,2,1]);
  same( sarray.toArray(), [1,2,3], "Initialisation" );
  sarray.add(2.5);
  same( sarray.toArray(), [1,2,2.5,3], "Insertion" );
  
  var sarray2 = new SortedArray(sortNum);
  
  for (var i = 0; i < 1000; i++) {
    sarray2.add(Math.random());
  }
  
  var d = 0;
  
  for (var i = 0; i < 999; i++) {
    if (sarray[i] > sarray[i+1]) {
      d++;
    }
  }
  
  equals( d, 0, "Brute test" );
  equals( sarray2.length, 1000, "length check" );
  
});