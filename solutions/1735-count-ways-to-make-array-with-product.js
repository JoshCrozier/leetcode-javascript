/**
 * 1735. Count Ways to Make Array With Product
 * https://leetcode.com/problems/count-ways-to-make-array-with-product/
 * Difficulty: Hard
 *
 * You are given a 2D integer array, queries. For each queries[i], where queries[i] = [ni, ki],
 * find the number of different ways you can place positive integers into an array of size ni
 * such that the product of the integers is ki. As the number of ways may be too large, the
 * answer to the ith query is the number of ways modulo 109 + 7.
 *
 * Return an integer array answer where answer.length == queries.length, and answer[i] is the
 * answer to the ith query.
 */

/**
 * @param {number[][]} queries
 * @return {number[]}
 */
var waysToFillArray = function(queries) {
  const MOD = 1000000007n;
  const MAX_N = 20000;
  const factorial = new Array(MAX_N + 1).fill(1n);
  const inverse = new Array(MAX_N + 1).fill(1n);

  for (let i = 1; i <= MAX_N; i++) {
    factorial[i] = (factorial[i - 1] * BigInt(i)) % MOD;
  }
  inverse[MAX_N] = BigInt(modInverse(Number(factorial[MAX_N] % MOD), Number(MOD)));
  for (let i = MAX_N - 1; i >= 0; i--) {
    inverse[i] = (inverse[i + 1] * BigInt(i + 1)) % MOD;
  }

  const result = [];
  for (const [size, product] of queries) {
    if (product === 1) {
      result.push(1);
      continue;
    }
    const factors = getPrimeFactors(product);
    let ways = 1n;
    for (const count of factors.values()) {
      const n = size + count - 1;
      ways = (ways * BigInt(combinations(n, count))) % MOD;
    }
    result.push(Number(ways));
  }

  return result;

  function modInverse(a, m) {
    const m0 = m;
    let t;
    let q;
    let x0 = 0;
    let x1 = 1;
    while (a > 1) {
      q = Math.floor(a / m);
      t = m;
      m = a % m;
      a = t;
      t = x0;
      x0 = x1 - q * x0;
      x1 = t;
    }
    return x1 < 0 ? x1 + m0 : x1;
  }

  function combinations(n, k) {
    if (k < 0 || k > n || n < 0 || n > MAX_N || n - k < 0) return 0;
    const result = (factorial[n] * inverse[k] * inverse[n - k]) % MOD;
    return Number(result);
  }

  function getPrimeFactors(num) {
    const factors = new Map();
    for (let i = 2; i * i <= num; i++) {
      while (num % i === 0) {
        factors.set(i, (factors.get(i) || 0) + 1);
        num /= i;
      }
    }
    if (num > 1) {
      factors.set(num, (factors.get(num) || 0) + 1);
    }
    return factors;
  }
};
