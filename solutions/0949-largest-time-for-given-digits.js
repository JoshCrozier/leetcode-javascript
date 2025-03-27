/**
 * 949. Largest Time for Given Digits
 * https://leetcode.com/problems/largest-time-for-given-digits/
 * Difficulty: Medium
 *
 * Given an array arr of 4 digits, find the latest 24-hour time that can be made using
 * each digit exactly once.
 *
 * 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between
 * 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.
 *
 * Return the latest 24-hour time in "HH:MM" format. If no valid time can be made, return
 * an empty string.
 */

/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function(arr) {
  let result = '';
  helper(arr, new Array(4).fill(false), []);
  return result;

  function helper(digits, used, current) {
    if (current.length === 4) {
      const hours = parseInt(current.slice(0, 2).join(''));
      const minutes = parseInt(current.slice(2).join(''));
      if (hours <= 23 && minutes <= 59) {
        const time = `${current[0]}${current[1]}:${current[2]}${current[3]}`;
        if (time > result) result = time;
      }
      return;
    }

    for (let i = 0; i < digits.length; i++) {
      if (!used[i]) {
        used[i] = true;
        current.push(digits[i]);
        helper(digits, used, current);
        current.pop();
        used[i] = false;
      }
    }
  }
};
