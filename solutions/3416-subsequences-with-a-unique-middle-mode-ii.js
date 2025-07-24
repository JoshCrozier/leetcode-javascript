/**
 * 3416. Subsequences with a Unique Middle Mode II
 * https://leetcode.com/problems/subsequences-with-a-unique-middle-mode-ii/
 * Difficulty: Hard
 *
 * Given an integer array nums, find the number of subsequences of size 5 of nums with
 * a unique middle mode.
 *
 * Since the answer may be very large, return it modulo 109 + 7.
 *
 * A mode of a sequence of numbers is defined as the element that appears the maximum number
 * of times in the sequence.
 *
 * A sequence of numbers contains a unique mode if it has only one mode.
 *
 * A sequence of numbers seq of size 5 contains a unique middle mode if the middle element
 * (seq[2]) is a unique mode.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencesWithMiddleMode = function(nums) {
  const MOD = 1e9 + 7;
  const HALF = (MOD + 1) / 2;
  const [compressedNums, uniqueCount] = compress(nums);
  const totalCounts = new Array(uniqueCount).fill(0);
  compressedNums.forEach(id => totalCounts[id]++);

  const result = countValid(compressedNums, totalCounts, true);
  compressedNums.reverse();

  return add(result, countValid(compressedNums, totalCounts, false));

  function mul(x, y) {
    return Number((BigInt(x) * BigInt(y)) % BigInt(MOD));
  }

  function add(x, y) {
    return (x + y) % MOD;
  }

  function sub(x, y) {
    return (x - y + MOD) % MOD;
  }

  function choose2(n) {
    return mul(mul(n, n - 1), HALF);
  }

  function compress(arr) {
    const valueMap = new Map();
    let nextId = 0;
    arr.forEach(val => !valueMap.has(val) && valueMap.set(val, nextId++));
    return [arr.map(val => valueMap.get(val)), nextId];
  }

  function countValid(sequence, counts, includeEqual) {
    const length = sequence.length;
    const seenCounts = new Array(uniqueCount).fill(0);
    let result = 0;
    let squareSum = 0;
    let weightedSum = 0;
    let weightedSquareSum = 0;

    counts.forEach(count => squareSum = add(squareSum, mul(count, count)));

    for (let pos = 0; pos < length; pos++) {
      const valueId = sequence[pos];
      let remaining = counts[valueId] - seenCounts[valueId];
      const newSquareSum = sub(squareSum, mul(remaining, remaining));
      const newWeightedSum = sub(weightedSum, mul(remaining, seenCounts[valueId]));
      const newWeightedSquareSum = sub(
        weightedSquareSum,
        mul(mul(remaining, remaining), seenCounts[valueId])
      );
      const suffixSize = length - pos - remaining;
      const prefixSize = pos - seenCounts[valueId];

      let contribution = mul(sub(mul(suffixSize, suffixSize), newSquareSum), prefixSize);
      contribution = sub(contribution, mul(mul(2, suffixSize), newWeightedSum));
      contribution = add(contribution, mul(2, newWeightedSquareSum));
      contribution = mul(contribution, mul(seenCounts[valueId], HALF));
      result = add(result, contribution);
      result = add(result, mul(choose2(seenCounts[valueId]), choose2(suffixSize)));

      remaining--;
      result = add(result, mul(choose2(seenCounts[valueId]), mul(remaining, suffixSize)));

      if (includeEqual) {
        result = add(result, mul(mul(seenCounts[valueId], prefixSize), mul(remaining, suffixSize)));
        result = add(result, mul(choose2(seenCounts[valueId]), choose2(remaining)));
      }

      seenCounts[valueId]++;
      squareSum = add(newSquareSum, mul(remaining, remaining));
      weightedSum = add(newWeightedSum, mul(remaining, seenCounts[valueId]));
      weightedSquareSum = add(
        newWeightedSquareSum,
        mul(mul(remaining, remaining), seenCounts[valueId])
      );
    }

    return result;
  }
};
