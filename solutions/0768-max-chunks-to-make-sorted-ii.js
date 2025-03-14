/**
 * 768. Max Chunks To Make Sorted II
 * https://leetcode.com/problems/max-chunks-to-make-sorted-ii/
 * Difficulty: Hard
 *
 * You are given an integer array arr.
 *
 * We split arr into some number of chunks (i.e., partitions), and individually sort each chunk.
 * After concatenating them, the result should equal the sorted array.
 *
 * Return the largest number of chunks we can make to sort the array.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  const stack = [];

  for (const num of arr) {
    if (stack.length === 0 || stack[stack.length - 1] <= num) {
      stack.push(num);
    } else {
      const max = stack.pop();
      while (stack.length && stack[stack.length - 1] > num) {
        stack.pop();
      }
      stack.push(max);
    }
  }

  return stack.length;
};
