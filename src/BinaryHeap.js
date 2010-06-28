"use strict";
var BinaryHeap = (function() {
  
  var BinaryHeapObject = function () {
    // Forgetful people need help.
    if (!(this instanceof BinaryHeapObject)) {
      throw "Exception: Must use new to create BinaryHeap.";
    }
    
    this.init.apply(this, arguments);
  };
  
  /**
    * Get a reference to the prototype to extend.
    **/
  var BinaryHeap = BinaryHeapObject.prototype;
  
  BinaryHeap.init = function (comparator) {
    this.heap = [];
    this.last = 0;
    
    if (comparator === undefined) {
      this.comp = function (a,b) { return a < b ? true : false; };
    } else {
      this.comp = comparator;
    }
  };
  
  BinaryHeap.first = function () {
    return this.heap[0].payload;
  };
  
  BinaryHeap.insert = function (key, payload) {
    this.heap[this.last] = {key:key, payload:payload};
    if (this.last > 0) {
      this.bubbleIndexUp(this.last);
    }
    this.last++;
  }
  
  BinaryHeap.bubbleIndexUp = function (index) {
    var p = Math.floor((index-1)/2);
    if (this.comp(this.heap[index].key, this.heap[p].key)) {
      // Swap
      var tmp = this.heap[p];
      this.heap[p] = this.heap[index];
      this.heap[index] = tmp;
      // Bubble
      if (p > 0) {
        this.bubbleIndexUp(p);
      }
    }
  }
  
  BinaryHeap.bubbleIndexDown = function (index) {
    var c = (index*2) + 1;
    
    if (c >= this.last) {
      return;
    }
    else if (c === this.last-1) {
      if (!this.comp(this.heap[c].key, this.heap[index].key)) {
        return;
      }
    } else {
      if (this.comp(this.heap[c+1].key, this.heap[c].key)) {
        ++c;
      }
      if (!this.comp(this.heap[c].key, this.heap[index].key)) {
        return;
      }
    }
    // Swap
    var tmp = this.heap[c];
    this.heap[c] = this.heap[index];
    this.heap[index] = tmp;
    // Bubble
    this.bubbleIndexDown(c);
  }
  
  BinaryHeap.extractMin = function () {
    if (this.last === 0) {
      return undefined;
    }
    var ret = this.heap[0].payload;
    this.heap[0] = this.heap[--this.last];
    this.last === 0 ? this.heap = [] : this.bubbleIndexDown(0);
    return ret;
  }
  
  BinaryHeap.decreaseKey = function () {
    /**
      * TODO
      **/
  }
  
  return BinaryHeapObject;

}());