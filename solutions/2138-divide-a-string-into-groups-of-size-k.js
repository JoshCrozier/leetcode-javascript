/**
 * 2138. Divide a String Into Groups of Size k
 * https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/
 * Difficulty: Easy
 *
 * A string s can be partitioned into groups of size k using the following procedure:
 * - The first group consists of the first k characters of the string, the second group consists
 *   of the next k characters of the string, and so on. Each element can be a part of exactly one
 *   group.
 * - For the last group, if the string does not have k characters remaining, a character fill is
 *   used to complete the group.
 *
 * Note that the partition is done so that after removing the fill character from the last group
 * (if it exists) and concatenating all the groups in order, the resultant string should be s.
 *
 * Given the string s, the size of each group k and the character fill, return a string array
 * denoting the composition of every group s has been divided into, using the above procedure.
 */

/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
  const paddedString = s + fill.repeat((k - s.length % k) % k);
  const result = [];

  for (let i = 0; i < paddedString.length; i += k) {
    result.push(paddedString.slice(i, i + k));
  }

  return result;
};
