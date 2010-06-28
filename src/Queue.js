"use strict";
/**
  * Queue wrapper around two internal Array objects.
  * Uses direct stacks instead of Stack objects for speed.
  **/
var Queue = (function () {
  return function () {
    /**
      * Private Variables
      **/
    var inStack = [], outStack = [];
    
    /**
      * Standard Queue Methods
      **/
    this.push = function (item) {
      inStack.push(item);
    };
    this.pop = function () {
      if (outStack.length > 0) {
        return outStack.pop();
      } else {
        outStack = inStack.reverse();
        inStack = [];
        return outStack.pop();
      }
    };
    this.front = function () {
      if (outStack.length > 0) {
        return outStack[outStack.length-1];
      } else {
        return inStack[0];
      }
    };
    this.clear = function () {
      inStack = [];
      outStack = [];
    };
    this.size = function () {
      return inStack.length + outStack.length;
    };
    this.empty = function () {
      return (inStack.length + outStack.length) === 0;
    };
  };
}());


/**
  * ArrayQueue wrapper around an internal Array object.
  * Can be faster than default Queue implementation, depending
  * On usage characteristics. Benchmark with your own code.
  **/
var ArrayQueue = (function () {
  return function () {
    /**
      * Private Variables
      **/
    var queue = [], front = 0, back = 0;
    
    /**
      * Standard Queue Methods
      **/
    this.push = function (item) {
      queue[back] = item;
      back++;
    };
    this.pop = function () {
      if (back === 0) {
        return undefined;
      } else if (front === back) {
        queue = [];
        front = 0;
        back = 0;
        return undefined;
      }
      front++;
      return queue[front-1];
    };
    this.front = function () {
      return queue[front];
    };
    this.clear = function () {
      queue = [];
      front = 0;
      back = 0;
    };
    this.size = function () {
      return back - front;
    };
    this.empty = function () {
      return (back - front) === 0;
    };
  };
}());