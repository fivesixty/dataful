"use strict";
/**
  * Stack wrapper around internal Array object.
  **/
var Stack = (function () {
  return function () {
    /**
      * Private Variables
      **/
    var arr = [];
    
    /**
      * Standard Stack Methods
      **/
    this.push = function (item) {
      arr.push(item);
    };
    this.pop = function () {
      return arr.pop();
    };
    this.peek = function () {
      return arr[arr.length-1];
    };
    this.clear = function () {
      arr = [];
    }
  };
}());