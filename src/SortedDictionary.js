"use strict";
/**
  * SortedDictionary, an extension of Dictionary object that keeps its
  * keys sorted using a SortedArray.
  **/
var SortedDictionary = (function () {
  
  /**
    * Create a constructor which we can then attach methods to
    * via the prototype. Keeps creation cost low.
    **/
  var SortedDictionaryObject = function () {
    // Forgetful people need help.
    if (!(this instanceof SortedDictionaryObject)) {
      throw "Exception: Must use new to create Dictionary.";
    }
    
    this.init.apply(this, arguments);
  };
  
  /**
    * Get a reference to the prototype to extend.
    **/
  SortedDictionaryObject.prototype = new Dictionary();
  var SortedDictionary = SortedDictionaryObject.prototype;
  
  /**
    * Initialisation, with optional object to store as a dictionary.
    **/
  SortedDictionary.init = function (sortFunc, initialObject) {
    this.hash = {};
    if (sortFunc === undefined) {
      this.keys = new SortedArray(function(a,b) { return a > b ? 1 : (a < b) ? -1 : 0; });
    } else {
      this.keys = new SortedArray(sortFunc);
    }
    this.keyhash = {};
    
    if (initialObject !== undefined) {
      for (var i in initialObject) {
        if (initialObject.hasOwnProperty(i)) {
          this.set(i, initialObject[i]);
        }
      }
    }
  }
  
  /**
    * Setters and Getters
    **/
    
  SortedDictionary.set = function (key, obj) {
    // Track keys.
    if (this.keyhash[key] === undefined) {
      this.keys.add(key);
      this.keyhash[key] = true;
    }
    this.hash[key] = obj;
  };
  
  SortedDictionary.remove = function (key) {
    if (this.hasKey(key)) {
      this.keys.splice(this.keys.findIndex(key), 1);
      delete this.keyhash[key];
      delete this.hash[key];
    }
  };
  
  SortedDictionary.getKeys = function () {
    return this.keys.toArray();
  };
  
  /**
    * Return the original function.
    **/
  
  return SortedDictionaryObject;
  
}(Dictionary));