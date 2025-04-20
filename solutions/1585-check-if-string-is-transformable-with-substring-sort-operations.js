/**
 * 1585. Check If String Is Transformable With Substring Sort Operations
 * https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/
 * Difficulty: Hard
 *
 * Given two strings s and t, transform string s into string t using the following operation any
 * number of times:
 * - Choose a non-empty substring in s and sort it in place so the characters are in ascending
 *   order.
 *   - For example, applying the operation on the underlined substring in "14234" results
 *     in "12344".
 *
 * Return true if it is possible to transform s into t. Otherwise, return false.
 *
 * A substring is a contiguous sequence of characters within a string.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isTransformable = function(source, target) {
  const digitPositions = Array.from({ length: 10 }, () => []);
  for (let index = 0; index < source.length; index++) {
    digitPositions[source[index]].push(index);
  }

  const currentIndices = new Array(10).fill(0);

  for (const digit of target) {
    const digitValue = parseInt(digit, 10);
    if (currentIndices[digitValue] >= digitPositions[digitValue].length) {
      return false;
    }

    const position = digitPositions[digitValue][currentIndices[digitValue]];
    for (let smallerDigit = 0; smallerDigit < digitValue; smallerDigit++) {
      if (currentIndices[smallerDigit] < digitPositions[smallerDigit].length
          && digitPositions[smallerDigit][currentIndices[smallerDigit]] < position) {
        return false;
      }
    }

    currentIndices[digitValue]++;
  }

  return true;
};
