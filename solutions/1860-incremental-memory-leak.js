/**
 * 1860. Incremental Memory Leak
 * https://leetcode.com/problems/incremental-memory-leak/
 * Difficulty: Medium
 *
 * You are given two integers memory1 and memory2 representing the available memory in bits on
 * two memory sticks. There is currently a faulty program running that consumes an increasing
 * amount of memory every second.
 *
 * At the ith second (starting from 1), i bits of memory are allocated to the stick with more
 * available memory (or from the first memory stick if both have the same available memory).
 * If neither stick has at least i bits of available memory, the program crashes.
 *
 * Return an array containing [crashTime, memory1crash, memory2crash], where crashTime is the
 * time (in seconds) when the program crashed and memory1crash and memory2crash are the
 * available bits of memory in the first and second sticks respectively.
 */

/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
var memLeak = function(memory1, memory2) {
  let time = 1;
  let stick1 = memory1;
  let stick2 = memory2;

  while (time <= stick1 || time <= stick2) {
    if (stick1 >= stick2) {
      if (stick1 < time) break;
      stick1 -= time;
    } else {
      if (stick2 < time) break;
      stick2 -= time;
    }
    time++;
  }

  return [time, stick1, stick2];
};
