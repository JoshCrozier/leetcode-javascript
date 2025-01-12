/**
 * 394. Decode String
 * https://leetcode.com/problems/decode-string/
 * Difficulty: Medium
 *
 * Given an encoded string, return its decoded string.
 *
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square
 * brackets is being repeated exactly k times. Note that k is guaranteed to be a
 * positive integer.
 *
 * You may assume that the input string is always valid; there are no extra white spaces,
 * square brackets are well-formed, etc. Furthermore, you may assume that the original
 * data does not contain any digits and that digits are only for those repeat numbers, k.
 * For example, there will not be input like 3a or 2[4].
 *
 * The test cases are generated so that the length of the output will never exceed 105.
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];
  let result = '';
  let decoder = 0;

  for (const c of s) {
    if (!isNaN(c) && Number(c) >= 0 && Number(c) <= 9) {
      decoder = Number(c) + decoder * 10;
    } else if (c === '[') {
      stack.push([result, decoder]);
      result = '';
      decoder = 0;
    } else if (c === ']') {
      const [previous, count] = stack.pop();
      result = previous + result.repeat(count);
    } else {
      result += c;
    }
  }

  return result;
};
