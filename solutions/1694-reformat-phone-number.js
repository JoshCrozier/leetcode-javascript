/**
 * 1694. Reformat Phone Number
 * https://leetcode.com/problems/reformat-phone-number/
 * Difficulty: Easy
 *
 * You are given a phone number as a string number. number consists of digits, spaces ' ',
 * and/or dashes '-'.
 *
 * You would like to reformat the phone number in a certain manner. Firstly, remove all spaces
 * and dashes. Then, group the digits from left to right into blocks of length 3 until there
 * are 4 or fewer digits. The final digits are then grouped as follows:
 * - 2 digits: A single block of length 2.
 * - 3 digits: A single block of length 3.
 * - 4 digits: Two blocks of length 2 each.
 *
 * The blocks are then joined by dashes. Notice that the reformatting process should never produce
 * any blocks of length 1 and produce at most two blocks of length 2.
 *
 * Return the phone number after formatting.
 */

/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
  const digits = number.replace(/[^0-9]/g, '');
  const blocks = [];
  let i = 0;

  while (i < digits.length) {
    const remaining = digits.length - i;
    if (remaining > 4) {
      blocks.push(digits.slice(i, i + 3));
      i += 3;
    } else if (remaining === 4) {
      blocks.push(digits.slice(i, i + 2), digits.slice(i + 2));
      break;
    } else if (remaining === 2 || remaining === 3) {
      blocks.push(digits.slice(i));
      break;
    }
  }

  return blocks.join('-');
};
