/**
 * 2805. Custom Interval
 * https://leetcode.com/problems/custom-interval/
 * Difficulty: Medium
 *
 * Function customInterval
 *
 * Given a function fn, a number delay and a number period, return a number id.
 *
 * customInterval is a function that should execute the provided function fn at intervals based
 * on a linear pattern defined by the formula delay + period * count.
 *
 * The count in the formula represents the number of times the interval has been executed
 * starting from an initial value of 0.
 *
 * Function customClearInterval
 *
 * Given the id. id is the returned value from the function customInterval.
 *
 * customClearInterval should stop executing provided function fn at intervals.
 *
 * Note: The setTimeout and setInterval functions in Node.js return an object, not a number.
 */

const intervalMap = new Map();
let nextId = 1;

/**
 * @param {Function} fn
 * @param {number} delay
 * @param {number} period
 * @return {number} id
 */
function customInterval(fn, delay, period) {
  let count = 0;
  const id = nextId++;

  function scheduleNext() {
    const nextDelay = delay + period * count;
    const timeoutId = setTimeout(() => {
      fn();
      count++;
      scheduleNext();
    }, nextDelay);
    intervalMap.set(id, timeoutId);
  }

  scheduleNext();
  return id;
}

/**
 * @param {number} id
 * @return {void}
 */
function customClearInterval(id) {
  const timeoutId = intervalMap.get(id);
  if (timeoutId) {
    clearTimeout(timeoutId);
    intervalMap.delete(id);
  }
}
