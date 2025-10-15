/**
 * 3539. Find Sum of Array Product of Magical Sequences
 * https://leetcode.com/problems/find-sum-of-array-product-of-magical-sequences/
 * Difficulty: Hard
 *
 * You are given two integers, m and k, and an integer array nums.
 *
 * A sequence of integers seq is called magical if:
 * - seq has a size of m.
 * - 0 <= seq[i] < nums.length
 * - The binary representation of 2seq[0] + 2seq[1] + ... + 2seq[m - 1] has k set bits.
 *
 * The array product of this sequence is defined as prod(seq) = (nums[seq[0]]
 * * nums[seq[1]] * ... * nums[seq[m - 1]]).
 *
 * Return the sum of the array products for all valid magical sequences.
 *
 * Since the answer may be large, return it modulo 109 + 7.
 *
 * A set bit refers to a bit in the binary representation of a number that has a value of 1.
 */

/**
 * @param {number} m
 * @param {number} k
 * @param {number[]} nums
 * @return {number}
 */
var magicalSum = function(m, k, nums) {
  const MOD = 1000000007n;
  const map = new Map();
  const n = nums.length;

  function bitCount(num) {
    let count = 0;
    while (num > 0) {
      count += num & 1;
      num >>= 1;
    }
    return count;
  }

  function modPow(base, exp) {
    let result = 1n;
    base = BigInt(base) % MOD;
    let e = BigInt(exp);
    while (e > 0n) {
      if (e & 1n) result = (result * base) % MOD;
      base = (base * base) % MOD;
      e >>= 1n;
    }
    return result;
  }

  const factorialCache = [1n];
  function factorial(n) {
    while (factorialCache.length <= n) {
      factorialCache.push(
        factorialCache[factorialCache.length - 1] * BigInt(factorialCache.length)
      );
    }
    return factorialCache[n];
  }

  function comb(n, r) {
    if (r > n || r < 0) return 0n;
    if (r === 0 || r === n) return 1n;
    return factorial(n) / (factorial(r) * factorial(n - r));
  }

  function dfs(remaining, oddNeeded, index, carry) {
    if (remaining < 0 || oddNeeded < 0 || remaining + bitCount(carry) < oddNeeded) {
      return 0n;
    }
    if (remaining === 0) {
      return bitCount(carry) === oddNeeded ? 1n : 0n;
    }
    if (index >= n) {
      return 0n;
    }

    const key = `${remaining},${oddNeeded},${index},${carry}`;
    if (map.has(key)) return map.get(key);

    let result = 0n;
    for (let take = 0; take <= remaining; take++) {
      const ways = (comb(remaining, take) * modPow(nums[index], take)) % MOD;
      const newCarry = carry + take;
      const contribution = dfs(
        remaining - take, oddNeeded - (newCarry % 2),
        index + 1, Math.floor(newCarry / 2),
      );
      result = (result + ways * contribution) % MOD;
    }

    map.set(key, result);
    return result;
  }

  return Number(dfs(m, k, 0, 0));
};
