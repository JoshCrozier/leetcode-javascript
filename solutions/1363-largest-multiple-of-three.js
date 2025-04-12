/**
 * 1363. Largest Multiple of Three
 * https://leetcode.com/problems/largest-multiple-of-three/
 * Difficulty: Hard
 *
 * Given an array of digits digits, return the largest multiple of three that can be formed by
 * concatenating some of the given digits in any order. If there is no answer return an empty
 * string.
 *
 * Since the answer may not fit in an integer data type, return the answer as a string. Note
 * that the returning answer must not contain unnecessary leading zeros.
 */

/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
  const counts = new Array(10).fill(0);
  let sum = 0;
  for (const digit of digits) {
    counts[digit]++;
    sum += digit;
  }

  const remainder = sum % 3;
  if (remainder === 0) {
    return buildLargestNumber(counts, sum, 0);
  }

  const sortedDigits = digits.slice().sort((a, b) => a - b);
  for (const digit of sortedDigits) {
    if (digit % 3 === remainder) {
      counts[digit]--;
      return buildLargestNumber(counts, sum - digit, 0);
    }
  }

  for (let i = 0; i < sortedDigits.length; i++) {
    for (let j = i + 1; j < sortedDigits.length; j++) {
      if ((sortedDigits[i] + sortedDigits[j]) % 3 === remainder) {
        counts[sortedDigits[i]]--;
        counts[sortedDigits[j]]--;
        return buildLargestNumber(counts, sum - sortedDigits[i] - sortedDigits[j], 0);
      }
    }
  }

  return '';

  function buildLargestNumber(counts, total, modulo) {
    let result = '';
    for (let digit = 9; digit >= 0; digit--) {
      let count = counts[digit];
      while (count > 0 && total >= modulo) {
        result += digit;
        total -= digit;
        count--;
      }
    }
    return result.length > 0 && result[0] === '0' ? '0' : result;
  }
};
