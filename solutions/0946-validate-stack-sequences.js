/**
 * 946. Validate Stack Sequences
 * https://leetcode.com/problems/validate-stack-sequences/
 * Difficulty: Medium
 *
 * Given two integer arrays pushed and popped each with distinct values, return true if this could
 * have been the result of a sequence of push and pop operations on an initially empty stack, or
 * false otherwise.
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  const stack = [];
  let popIndex = 0;

  for (const number of pushed) {
    stack.push(number);

    while (stack.length && stack[stack.length - 1] === popped[popIndex]) {
      stack.pop();
      popIndex++;
    }
  }

  return stack.length === 0;
};
