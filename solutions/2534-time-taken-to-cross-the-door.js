/**
 * 2534. Time Taken to Cross the Door
 * https://leetcode.com/problems/time-taken-to-cross-the-door/
 * Difficulty: Hard
 *
 * There are n persons numbered from 0 to n - 1 and a door. Each person can enter or exit
 * through the door once, taking one second.
 *
 * You are given a non-decreasing integer array arrival of size n, where arrival[i] is the
 * arrival time of the ith person at the door. You are also given an array state of size n,
 * where state[i] is 0 if person i wants to enter through the door or 1 if they want to exit
 * through the door.
 *
 * If two or more persons want to use the door at the same time, they follow the following
 * rules:
 * - If the door was not used in the previous second, then the person who wants to exit
 *   goes first.
 * - If the door was used in the previous second for entering, the person who wants to
 *   enter goes first.
 * - If the door was used in the previous second for exiting, the person who wants to
 *   exit goes first.
 * - If multiple persons want to go in the same direction, the person with the smallest
 *   index goes first.
 *
 * Return an array answer of size n where answer[i] is the second at which the ith person
 * crosses the door.
 *
 * Note that:
 * - Only one person can cross the door at each second.
 * - A person may arrive at the door and wait without entering or exiting to follow the
 *   mentioned rules.
 */

/**
 * @param {number[]} arrival
 * @param {number[]} state
 * @return {number[]}
 */
var timeTaken = function(arrival, state) {
  const enterPool = [];
  const exitPool = [];
  let currentTime = 0;
  let previousState = 1;
  let i = 0;
  const result = new Array(arrival.length);

  while (i < arrival.length || enterPool.length > 0 || exitPool.length > 0) {
    while (i < arrival.length && arrival[i] <= currentTime) {
      if (state[i] === 0) {
        enterPool.push(i);
      } else {
        exitPool.push(i);
      }
      i++;
    }

    if (previousState === 1) {
      if (exitPool.length > 0) {
        result[exitPool.shift()] = currentTime;
      } else if (enterPool.length > 0) {
        result[enterPool.shift()] = currentTime;
        previousState = 0;
      }
    } else {
      if (enterPool.length > 0) {
        result[enterPool.shift()] = currentTime;
      } else if (exitPool.length > 0) {
        result[exitPool.shift()] = currentTime;
        previousState = 1;
      } else {
        previousState = 1;
      }
    }

    currentTime++;
  }

  return result;
};
