/**
 * 681. Next Closest Time
 * https://leetcode.com/problems/next-closest-time/
 * Difficulty: Medium
 *
 * Given a time represented in the format "HH:MM", form the next closest time by reusing the
 * current digits. There is no limit on how many times a digit can be reused.
 *
 * You may assume the given input string is always valid. For example, "01:34", "12:09" are
 * all valid. "1:34", "12:9" are all invalid.
 */

/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
  const digits = new Set(time.replace(':', ''));
  const sortedDigits = [...digits].sort();

  return generateNextTime(time);

  function isValidTime(h, m) {
    return h < 24 && m < 60;
  }

  function generateNextTime(timeStr) {
    const [hours, minutes] = timeStr.split(':');

    for (let i = 3; i >= 0; i--) {
      const pos = i < 2 ? i : i + 1;
      const currentDigit = timeStr[pos];

      for (const digit of sortedDigits) {
        if (digit > currentDigit) {
          const newTime = timeStr.substring(0, pos) + digit + timeStr.substring(pos + 1);
          const [h, m] = newTime.split(':').map(Number);
          if (isValidTime(h, m)) {
            return newTime;
          }
        }
      }

      const newTime = timeStr.substring(0, pos) + sortedDigits[0] + timeStr.substring(pos + 1);
      timeStr = newTime;
    }

    return sortedDigits[0].repeat(2) + ':' + sortedDigits[0].repeat(2);
  }
};
