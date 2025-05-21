/**
 * 2380. Time Needed to Rearrange a Binary String
 * https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/
 * Difficulty: Medium
 *
 * You are given a binary string s. In one second, all occurrences of "01" are simultaneously
 * replaced with "10". This process repeats until no occurrences of "01" exist.
 *
 * Return the number of seconds needed to complete this process.
 */

/**
 * @param {string} s
 * @return {number}
 */
var secondsToRemoveOccurrences = function(s) {
  const binary = s.split('');
  let result = 0;

  while (binary.join('').includes('01')) {
    for (let i = 0; i < binary.length - 1; i++) {
      if (binary[i] === '0' && binary[i + 1] === '1') {
        binary[i] = '1';
        binary[i + 1] = '0';
        i++;
      }
    }
    result++;
  }

  return result;
};
