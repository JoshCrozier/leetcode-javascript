/**
 * 3088. Make String Anti-palindrome
 * https://leetcode.com/problems/make-string-anti-palindrome/
 * Difficulty: Hard
 *
 * We call a string s of even length n an anti-palindrome if for each index
 * 0 <= i < n, s[i] != s[n - i - 1].
 *
 * Given a string s, your task is to make s an anti-palindrome by doing any number of
 * operations (including zero).
 *
 * In one operation, you can select two characters from s and swap them.
 *
 * Return the resulting string. If multiple strings meet the conditions, return the
 * lexicographically smallest one. If it can't be made into an anti-palindrome, return "-1".
 */

/**
 * @param {string} s
 * @return {string}
 */
var makeAntiPalindrome = function(s) {
  const n = s.length;
  const result = Array.from(s).sort();
  let leftIndex = Math.floor((n + 1) / 2);
  let rightIndex = Math.floor((n + 1) / 2);

  while (rightIndex < n && result[rightIndex] === result[leftIndex]) {
    rightIndex++;
  }
  while (result[leftIndex] === result[n - leftIndex - 1]) {
    if (rightIndex === n) {
      return '-1';
    }
    [result[leftIndex], result[rightIndex]] = [result[rightIndex], result[leftIndex]];
    leftIndex++;
    rightIndex++;
  }

  return result.join('');
};
