/**
 * 1177. Can Make Palindrome from Substring
 * https://leetcode.com/problems/can-make-palindrome-from-substring/
 * Difficulty: Medium
 *
 * You are given a string s and array queries where queries[i] = [lefti, righti, ki]. We may
 * rearrange the substring s[lefti...righti] for each query and then choose up to ki of them
 * to replace with any lowercase English letter.
 *
 * If the substring is possible to be a palindrome string after the operations above, the
 * result of the query is true. Otherwise, the result is false.
 *
 * Return a boolean array answer where answer[i] is the result of the ith query queries[i].
 *
 * Note that each letter is counted individually for replacement, so if, for example
 * s[lefti...righti] = "aaa", and ki = 2, we can only replace two of the letters. Also, note
 * that no query modifies the initial string s.
 */

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function(s, queries) {
  const prefixCounts = new Array(s.length + 1).fill().map(() => new Array(26).fill(0));

  for (let i = 0; i < s.length; i++) {
    prefixCounts[i + 1] = [...prefixCounts[i]];
    prefixCounts[i + 1][s.charCodeAt(i) - 97]++;
  }

  const getOddCount = (left, right) => {
    let odds = 0;
    for (let j = 0; j < 26; j++) {
      const count = prefixCounts[right + 1][j] - prefixCounts[left][j];
      odds += count % 2;
    }
    return odds;
  };

  const result = queries.map(([left, right, k]) => {
    const oddCount = getOddCount(left, right);
    return oddCount <= 2 * k + 1;
  });

  return result;
};
