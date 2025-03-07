/**
 * 622. Design Circular Queue
 * https://leetcode.com/problems/design-circular-queue/
 * Difficulty: Medium
 *
 * Design your implementation of the circular queue. The circular queue is a linear data structure
 * in which the operations are performed based on FIFO (First In First Out) principle, and the
 * last position is connected back to the first position to make a circle. It is also called
 * "Ring Buffer".
 *
 * One of the benefits of the circular queue is that we can make use of the spaces in front of
 * the queue. In a normal queue, once the queue becomes full, we cannot insert the next element
 * even if there is a space in front of the queue. But using the circular queue, we can use the
 * space to store new values.
 *
 * Implement the MyCircularQueue class:
 * - MyCircularQueue(k) Initializes the object with the size of the queue to be k.
 * - int Front() Gets the front item from the queue. If the queue is empty, return -1.
 * - int Rear() Gets the last item from the queue. If the queue is empty, return -1.
 * - boolean enQueue(int value) Inserts an element into the circular queue. Return true if the
 *   operation is successful.
 * - boolean deQueue() Deletes an element from the circular queue. Return true if the operation
 *   is successful.
 * - boolean isEmpty() Checks whether the circular queue is empty or not.
 * - boolean isFull() Checks whether the circular queue is full or not.
 *
 * You must solve the problem without using the built-in queue data structure in your programming
 * language.
 */

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queue = new Array(k);
  this.size = k;
  this.front = -1;
  this.rear = -1;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) {
    return false;
  }
  if (this.isEmpty()) {
    this.front = 0;
  }
  this.rear = (this.rear + 1) % this.size;
  this.queue[this.rear] = value;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) {
    return false;
  } else if (this.front === this.rear) {
    this.front = -1;
    this.rear = -1;
  } else {
    this.front = (this.front + 1) % this.size;
  }
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  return this.isEmpty() ? -1 : this.queue[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  return this.isEmpty() ? -1 : this.queue[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.front === -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return (this.rear + 1) % this.size === this.front;
};
