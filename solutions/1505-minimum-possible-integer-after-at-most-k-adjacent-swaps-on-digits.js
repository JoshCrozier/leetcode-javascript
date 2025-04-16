/**
 * 1505. Minimum Possible Integer After at Most K Adjacent Swaps On Digits
 * https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/
 * Difficulty: Hard
 *
 * You are given a string num representing the digits of a very large integer and an integer k. You
 * are allowed to swap any two adjacent digits of the integer at most k times.
 *
 * Return the minimum integer you can obtain also as a string.
 */

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var minInteger = function(num, k) {
  const digits = num.split('');
  const n = digits.length;
  const fenwick = new Array(n + 1).fill(0);
  const digitQueues = Array.from({ length: 10 }, () => []);
  const result = [];

  for (let i = 0; i < n; i++) {
    digitQueues[digits[i]].push(i);
  }

  for (let i = 0; i < n; i++) {
    for (let digit = 0; digit <= 9; digit++) {
      if (digitQueues[digit].length === 0) continue;
      const pos = digitQueues[digit][0];
      const swapsNeeded = pos - fetchValue(pos);
      if (swapsNeeded <= k) {
        k -= swapsNeeded;
        result.push(digit);
        update(pos);
        digitQueues[digit].shift();
        break;
      }
    }
  }

  return result.join('');

  function update(index) {
    for (let i = index + 1; i <= n; i += i & -i) {
      fenwick[i]++;
    }
  }

  function fetchValue(index) {
    let sum = 0;
    for (let i = index + 1; i > 0; i -= i & -i) {
      sum += fenwick[i];
    }
    return sum;
  }
};
