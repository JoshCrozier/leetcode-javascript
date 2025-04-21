/**
 * 1604. Alert Using Same Key-Card Three or More Times in a One Hour Period
 * https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/
 * Difficulty: Medium
 *
 * LeetCode company workers use key-cards to unlock office doors. Each time a worker uses their
 * key-card, the security system saves the worker's name and the time when it was used. The system
 * emits an alert if any worker uses the key-card three or more times in a one-hour period.
 *
 * You are given a list of strings keyName and keyTime where [keyName[i], keyTime[i]] corresponds
 * to a person's name and the time when their key-card was used in a single day.
 *
 * Access times are given in the 24-hour time format "HH:MM", such as "23:51" and "09:49".
 *
 * Return a list of unique worker names who received an alert for frequent keycard use. Sort the
 * names in ascending order alphabetically.
 *
 * Notice that "10:00" - "11:00" is considered to be within a one-hour period, while
 * "22:51" - "23:52" is not considered to be within a one-hour period.
 */

/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function(keyName, keyTime) {
  const usageMap = new Map();
  for (let i = 0; i < keyName.length; i++) {
    if (!usageMap.has(keyName[i])) {
      usageMap.set(keyName[i], []);
    }
    usageMap.get(keyName[i]).push(timeToMinutes(keyTime[i]));
  }

  const result = [];
  for (const [name, times] of usageMap) {
    times.sort((a, b) => a - b);
    for (let i = 2; i < times.length; i++) {
      if (times[i] - times[i - 2] <= 60) {
        result.push(name);
        break;
      }
    }
  }

  return result.sort();

  function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }
};
