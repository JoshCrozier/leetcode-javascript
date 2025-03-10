/**
 * 3463. Check If Digits Are Equal in String After Operations II
 * https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-ii/
 * Difficulty: Hard
 *
 * You are given a string s consisting of digits. Perform the following operation repeatedly until
 * the string has exactly two digits:
 * - For each pair of consecutive digits in s, starting from the first digit, calculate a new digit
 *   as the sum of the two digits modulo 10.
 * - Replace s with the sequence of newly calculated digits, maintaining the order in which they
 *   are computed.
 *
 * Return true if the final two digits in s are the same; otherwise, return false.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
  const n = s.length;
  const binomialMod2 = (k, n) => (k & n) === k ? 1 : 0;
  const binomialMod5 = (k, n) => {
    if (k > n) return 0;
    let result = 1;
    const pascalMod5 = [
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 2, 1, 0, 0],
      [1, 3, 3, 1, 0],
      [1, 4, 1, 4, 1]
    ];

    while (k > 0 || n > 0) {
      const ki = k % 5;
      const ni = n % 5;
      if (ki > ni) return 0;
      result = (result * pascalMod5[ni][ki]) % 5;
      k = Math.floor(k / 5);
      n = Math.floor(n / 5);
    }
    return result;
  };

  const binomialMod10 = (k, n) => {
    const mod2 = binomialMod2(k, n);
    const mod5 = binomialMod5(k, n);
    for (let i = 0; i < 10; i++) {
      if (i % 2 === mod2 && i % 5 === mod5) return i;
    }
    return 0;
  };

  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i <= n - 2; i++) {
    const coeff = binomialMod10(i, n - 2);
    sum1 = (sum1 + coeff * +s[i]) % 10;
    sum2 = (sum2 + coeff * +s[i + 1]) % 10;
  }

  return sum1 === sum2;
};
