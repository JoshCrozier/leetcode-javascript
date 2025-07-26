/**
 * 2208. Minimum Operations to Halve Array Sum
 * https://leetcode.com/problems/minimum-operations-to-halve-array-sum/
 * Difficulty: Medium
 *
 * You are given an array nums of positive integers. In one operation, you can choose any
 * number from nums and reduce it to exactly half the number. (Note that you may choose
 * this reduced number in future operations.)
 *
 * Return the minimum number of operations to reduce the sum of nums by at least half.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function(nums) {
  const pq = new PriorityQueue((a, b) => b - a);
  let totalSum = 0;

  for (const num of nums) {
    pq.enqueue(num);
    totalSum += num;
  }

  const target = totalSum / 2;
  let reducedSum = 0;
  let result = 0;

  while (reducedSum < target) {
    const largest = pq.dequeue();
    const halved = largest / 2;
    reducedSum += halved;
    pq.enqueue(halved);
    result++;
  }

  return result;
};
