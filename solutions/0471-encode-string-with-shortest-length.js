/**
 * 471. Encode String with Shortest Length
 * https://leetcode.com/problems/encode-string-with-shortest-length/
 * Difficulty: Hard
 *
 * Given a string s, encode the string such that its encoded length is the shortest.
 *
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets
 * is being repeated exactly k times. k should be a positive integer.
 *
 * If an encoding process does not make the string shorter, then do not encode it. If there are
 * several solutions, return any of them.
 */

/**
 * @param {string} s
 * @return {string}
 */
var encode = function(s) {
  const n = s.length;
  const dp = Array.from({ length: n }, () => new Array(n).fill(''));

  for (let len = 1; len <= n; len++) {
    for (let start = 0; start + len <= n; start++) {
      const end = start + len - 1;
      const substr = s.slice(start, end + 1);

      dp[start][end] = substr;

      for (let k = 1; k < len; k++) {
        const left = dp[start][start + k - 1];
        const right = dp[start + k][end];
        const combined = left + right;
        if (combined.length < dp[start][end].length) {
          dp[start][end] = combined;
        }
      }

      let repeat = 1;
      const patternLen = len;
      while (repeat * patternLen <= n && s.slice(start, start + patternLen).repeat(repeat)
        === s.slice(start, start + repeat * patternLen)) {
        const encoded = `${repeat}[${dp[start][start + patternLen - 1]}]`;
        if (encoded.length < dp[start][end].length) {
          dp[start][end] = encoded;
        }
        repeat++;
      }

      for (let k = 1; k < len; k++) {
        if (len % k === 0) {
          const pattern = s.slice(start, start + k);
          if (pattern.repeat(len / k) === substr) {
            const encoded = `${len / k}[${dp[start][start + k - 1]}]`;
            if (encoded.length < dp[start][end].length) {
              dp[start][end] = encoded;
            }
          }
        }
      }
    }
  }

  return dp[0][n - 1];
};
