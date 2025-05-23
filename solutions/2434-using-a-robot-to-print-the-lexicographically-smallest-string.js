/**
 * 2434. Using a Robot to Print the Lexicographically Smallest String
 * https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/
 * Difficulty: Medium
 *
 * You are given a string s and a robot that currently holds an empty string t. Apply one of the
 * following operations until s and t are both empty:
 * - Remove the first character of a string s and give it to the robot. The robot will append
 *   this character to the string t.
 * - Remove the last character of a string t and give it to the robot. The robot will write
 *   this character on paper.
 *
 * Return the lexicographically smallest string that can be written on the paper.
 */

/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(s) {
  const charCount = Array(26).fill(0);
  for (const char of s) {
    charCount[char.charCodeAt(0) - 97]++;
  }

  const stack = [];
  let minCharIndex = 0;
  let result = '';

  for (const char of s) {
    stack.push(char);
    charCount[char.charCodeAt(0) - 97]--;

    while (minCharIndex < 26 && charCount[minCharIndex] === 0) {
      minCharIndex++;
    }

    while (stack.length
      && (minCharIndex === 26 || stack[stack.length - 1].charCodeAt(0) - 97 <= minCharIndex)) {
      result += stack.pop();
    }
  }

  while (stack.length) {
    result += stack.pop();
  }

  return result;
};
