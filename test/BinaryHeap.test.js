module("BinaryHeap");

test("general", function() {
  
  var bheap = new BinaryHeap();
  bheap.insert(3, "a");
  bheap.insert(1, "b");
  bheap.insert(2, "c");
  bheap.insert(6, "d");
  bheap.insert(4, "e");
  bheap.insert(9, "f");
  bheap.insert(10, "g");
  bheap.insert(7, "h");
  bheap.insert(5, "i");
  bheap.insert(8, "j");
  
  equals( bheap.first(), "b", "first()" );
  equals( bheap.extractMin(), "b", "extractMin()" );
  equals( bheap.extractMin(), "c", "extractMin()" );
  equals( bheap.extractMin(), "a", "extractMin()" );
  equals( bheap.extractMin(), "e", "extractMin()" );
  equals( bheap.extractMin(), "i", "extractMin()" );
  equals( bheap.extractMin(), "d", "extractMin()" );
  equals( bheap.extractMin(), "h", "extractMin()" );
  equals( bheap.extractMin(), "j", "extractMin()" );
  equals( bheap.extractMin(), "f", "extractMin()" );
  equals( bheap.extractMin(), "g", "extractMin()" );
  
  for (var i = 0; i < 1000; ++i) {
    var rand = Math.random();
    bheap.insert(rand, rand);
  }
  
  var d = 0;
  var last = bheap.extractMin();
  
  for (var i = 1; i < 1000; ++i) {
    if (last > bheap.first()) {
      console.log("a: " + last + ", b:" + bheap.first());
      d++;
    }
    last = bheap.extractMin();
  }
  
  equals( d, 0, "Brute test" );
  
});