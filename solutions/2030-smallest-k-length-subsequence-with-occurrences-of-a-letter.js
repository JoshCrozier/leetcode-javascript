/**
 * 2030. Smallest K-Length Subsequence With Occurrences of a Letter
 * https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/
 * Difficulty: Hard
 *
 * You are given a string s, an integer k, a letter letter, and an integer repetition.
 *
 * Return the lexicographically smallest subsequence of s of length k that has the letter
 * letter appear at least repetition times. The test cases are generated so that the letter
 * appears in s at least repetition times.
 *
 * A subsequence is a string that can be derived from another string by deleting some or no
 * characters without changing the order of the remaining characters.
 *
 * A string a is lexicographically smaller than a string b if in the first position where a
 * and b differ, string a has a letter that appears earlier in the alphabet than the
 * corresponding letter in b.
 */

/**
 * @param {string} s
 * @param {number} k
 * @param {character} letter
 * @param {number} repetition
 * @return {string}
 */
var smallestSubsequence = function(s, k, letter, repetition) {
  const n = s.length;
  let letterTotal = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === letter) letterTotal++;
  }

  const stack = [];
  let stackLetterCount = 0;
  let remainingCount = letterTotal;

  for (let i = 0; i < n; i++) {
    const char = s[i];

    if (char === letter) {
      remainingCount--;
    }

    while (
      stack.length > 0 && stack[stack.length - 1] > char && stack.length - 1 + (n - i) >= k
      && (stack[stack.length - 1] !== letter || stackLetterCount + remainingCount > repetition)
    ) {
      if (stack[stack.length - 1] === letter) {
        stackLetterCount--;
      }
      stack.pop();
    }

    if (stack.length < k) {
      if (char === letter) {
        stackLetterCount++;
      }

      const neededLetters = repetition - stackLetterCount;
      const remainingPositions = k - stack.length - 1;
      if (char === letter || remainingPositions >= neededLetters) {
        stack.push(char);
      }
    }
  }

  if (stackLetterCount < repetition) {
    let missingLetters = repetition - stackLetterCount;
    const result = [...stack];

    for (let i = k - 1; i >= 0 && missingLetters > 0; i--) {
      if (result[i] !== letter) {
        result[i] = letter;
        missingLetters--;
      }
    }

    return result.join('');
  }

  return stack.join('');
};
