module("Dictionary");

test("creation", function() {
  var dictionary = new Dictionary();
  
  same( dictionary.hash, {}, "empty object" );
  same( dictionary.keys, [], "empty array" );
  
  dictionary = new Dictionary( {a: 1, b: 2, c: 3} );
  
  equals( dictionary.get("b"), 2, "object conversion" );
});

test("get/set", function() {
  var dictionary = new Dictionary();
  
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