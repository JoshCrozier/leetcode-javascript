/**
 * 3024. Type of Triangle
 * https://leetcode.com/problems/type-of-triangle/
 * Difficulty: Easy
 *
 * You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.
 * - A triangle is called equilateral if it has all sides of equal length.
 * - A triangle is called isosceles if it has exactly two sides of equal length.
 * - A triangle is called scalene if all its sides are of different lengths.
 *
 * Return a string representing the type of triangle that can be formed or "none" if it cannot
 * form a triangle.
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
  const [sideA, sideB, sideC] = nums.sort((a, b) => a - b);

  if (sideA + sideB <= sideC) return 'none';
  if (sideA === sideB && sideB === sideC) return 'equilateral';
  if (sideA === sideB || sideB === sideC) return 'isosceles';

  return 'scalene';
};
