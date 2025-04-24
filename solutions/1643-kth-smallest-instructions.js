/**
 * 1643. Kth Smallest Instructions
 * https://leetcode.com/problems/kth-smallest-instructions/
 * Difficulty: Hard
 *
 * Bob is standing at cell (0, 0), and he wants to reach destination: (row, column). He can only
 * travel right and down. You are going to help Bob by providing instructions for him to reach
 * destination.
 *
 * The instructions are represented as a string, where each character is either:
 * - 'H', meaning move horizontally (go right), or
 * - 'V', meaning move vertically (go down).
 *
 * Multiple instructions will lead Bob to destination. For example, if destination is (2, 3),
 * both "HHHVV" and "HVHVH" are valid instructions.
 *
 * However, Bob is very picky. Bob has a lucky number k, and he wants the kth lexicographically
 * smallest instructions that will lead him to destination. k is 1-indexed.
 *
 * Given an integer array destination and an integer k, return the kth lexicographically
 * smallest instructions that will take Bob to destination.
 */

/**
 * @param {number[]} destination
 * @param {number} k
 * @return {string}
 */
var kthSmallestPath = function(destination, k) {
  let verticalMoves = destination[0];
  let horizontalMoves = destination[1];
  const totalMoves = verticalMoves + horizontalMoves;
  let path = '';

  for (let i = 0; i < totalMoves; i++) {
    if (horizontalMoves === 0) {
      path += 'V';
      verticalMoves--;
      continue;
    }
    const combinations = calculateCombinations(
      verticalMoves + horizontalMoves - 1,
      horizontalMoves - 1
    );
    if (k <= combinations) {
      path += 'H';
      horizontalMoves--;
    } else {
      path += 'V';
      verticalMoves--;
      k -= combinations;
    }
  }

  return path;
};

function calculateCombinations(n, r) {
  if (r < 0 || r > n) return 0;
  let result = 1;
  for (let i = 1; i <= r; i++) {
    result = result * (n - i + 1) / i;
  }
  return Math.floor(result);
}
