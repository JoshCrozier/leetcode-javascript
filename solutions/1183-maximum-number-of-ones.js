/**
 * 1183. Maximum Number of Ones
 * https://leetcode.com/problems/maximum-number-of-ones/
 * Difficulty: Hard
 *
 * Consider a matrix M with dimensions width * height, such that every cell has value 0 or 1,
 * and any square sub-matrix of M of size sideLength * sideLength has at most maxOnes ones.
 *
 * Return the maximum possible number of ones that the matrix M can have.
 */

/**
 * @param {number} width
 * @param {number} height
 * @param {number} sideLength
 * @param {number} maxOnes
 * @return {number}
 */
var maximumNumberOfOnes = function(width, height, sideLength, maxOnes) {
  const frequencies = [];

  for (let i = 0; i < sideLength; i++) {
    for (let j = 0; j < sideLength; j++) {
      const rowCount = Math.ceil((height - i) / sideLength);
      const colCount = Math.ceil((width - j) / sideLength);
      frequencies.push(rowCount * colCount);
    }
  }

  frequencies.sort((a, b) => b - a);

  let result = 0;
  for (let i = 0; i < maxOnes; i++) {
    result += frequencies[i];
  }

  return result;
};
