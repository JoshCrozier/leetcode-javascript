/**
 * 1742. Maximum Number of Balls in a Box
 * https://leetcode.com/problems/maximum-number-of-balls-in-a-box/
 * Difficulty: Easy
 *
 * You are working in a ball factory where you have n balls numbered from lowLimit up to
 * highLimit inclusive (i.e., n == highLimit - lowLimit + 1), and an infinite number of
 * boxes numbered from 1 to infinity.
 *
 * Your job at this factory is to put each ball in the box with a number equal to the sum
 * of digits of the ball's number. For example, the ball number 321 will be put in the
 * box number 3 + 2 + 1 = 6 and the ball number 10 will be put in the box number 1 + 0 = 1.
 *
 * Given two integers lowLimit and highLimit, return the number of balls in the box with
 * the most balls.
 */

/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
  const boxCounts = new Map();
  let result = 0;

  for (let ball = lowLimit; ball <= highLimit; ball++) {
    const box = sumDigits(ball);
    const count = (boxCounts.get(box) || 0) + 1;
    boxCounts.set(box, count);
    result = Math.max(result, count);
  }

  return result;

  function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
};
