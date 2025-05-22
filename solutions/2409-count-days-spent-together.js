/**
 * 2409. Count Days Spent Together
 * https://leetcode.com/problems/count-days-spent-together/
 * Difficulty: Easy
 *
 * Alice and Bob are traveling to Rome for separate business meetings.
 *
 * You are given 4 strings arriveAlice, leaveAlice, arriveBob, and leaveBob. Alice will be in
 * the city from the dates arriveAlice to leaveAlice (inclusive), while Bob will be in the city
 * from the dates arriveBob to leaveBob (inclusive). Each will be a 5-character string in the
 * format "MM-DD", corresponding to the month and day of the date.
 *
 * Return the total number of days that Alice and Bob are in Rome together.
 *
 * You can assume that all dates occur in the same calendar year, which is not a leap year. Note
 * that the number of days per month can be represented as: [31, 28, 31, 30, 31, 30, 31, 31, 30,
 * 31, 30, 31].
 */

/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  function toDays(date) {
    const [month, day] = date.split('-').map(Number);
    let totalDays = 0;
    for (let i = 0; i < month - 1; i++) {
      totalDays += daysInMonth[i];
    }
    return totalDays + day;
  }

  const aliceStart = toDays(arriveAlice);
  const aliceEnd = toDays(leaveAlice);
  const bobStart = toDays(arriveBob);
  const bobEnd = toDays(leaveBob);

  const overlapStart = Math.max(aliceStart, bobStart);
  const overlapEnd = Math.min(aliceEnd, bobEnd);

  return Math.max(0, overlapEnd - overlapStart + 1);
};
