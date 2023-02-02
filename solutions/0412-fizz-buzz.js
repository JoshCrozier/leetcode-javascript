/**
 * 412. Fizz Buzz
 * https://leetcode.com/problems/fizz-buzz/
 * Difficulty: Easy
 *
 * Given an integer n, return a string array answer (1-indexed) where:
 * - answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * - answer[i] == "Fizz" if i is divisible by 3.
 * - answer[i] == "Buzz" if i is divisible by 5.
 * - answer[i] == i (as a string) if none of the above conditions are true.
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  return Array.from(new Array(n), (_, i) => i + 1).map(i =>
    i % 3 === 0 && i % 5 === 0
      ? 'FizzBuzz' : i % 3 === 0 ? 'Fizz' : i % 5 === 0 ? 'Buzz' : String(i)
  );
};
