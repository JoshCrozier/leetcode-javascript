/**
 * 2338. Count the Number of Ideal Arrays
 * https://leetcode.com/problems/count-the-number-of-ideal-arrays/
 * Difficulty: Hard
 *
 * You are given two integers n and maxValue, which are used to describe an ideal array.
 *
 * A 0-indexed integer array arr of length n is considered ideal if the following conditions hold:
 * - Every arr[i] is a value from 1 to maxValue, for 0 <= i < n.
 * - Every arr[i] is divisible by arr[i - 1], for 0 < i < n.
 *
 * Return the number of distinct ideal arrays of length n. Since the answer may be very large,
 * return it modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number} maxValue
 * @return {number}
 */
var idealArrays = function(n, maxValue) {
  const MOD = 1e9 + 7;
  const MAX_N = 10010;
  const MAX_P = 15;

  const c = Array.from({ length: MAX_N + MAX_P }, () =>
    new Array(MAX_P + 1).fill(0)
  );
  const sieve = new Array(MAX_N).fill(0);
  const ps = Array.from({ length: MAX_N }, () => []);

  for (let i = 2; i < MAX_N; i++) {
    if (sieve[i] === 0) {
      for (let j = i; j < MAX_N; j += i) {
        if (sieve[j] === 0) {
          sieve[j] = i;
        }
      }
    }
  }

  for (let i = 2; i < MAX_N; i++) {
    let x = i;
    while (x > 1) {
      const p = sieve[x];
      let cnt = 0;
      while (x % p === 0) {
        x = Math.floor(x / p);
        cnt++;
      }
      ps[i].push(cnt);
    }
  }

  c[0][0] = 1;
  for (let i = 1; i < MAX_N + MAX_P; i++) {
    c[i][0] = 1;
    for (let j = 1; j <= Math.min(i, MAX_P); j++) {
      c[i][j] = (c[i - 1][j] + c[i - 1][j - 1]) % MOD;
    }
  }

  let ans = 0n;
  for (let x = 1; x <= maxValue; x++) {
    let mul = 1n;
    for (const p of ps[x]) {
      mul = (mul * BigInt(c[n + p - 1][p])) % BigInt(MOD);
    }
    ans = (ans + mul) % BigInt(MOD);
  }

  return Number(ans);
};
