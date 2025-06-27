/**
 * 1067. Digit Count in Range
 * https://leetcode.com/problems/digit-count-in-range/
 * Difficulty: Hard
 *
 * Given a single-digit integer d and two integers low and high, return the number of times
 * that d occurs as a digit in all integers in the inclusive range [low, high].
 */

/**
 * @param {number} d
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var digitsCount = function(d, low, high) {
  return countDigits(high) - countDigits(low - 1);

  function countDigits(num) {
    if (num < 0) return 0;

    const str = num.toString();
    const n = str.length;
    let count = 0;

    for (let pos = 0; pos < n; pos++) {
      const left = pos > 0 ? parseInt(str.substring(0, pos)) : 0;
      const current = parseInt(str[pos]);
      const right = pos < n - 1 ? parseInt(str.substring(pos + 1)) : 0;
      const rightLength = n - pos - 1;
      const rightPower = Math.pow(10, rightLength);

      if (d === 0) {
        if (pos === 0) {
          continue;
        }

        if (current > d) {
          count += (left - 1) * rightPower + rightPower;
        } else if (current === d) {
          count += (left - 1) * rightPower + right + 1;
        } else {
          if (left > 0) {
            count += (left - 1) * rightPower + rightPower;
          }
        }
      } else {
        if (current > d) {
          count += (left + 1) * rightPower;
        } else if (current === d) {
          count += left * rightPower + right + 1;
        } else {
          count += left * rightPower;
        }
      }
    }

    return count;
  }
};
