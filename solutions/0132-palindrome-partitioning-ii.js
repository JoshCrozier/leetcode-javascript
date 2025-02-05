/**
 * 132. Palindrome Partitioning II
 * https://leetcode.com/problems/palindrome-partitioning-ii/
 * Difficulty: Hard
 *
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 *
 * Return the minimum cuts needed for a palindrome partitioning of s.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  const isPalindrome = new Array(s.length).fill().map(() => new Array(s.length).fill(false));
  const partitions = new Array(s.length).fill(0);

  for (let i = 0; i < s.length; i++) {
    let offset = i;
    for (let j = 0; j <= i; j++) {
      if (s[j] === s[i] && (i - j <= 1 || isPalindrome[j + 1][i - 1])) {
        isPalindrome[j][i] = true;
        offset = j === 0 ? 0 : Math.min(offset, partitions[j - 1] + 1);
      }
    }
    partitions[i] = offset;
  }

  return partitions[s.length - 1];
};
