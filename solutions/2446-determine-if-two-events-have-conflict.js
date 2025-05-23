/**
 * 2446. Determine if Two Events Have Conflict
 * https://leetcode.com/problems/determine-if-two-events-have-conflict/
 * Difficulty: Easy
 *
 * You are given two arrays of strings that represent two inclusive events that happened on the
 * same day, event1 and event2, where:
 * - event1 = [startTime1, endTime1] and
 * - event2 = [startTime2, endTime2].
 *
 * Event times are valid 24 hours format in the form of HH:MM.
 *
 * A conflict happens when two events have some non-empty intersection (i.e., some moment is common
 * to both events).
 *
 * Return true if there is a conflict between two events. Otherwise, return false.
 */

/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
  const [start1, end1] = event1;
  const [start2, end2] = event2;
  return start1 <= end2 && start2 <= end1;
};
