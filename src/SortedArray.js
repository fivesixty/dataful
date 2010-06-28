"use strict";
/**
  * SortedArray implementation, using binary search and a comparator
  * function to splice in new elements at the correct position.
  * Adds some utility functions such as each() as well.
  **/
SortedArray = (function () {

  var SortedArrayObject = function () {
    // Forgetful people need help.
    if (!(this instanceof SortedArrayObject)) {
      throw "Exception: Must use new to create Dictionary.";
    }
    
    this.init.apply(this, arguments);
  };
  
  SortedArrayObject.prototype = new Array();
  var SortedArray = SortedArrayObject.prototype;
  
  SortedArray.init = function (comparer, initialArray) {
    this.sortFunc = comparer;
    
    if (initialArray !== undefined) {
      for (var i = 0, len = initialArray.length; i < len; i++) {
        this.add(initialArray[i]);
      }
    }
  }
  
  SortedArray.each = function (callback) {
    for (var i = 0, len = this.length; i < len; i++) {
      callback(this[i]);
    }
  }
  
  SortedArray.toArray = function () {
    var ret = [];
    for (var i = 0, len = this.length; i < len; i++) {
      ret[i] = this[i];
    }
    return ret;
  }
  
  /**
    * (fuzzy) Binary Search algorithm.
    * Returns 0 on lowest, length on highest, index on match, and index+1 on bounded.
    * [1,2].binarySearch(0) -> 0
    * [1,2].binarySearch(1) -> 0
    * [1,2].binarySearch(1.5) -> 1
    * [1,2].binarySearch(2) -> 1
    * [1,2].binarySearch(3) -> 2
    * Designed for use with splice().
    **/
  SortedArray.binarySearch = function (el) {
    var len = this.length;
    if (len === 0) {
      return 0;
    }
    
    var pointer = len / 2, step=pointer, rounded, d;
    main: for (;;) {
      step *= 0.5;
      rounded = Math.floor(pointer);
      d = this.sortFunc(el, this[rounded]);
      
      if (d === 0) {
        return rounded;
      } else if (d < 0) {
        if (rounded === 0) {
          return 0;
        }
        pointer -= step;
        continue main;
      } else {
        d = this.sortFunc(el, this[rounded+1]);
        if (d <= 0) {
          return rounded+1;
        } else {
          if (rounded+1 === len) {
            return len;
          }
          pointer += step;
          continue main;
        }
      }
    }
  }
  
  /**
    * Adds a new item in a sorted manner using the nearest index to splice in.
    **/
  SortedArray.add = function (value) {
    this.splice(this.binarySearch(value), 0, value);
  }
  
  SortedArray.findIndex = function (value) {
    var index = this.binarySearch(value);
    if (index < this.length && this[index] == value) {
      return index;
    } else {
      return -1;
    }
  }
  
  return SortedArrayObject;

}());


LazySortedArray = (function () {

  var SortedArrayObject = function () {
    // Forgetful people need help.
    if (!(this instanceof SortedArrayObject)) {
      throw "Exception: Must use new to create Dictionary.";
    }
    
    this.init.apply(this, arguments);
  };
  
  SortedArrayObject.prototype = new Array();
  var SortedArray = SortedArrayObject.prototype;
  
  SortedArray.init = function (comparer, initialArray) {
    this.sortFunc = comparer;
    this.sorted = true;
    
    if (initialArray !== undefined) {
      for (var i = 0, len = initialArray.length; i < len; i++) {
        this.add(initialArray[i]);
      }
    }
  }
  
  /**
    * Adds a new item in a sorted manner using the nearest index to splice in.
    **/
  SortedArray.add = function (value) {
    this.sorted = false;
    this.push(value);
  }
  
  SortedArray._pop = SortedArray.pop;
  SortedArray.pop = function () {
    if (!this.sorted) {
      this.sort(this.sortFunc);
      this.sorted = true;
    }
    return this._pop();
  }
  
  return SortedArrayObject;

}());