/**
 * 1229. Meeting Scheduler
 * https://leetcode.com/problems/meeting-scheduler/
 * Difficulty: Medium
 *
 * Given the availability time slots arrays slots1 and slots2 of two people and a meeting
 * duration duration, return the earliest time slot that works for both of them and is of
 * duration duration.
 *
 * If there is no common time slot that satisfies the requirements, return an empty array.
 *
 * The format of a time slot is an array of two elements [start, end] representing an
 * inclusive time range from start to end.
 *
 * It is guaranteed that no two availability slots of the same person intersect with each
 * other. That is, for any two time slots [start1, end1] and [start2, end2] of the same
 * person, either start1 > end2 or start2 > end1.
 */

/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
var minAvailableDuration = function(slots1, slots2, duration) {
  slots1.sort((a, b) => a[0] - b[0]);
  slots2.sort((a, b) => a[0] - b[0]);

  let i = 0;
  let j = 0;

  while (i < slots1.length && j < slots2.length) {
    const overlapStart = Math.max(slots1[i][0], slots2[j][0]);
    const overlapEnd = Math.min(slots1[i][1], slots2[j][1]);

    if (overlapEnd - overlapStart >= duration) {
      return [overlapStart, overlapStart + duration];
    }

    if (slots1[i][1] < slots2[j][1]) {
      i++;
    } else {
      j++;
    }
  }

  return [];
};
