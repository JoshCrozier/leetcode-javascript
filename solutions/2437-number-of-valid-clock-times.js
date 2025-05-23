/**
 * 2437. Number of Valid Clock Times
 * https://leetcode.com/problems/number-of-valid-clock-times/
 * Difficulty: Easy
 *
 * You are given a string of length 5 called time, representing the current time on a digital
 * clock in the format "hh:mm". The earliest possible time is "00:00" and the latest possible
 * time is "23:59".
 *
 * In the string time, the digits represented by the ? symbol are unknown, and must be replaced
 * with a digit from 0 to 9.
 *
 * Return an integer answer, the number of valid clock times that can be created by replacing
 * every ? with a digit from 0 to 9.
 */

/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
  let hourChoices = 1;
  let minuteChoices = 1;

  if (time[0] === '?' && time[1] === '?') {
    hourChoices = 24;
  } else if (time[0] === '?') {
    hourChoices = time[1] <= '3' ? 3 : 2;
  } else if (time[1] === '?') {
    hourChoices = time[0] === '2' ? 4 : 10;
  }

  if (time[3] === '?' && time[4] === '?') {
    minuteChoices = 60;
  } else if (time[3] === '?') {
    minuteChoices = 6;
  } else if (time[4] === '?') {
    minuteChoices = 10;
  }

  return hourChoices * minuteChoices;
};
