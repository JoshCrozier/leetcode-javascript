/**
 * 2233. Maximum Product After K Increments
 * https://leetcode.com/problems/maximum-product-after-k-increments/
 * Difficulty: Medium
 *
 * You are given an array of non-negative integers nums and an integer k. In one operation,
 * you may choose any element from nums and increment it by 1.
 *
 * Return the maximum product of nums after at most k operations. Since the answer may be
 * very large, return it modulo 109 + 7. Note that you should maximize the product before
 * taking the modulo.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumProduct = function(nums, k) {
  const MOD = 1e9 + 7;
  const minHeap = new PriorityQueue((a, b) => a - b);

  for (const num of nums) {
    minHeap.enqueue(num);
  }

  for (let i = 0; i < k; i++) {
    const smallest = minHeap.dequeue();
    minHeap.enqueue(smallest + 1);
  }

  let result = 1;
  while (!minHeap.isEmpty()) {
    result = (result * minHeap.dequeue()) % MOD;
  }

  return result;
};
