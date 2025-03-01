/**
 * 470. Implement Rand10() Using Rand7()
 * https://leetcode.com/problems/implement-rand10-using-rand7/
 * Difficulty: Medium
 *
 * Given the API rand7() that generates a uniform random integer in the range [1, 7],
 * write a function rand10() that generates a uniform random integer in the range [1, 10].
 * You can only call the API rand7(), and you shouldn't call any other API. Please do not
 * use a language's built-in random API.
 *
 * Each test case will have one internal argument n, the number of times that your implemented
 * function rand10() will be called while testing. Note that this is not an argument passed to
 * rand10().
 */

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
  while (true) {
    const n = (rand7() - 1) * 7 + rand7();
    if (n <= 40) {
      return (n % 10) + 1;
    }
  }
};
