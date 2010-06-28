"use strict";
/**
  * Dictionary implementation for javascript on top of the object hash.
  * Allows for fast functional iteration over an associative array, by
  * tracking the keys and doing a more direct iteration than would be
  * possible otherwise. Removal operation is where cost is paid. [ O(n) ]
  **/
var Dictionary = (function () {
  
  /**
    * Create a constructor which we can then attach methods to
    * via the prototype. Keeps creation cost low.
    **/
  var DictionaryObject = function () {
    // Forgetful people need help.
    if (!(this instanceof DictionaryObject)) {
      throw "Exception: Must use new to create Dictionary.";
    }
    
    this.init.apply(this, arguments);
  };
  
  /**
    * Get a reference to the prototype to extend.
    **/
  var Dictionary = DictionaryObject.prototype;
  
  /**
    * Initialisation, with optional object to store as a dictionary.
    **/
  Dictionary.init = function () {
    this.hash = {};
    this.keys = [];
    this.keyhash = {};
    
    if (arguments.length > 0) {
      for (var i in arguments[0]) {
        if (arguments[0].hasOwnProperty(i)) {
          this.set(i, arguments[0][i]);
        }
      }
    }
  }
  
  /**
    * Setters and Getters
    **/
    
  Dictionary.set = function (key, obj) {
    // Track keys.
    if (this.keyhash[key] === undefined) {
      this.keys.push(key);
      this.keyhash[key] = true;
    }
    this.hash[key] = obj;
  };
  
  Dictionary.get = function (key) {
    return this.hash[key];
  };
  
  Dictionary.remove = function (key) {
    if (this.hasKey(key)) {
      for (var i = 0, len = this.keys.length; i < len; i++) {
        if (this.keys[i] == key) {
          this.keys.splice(i, 1);
          delete this.keyhash[key];
          delete this.hash[key];
          break;
        }
      }
    }
  };
  
  /**
    * Iterators
    **/
  
  Dictionary.each = function (callback) {
    for (var i = 0, len = this.keys.length; i < len; i++) {
      callback(this.hash[this.keys[i]]);
    }
  };
  
  Dictionary.foreach = function (callback) {
    for (var i = 0, len = this.keys.length; i < len; i++) {
      callback(this.keys[i], this.hash[this.keys[i]]);
    }
  };
  
  /**
    * Keys
    **/
  
  Dictionary.hasKey = function (key) {
    return this.keyhash[key] !== undefined;
  };
  
  Dictionary.getKeys = function () {
    return this.keys;
  };
  
  Dictionary.length = function () {
    return this.keys.length;
  };
  
  /**
    * Conversion methods.
    * Investigate why adding these last methods causes a drastic performance hit under V8.
    **/
  
  Dictionary.toObject = function () {
    return this.hash;
  };
  
  Dictionary.toArray = function () {
    var retArr = [];
    this.each(function (item) {
      retArr.push(item);
    });
    return retArr;
  };
  
  Dictionary.toString = function () {
    return JSON.jsonify(this.hash);
  };
  
  /**
    * Return the original function.
    **/
  
  return DictionaryObject;
  
}());