/**
 * 641. Design Circular Deque
 * https://leetcode.com/problems/design-circular-deque/
 * Difficulty: Medium
 *
 * Design your implementation of the circular double-ended queue (deque).
 *
 * Implement the MyCircularDeque class:
 * - MyCircularDeque(int k) Initializes the deque with a maximum size of k.
 * - boolean insertFront() Adds an item at the front of Deque. Returns true if the operation
 *   is successful, or false otherwise.
 * - boolean insertLast() Adds an item at the rear of Deque. Returns true if the operation
 *   is successful, or false otherwise.
 * - boolean deleteFront() Deletes an item from the front of Deque. Returns true if the
 *   operation is successful, or false otherwise.
 * - boolean deleteLast() Deletes an item from the rear of Deque. Returns true if the operation
 *   is successful, or false otherwise.
 * - int getFront() Returns the front item from the Deque. Returns -1 if the deque is empty.
 * - int getRear() Returns the last item from Deque. Returns -1 if the deque is empty.
 * - boolean isEmpty() Returns true if the deque is empty, or false otherwise.
 * - boolean isFull() Returns true if the deque is full, or false otherwise.
 */

/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  this.queue = new Array(k);
  this.size = k;
  this.front = 0;
  this.rear = -1;
  this.count = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.isFull()) return false;
  this.front = (this.front - 1 + this.size) % this.size;
  this.queue[this.front] = value;
  this.count++;
  if (this.count === 1) this.rear = this.front;
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.isFull()) return false;
  this.rear = (this.rear + 1) % this.size;
  this.queue[this.rear] = value;
  this.count++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if (this.isEmpty()) return false;
  this.front = (this.front + 1) % this.size;
  this.count--;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if (this.isEmpty()) return false;
  this.rear = (this.rear - 1 + this.size) % this.size;
  this.count--;
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  return this.isEmpty() ? -1 : this.queue[this.front];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  return this.isEmpty() ? -1 : this.queue[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return this.count === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return this.count === this.size;
};
