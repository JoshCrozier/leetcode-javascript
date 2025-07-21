/**
 * 3369. Design an Array Statistics Tracker
 * https://leetcode.com/problems/design-an-array-statistics-tracker/
 * Difficulty: Hard
 *
 * Design a data structure that keeps track of the values in it and answers some queries regarding
 * their mean, median, and mode.
 *
 * Implement the StatisticsTracker class.
 * - StatisticsTracker(): Initialize the StatisticsTracker object with an empty array.
 * - void addNumber(int number): Add number to the data structure.
 * - void removeFirstAddedNumber(): Remove the earliest added number from the data structure.
 * - int getMean(): Return the floored mean of the numbers in the data structure.
 * - int getMedian(): Return the median of the numbers in the data structure.
 * - int getMode(): Return the mode of the numbers in the data structure. If there are multiple
 *   modes, return the smallest one.
 *
 * Note:
 * - The mean of an array is the sum of all the values divided by the number of values in the array.
 * - The median of an array is the middle element of the array when it is sorted in non-decreasing
 *   order. If there are two choices for a median, the larger of the two values is taken.
 * - The mode of an array is the element that appears most often in the array.
 */

var StatisticsTracker = function() {
  this.deque = [];
  this.count = new Map();
  this.frequencyHeap = new PriorityQueue((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0];
    return a[1] - b[1];
  });
  this.total = 0;

  this.smallHeap = new PriorityQueue((a, b) => b - a);
  this.largeHeap = new PriorityQueue((a, b) => a - b);
  this.largeRemove = new Map();
  this.smallRemove = new Map();
  this.balance = 0;
};

/**
 * @param {number} number
 * @return {void}
 */
StatisticsTracker.prototype.addNumber = function(number) {
  this.deque.push(number);
  this.total += number;

  const currentCount = this.count.get(number) || 0;
  this.count.set(number, currentCount + 1);
  this.frequencyHeap.enqueue([this.count.get(number), number]);

  if (this.largeHeap.isEmpty() || number >= this.largeHeap.front()) {
    this.largeHeap.enqueue(number);
    this.balance += 1;
  } else {
    this.smallHeap.enqueue(number);
    this.balance -= 1;
  }

  this.keepBalance();
};

/**
 * @return {void}
 */
StatisticsTracker.prototype.removeFirstAddedNumber = function() {
  const value = this.deque.shift();

  const currentCount = this.count.get(value);
  this.count.set(value, currentCount - 1);
  if (this.count.get(value) > 0) {
    this.frequencyHeap.enqueue([this.count.get(value), value]);
  }

  this.total -= value;

  if (!this.largeHeap.isEmpty() && value >= this.largeHeap.front()) {
    this.largeRemove.set(value, (this.largeRemove.get(value) || 0) + 1);
    this.balance -= 1;
  } else {
    this.smallRemove.set(value, (this.smallRemove.get(value) || 0) + 1);
    this.balance += 1;
  }

  this.keepBalance();
};

/**
 * @return {void}
 */
StatisticsTracker.prototype.keepBalance = function() {
  if (this.balance > 1) {
    this.smallHeap.enqueue(this.largeHeap.dequeue());
    this.balance -= 2;
  }
  if (this.balance < 0) {
    this.largeHeap.enqueue(this.smallHeap.dequeue());
    this.balance += 2;
  }

  while (!this.smallHeap.isEmpty() && (this.smallRemove.get(this.smallHeap.front()) || 0) > 0) {
    const removed = this.smallHeap.dequeue();
    this.smallRemove.set(removed, this.smallRemove.get(removed) - 1);
  }

  while (!this.largeHeap.isEmpty() && (this.largeRemove.get(this.largeHeap.front()) || 0) > 0) {
    const removed = this.largeHeap.dequeue();
    this.largeRemove.set(removed, this.largeRemove.get(removed) - 1);
  }
};

/**
 * @return {number}
 */
StatisticsTracker.prototype.getMean = function() {
  return Math.floor(this.total / this.deque.length);
};

/**
 * @return {number}
 */
StatisticsTracker.prototype.getMedian = function() {
  return this.largeHeap.front();
};

/**
 * @return {number}
 */
StatisticsTracker.prototype.getMode = function() {
  while (!this.frequencyHeap.isEmpty()) {
    const [frequency, value] = this.frequencyHeap.front();
    if (this.count.get(value) === frequency) {
      return value;
    } else {
      this.frequencyHeap.dequeue();
    }
  }
};
