/**
 * 3535. Unit Conversion II
 * https://leetcode.com/problems/unit-conversion-ii/
 * Difficulty: Medium
 *
 * There are n types of units indexed from 0 to n - 1.
 *
 * You are given a 2D integer array conversions of length n - 1, where
 * conversions[i] = [sourceUniti, targetUniti, conversionFactori]. This indicates
 * that a single unit of type sourceUniti is equivalent to conversionFactori units
 * of type targetUniti.
 *
 * You are also given a 2D integer array queries of length q, where queries[i] = [unitAi, unitBi].
 *
 * Return an array answer of length q where answer[i] is the number of units of type unitBi
 * equivalent to 1 unit of type unitAi, and can be represented as p/q where p and q are coprime.
 * Return each answer[i] as pq-1 modulo 109 + 7, where q-1 represents the multiplicative inverse
 * of q modulo 109 + 7.
 */

/**
 * @param {number[][]} conversions
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryConversions = function(conversions, queries) {
  const n = conversions.length + 1;
  const adj = Array.from({ length: n }, () => []);
  const convMap = new Map();
  for (const [s, t, f] of conversions) {
    adj[s].push(t);
    adj[t].push(s);
    convMap.set(`${s}-${t}`, BigInt(f));
  }
  const MOD = 1000000007n;
  const ratio = new Array(n).fill(0n);
  ratio[0] = 1n;
  const visited = new Array(n).fill(false);
  visited[0] = true;
  const queue = [0];
  let queueIndex = 0;
  while (queueIndex < queue.length) {
    const current = queue[queueIndex++];
    for (const neighbor of adj[current]) {
      if (visited[neighbor]) continue;
      visited[neighbor] = true;
      queue.push(neighbor);
      const forwardKey = `${current}-${neighbor}`;
      if (convMap.has(forwardKey)) {
        const factor = convMap.get(forwardKey);
        ratio[neighbor] = (ratio[current] * factor) % MOD;
      } else {
        const backwardKey = `${neighbor}-${current}`;
        const factor = convMap.get(backwardKey);
        const inverseFactor = modInverse(factor, MOD);
        ratio[neighbor] = (ratio[current] * inverseFactor) % MOD;
      }
    }
  }
  const result = [];
  for (const [unitA, unitB] of queries) {
    const ratioA = ratio[unitA];
    const ratioB = ratio[unitB];
    const inverseRatioA = modInverse(ratioA, MOD);
    const conversion = (ratioB * inverseRatioA) % MOD;
    result.push(Number(conversion));
  }

  return result;

  function modPow(base, exponent, modulus) {
    let result = 1n;
    base %= modulus;
    while (exponent > 0n) {
      if (exponent % 2n === 1n) {
        result = (result * base) % modulus;
      }
      base = (base * base) % modulus;
      exponent /= 2n;
    }
    return result;
  }

  function modInverse(value, modulus) {
    return modPow(value, modulus - 2n, modulus);
  }
};
