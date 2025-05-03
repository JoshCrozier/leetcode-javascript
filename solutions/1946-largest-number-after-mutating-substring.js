/**
 * 1946. Largest Number After Mutating Substring
 * https://leetcode.com/problems/largest-number-after-mutating-substring/
 * Difficulty: Medium
 *
 * You are given a string num, which represents a large integer. You are also given a 0-indexed
 * integer array change of length 10 that maps each digit 0-9 to another digit. More formally,
 * digit d maps to digit change[d].
 *
 * You may choose to mutate a single substring of num. To mutate a substring, replace each digit
 * num[i] with the digit it maps to in change (i.e. replace num[i] with change[num[i]]).
 *
 * Return a string representing the largest possible integer after mutating (or choosing not to)
 * a single substring of num.
 *
 * A substring is a contiguous sequence of characters within the string.
 */

/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 */
var maximumNumber = function(num, change) {
  const digits = num.split('');
  let mutated = false;

  for (let i = 0; i < digits.length; i++) {
    const currentDigit = parseInt(digits[i]);
    const mappedDigit = change[currentDigit];

    if (mappedDigit > currentDigit) {
      digits[i] = mappedDigit.toString();
      mutated = true;
    } else if (mappedDigit < currentDigit && mutated) {
      break;
    }
  }

  return digits.join('');
};
