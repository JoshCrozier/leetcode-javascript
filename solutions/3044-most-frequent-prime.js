/**
 * 3044. Most Frequent Prime
 * https://leetcode.com/problems/most-frequent-prime/
 * Difficulty: Medium
 *
 * You are given a m x n 0-indexed 2D matrix mat. From every cell, you can create numbers
 * in the following way:
 * - There could be at most 8 paths from the cells namely: east, south-east, south, south-west,
 *   west, north-west, north, and north-east.
 * - Select a path from them and append digits in this path to the number being formed by
 *   traveling in this direction.
 * - Note that numbers are generated at every step, for example, if the digits along the path
 *   are 1, 9, 1, then there will be three numbers generated along the way: 1, 19, 191.
 *
 * Return the most frequent prime number greater than 10 out of all the numbers created by
 * traversing the matrix or -1 if no such prime number exists. If there are multiple prime
 * numbers with the highest frequency, then return the largest among them.
 *
 * Note: It is invalid to change the direction during the move.
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
var mostFrequentPrime = function(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const frequency = new Map();
  const directions = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];

  const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (const [dx, dy] of directions) {
        let x = i;
        let y = j;
        let num = 0;
        while (x >= 0 && x < m && y >= 0 && y < n) {
          num = num * 10 + mat[x][y];
          if (num > 10 && isPrime(num)) {
            frequency.set(num, (frequency.get(num) || 0) + 1);
          }
          x += dx;
          y += dy;
        }
      }
    }
  }

  let maxFreq = 0;
  let result = -1;
  for (const [num, freq] of frequency) {
    if (freq > maxFreq || (freq === maxFreq && num > result)) {
      maxFreq = freq;
      result = num;
    }
  }

  return result;
};
