/**
 * 1542. Find Longest Awesome Substring
 * https://leetcode.com/problems/find-longest-awesome-substring/
 * Difficulty: Hard
 *
 * You are given a string s. An awesome substring is a non-empty substring of s such that we
 * can make any number of swaps in order to make it a palindrome.
 *
 * Return the length of the maximum length awesome substring of s.
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestAwesome = function(s) {
  let result = 0;
  let prefixMask = 0;
  const digitMasks = new Map();
  digitMasks.set(0, -1);

  for (let i = 0; i < s.length; i++) {
    const digit = s.charCodeAt(i) - '0'.charCodeAt(0);
    prefixMask ^= (1 << digit);

    if (digitMasks.has(prefixMask)) {
      result = Math.max(result, i - digitMasks.get(prefixMask));
    } else {
      digitMasks.set(prefixMask, i);
    }

    for (let j = 0; j < 10; j++) {
      const oddMask = prefixMask ^ (1 << j);
      if (digitMasks.has(oddMask)) {
        result = Math.max(result, i - digitMasks.get(oddMask));
      }
    }
  }

  return result;
};
