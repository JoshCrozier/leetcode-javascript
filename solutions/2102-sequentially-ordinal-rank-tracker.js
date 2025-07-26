/**
 * 2102. Sequentially Ordinal Rank Tracker
 * https://leetcode.com/problems/sequentially-ordinal-rank-tracker/
 * Difficulty: Hard
 *
 * A scenic location is represented by its name and attractiveness score, where name is a unique
 * string among all locations and score is an integer. Locations can be ranked from the best to
 * the worst. The higher the score, the better the location. If the scores of two locations are
 * equal, then the location with the lexicographically smaller name is better.
 *
 * You are building a system that tracks the ranking of locations with the system initially
 * starting with no locations. It supports:
 * - Adding scenic locations, one at a time.
 * - Querying the ith best location of all locations already added, where i is the number of
 *   times the system has been queried (including the current query).
 *   - For example, when the system is queried for the 4th time, it returns the 4th best location
 *     of all locations already added.
 *
 * Note that the test data are generated so that at any time, the number of queries does not
 * exceed the number of locations added to the system.
 *
 * Implement the SORTracker class:
 * - SORTracker() Initializes the tracker system.
 * - void add(string name, int score) Adds a scenic location with name and score to the system.
 * - string get() Queries and returns the ith best location, where i is the number of times this
 *   method has been invoked (including this invocation).
 */

var SORTracker = function() {
  this.count = 0;
  this.minHeap = new PriorityQueue((a, b) => a[0] - b[0] || b[1].localeCompare(a[1]));
  this.maxHeap = new PriorityQueue((a, b) => b[0] - a[0] || a[1].localeCompare(b[1]));
};

/**
 * @param {string} name
 * @param {number} score
 * @return {void}
 */
SORTracker.prototype.add = function(name, score) {
  this.minHeap.enqueue([score, name]);
  this.maxHeap.enqueue(this.minHeap.dequeue());
};

/**
 * @return {string}
 */
SORTracker.prototype.get = function() {
  const maxElement = this.maxHeap.dequeue();
  this.minHeap.enqueue(maxElement);

  return maxElement[1];
};
