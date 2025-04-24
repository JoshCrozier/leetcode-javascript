/**
 * 1649. Create Sorted Array through Instructions
 * https://leetcode.com/problems/create-sorted-array-through-instructions/
 * Difficulty: Hard
 *
 * Given an integer array instructions, you are asked to create a sorted array from the elements in
 * instructions. You start with an empty container nums. For each element from left to right in
 * instructions, insert it into nums. The cost of each insertion is the minimum of the following:
 * - The number of elements currently in nums that are strictly less than instructions[i].
 * - The number of elements currently in nums that are strictly greater than instructions[i].
 *
 * For example, if inserting element 3 into nums = [1,2,3,5], the cost of insertion is min(2, 1)
 * (elements 1 and 2 are less than 3, element 5 is greater than 3) and nums will become [1,2,3,3,5].
 *
 * Return the total cost to insert all elements from instructions into nums. Since the answer may
 * be large, return it modulo 109 + 7
 */

/**
 * @param {number[]} instructions
 * @return {number}
 */
var createSortedArray = function(instructions) {
  const MOD = 1e9 + 7;
  const maxValue = Math.max(...instructions);
  const fenwickTree = new Array(maxValue + 1).fill(0);
  let totalCost = 0;

  for (let i = 0; i < instructions.length; i++) {
    const value = instructions[i];
    const lessCount = query(value - 1);
    const greaterCount = i - query(value);
    totalCost = (totalCost + Math.min(lessCount, greaterCount)) % MOD;
    update(value);
  }

  return totalCost;

  function update(index) {
    for (let i = index; i <= maxValue; i += i & -i) {
      fenwickTree[i]++;
    }
  }

  function query(index) {
    let sum = 0;
    for (let i = index; i > 0; i -= i & -i) {
      sum += fenwickTree[i];
    }
    return sum;
  }
};
