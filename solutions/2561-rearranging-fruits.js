/**
 * 2561. Rearranging Fruits
 * https://leetcode.com/problems/rearranging-fruits/
 * Difficulty: Hard
 *
 * You have two fruit baskets containing n fruits each. You are given two 0-indexed integer
 * arrays basket1 and basket2 representing the cost of fruit in each basket. You want to
 * make both baskets equal. To do so, you can use the following operation as many times as you want:
 * - Chose two indices i and j, and swap the ith fruit of basket1 with the jth fruit of basket2.
 * - The cost of the swap is min(basket1[i],basket2[j]).
 *
 * Two baskets are considered equal if sorting them according to the fruit cost makes them
 * exactly the same baskets.
 *
 * Return the minimum cost to make both the baskets equal or -1 if impossible.
 */

/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function(basket1, basket2) {
  const count1 = new Map();
  const count2 = new Map();

  for (const fruit of basket1) {
    count1.set(fruit, (count1.get(fruit) || 0) + 1);
  }

  for (const fruit of basket2) {
    count2.set(fruit, (count2.get(fruit) || 0) + 1);
  }

  const allFruits = new Set([...basket1, ...basket2]);
  const excess1 = [];
  const excess2 = [];
  let minCost = Infinity;

  for (const fruit of allFruits) {
    const freq1 = count1.get(fruit) || 0;
    const freq2 = count2.get(fruit) || 0;
    const total = freq1 + freq2;

    if (total % 2 !== 0) return -1;

    minCost = Math.min(minCost, fruit);
    const target = total / 2;

    if (freq1 > target) {
      for (let i = 0; i < freq1 - target; i++) {
        excess1.push(fruit);
      }
    } else if (freq2 > target) {
      for (let i = 0; i < freq2 - target; i++) {
        excess2.push(fruit);
      }
    }
  }

  excess1.sort((a, b) => a - b);
  excess2.sort((a, b) => b - a);

  let result = 0;
  for (let i = 0; i < excess1.length; i++) {
    const directSwap = Math.min(excess1[i], excess2[i]);
    const doubleSwap = 2 * minCost;
    result += Math.min(directSwap, doubleSwap);
  }

  return result;
};
