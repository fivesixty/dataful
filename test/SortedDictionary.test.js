module("SortedDictionary");

function numSort(a,b) {
  return a-b;
}

test("creation", function() {
  var dictionary = new SortedDictionary( numSort, {1: "a", 30: "c", 8: "f"} );
  
  equals( dictionary.get(8), "f", "object conversion" );
  same( dictionary.getKeys(), ["1","8","30"], "callback sorting" );
  
  var dictionary = new SortedDictionary();
  dictionary.set("alpha", "a");
  dictionary.set("gamma", "a");
  dictionary.set("beta", "a");
  
  same( dictionary.getKeys(), ["alpha","beta","gamma"], "generic sorting" );
});

test("get/set", function() {
  var dictionary = new SortedDictionary();
  
  dictionary.set( "newkey", "literal" );
  equals( dictionary.get("missing key"), undefined, "missing key" );
  equals( dictionary.get("newkey"), "literal", "literal value" );
  
  var c = 0;
  dictionary.each(function() {
    c++;
  });
  equals( c, 1, "each() iteration count" );
  
  dictionary.foreach(function() {
    c++;
  });
  equals( c, 2, "foreach() iteration count" );
  
  dictionary.remove( "newkey" );
  
  equals( dictionary.get("newkey"), undefined, "removed key get" );
  equals( dictionary.hasKey("newkey"), false, "removed key exists" );
  
});
/*
test("conversion", function() {
  var obj = {a: 1, b: 2, c: 3};
  var dictionary = new Dictionary( obj );
  
  same( dictionary.toObject(), obj, "toObject()" );
  same( dictionary.toArray(), [1,2,3], "toArray()" );
  equals( dictionary.toString(), "{a: 1, b: 2, c: 3}", "toString()" );
});
*/