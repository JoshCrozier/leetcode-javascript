/**
 * 1830. Minimum Number of Operations to Make String Sorted
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/
 * Difficulty: Hard
 *
 * You are given a string s (0-indexed). You are asked to perform the following operation on
 * s until you get a sorted string:
 * 1. Find the largest index i such that 1 <= i < s.length and s[i] < s[i - 1].
 * 2. Find the largest index j such that i <= j < s.length and s[k] < s[i - 1] for all the
 *    possible values of k in the range [i, j] inclusive.
 * 3. Swap the two characters at indices i - 1 and j.
 * 4. Reverse the suffix starting at index i.
 *
 * Return the number of operations needed to make the string sorted. Since the answer can be too
 * large, return it modulo 109 + 7.
 */

/**
 * @param {string} s
 * @return {number}
 */
var makeStringSorted = function(s) {
  const MOD = 1e9 + 7;
  const length = s.length;
  const factorials = new Array(length + 1).fill(1n);
  const inverses = new Array(length + 1).fill(1n);

  for (let i = 2; i <= length; i++) {
    factorials[i] = (factorials[i - 1] * BigInt(i)) % BigInt(MOD);
  }

  for (let i = 1; i <= length; i++) {
    inverses[i] = modInverse(factorials[i], BigInt(MOD));
  }

  let result = 0n;
  const charCounts = new Array(26).fill(0);
  for (let i = length - 1; i >= 0; i--) {
    const charIndex = s.charCodeAt(i) - 97;
    charCounts[charIndex]++;
    let smallerChars = 0;
    for (let j = 0; j < charIndex; j++) {
      smallerChars += charCounts[j];
    }
    let totalPermutations = factorials[length - i - 1];
    for (const count of charCounts) {
      totalPermutations = (totalPermutations * inverses[count]) % BigInt(MOD);
    }
    result = (result + BigInt(smallerChars) * totalPermutations) % BigInt(MOD);
  }

  return Number(result);

  function modInverse(a, m) {
    const m0 = m;
    let q;
    let x0 = 0n;
    let x1 = 1n;
    while (a > 1n) {
      q = a / m;
      [a, m] = [m, a % m];
      [x0, x1] = [x1 - q * x0, x0];
    }
    return x1 < 0n ? x1 + m0 : x1;
  }

  function combinations(n, k) {
    if (k < 0 || k > n) return 0n;
    return (factorials[n] * inverses[k] % BigInt(MOD)) * inverses[n - k] % BigInt(MOD);
  }
};
