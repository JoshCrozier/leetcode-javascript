/**
 * 2106. Maximum Fruits Harvested After at Most K Steps
 * https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/
 * Difficulty: Hard
 *
 * Fruits are available at some positions on an infinite x-axis. You are given a 2D integer array
 * fruits where fruits[i] = [positioni, amounti] depicts amounti fruits at the position positioni.
 * fruits is already sorted by positioni in ascending order, and each positioni is unique.
 *
 * You are also given an integer startPos and an integer k. Initially, you are at the position
 * startPos. From any position, you can either walk to the left or right. It takes one step to
 * move one unit on the x-axis, and you can walk at most k steps in total. For every position
 * you reach, you harvest all the fruits at that position, and the fruits will disappear from
 * that position.
 *
 * Return the maximum total number of fruits you can harvest.
 */

/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
  let result = 0;
  let left = 0;
  let currentSum = 0;

  for (let right = 0; right < fruits.length; right++) {
    currentSum += fruits[right][1];

    while (left <= right) {
      const minPos = fruits[left][0];
      const maxPos = fruits[right][0];
      const steps = Math.min(
        Math.abs(startPos - minPos) + (maxPos - minPos),
        Math.abs(startPos - maxPos) + (maxPos - minPos)
      );

      if (steps <= k) break;
      currentSum -= fruits[left][1];
      left++;
    }

    if (left <= right) {
      result = Math.max(result, currentSum);
    }
  }

  return result;
};
