/**
 * 2549. Count Distinct Numbers on Board
 * https://leetcode.com/problems/count-distinct-numbers-on-board/
 * Difficulty: Easy
 *
 * You are given a positive integer n, that is initially placed on a board. Every day, for
 * 109 days, you perform the following procedure:
 * - For each number x present on the board, find all numbers 1 <= i <= n such that x % i == 1.
 * - Then, place those numbers on the board.
 *
 * Return the number of distinct integers present on the board after 109 days have elapsed.
 *
 * Note:
 * - Once a number is placed on the board, it will remain on it until the end.
 * - % stands for the modulo operation. For example, 14 % 3 is 2.
 */

/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function(n) {
  return n === 1 ? 1 : n - 1;
};
