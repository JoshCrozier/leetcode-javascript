/**
 * 630. Course Schedule III
 * https://leetcode.com/problems/course-schedule-iii/
 * Difficulty: Hard
 *
 * There are n different online courses numbered from 1 to n. You are given an array courses
 * where courses[i] = [durationi, lastDayi] indicate that the ith course should be taken
 * continuously for durationi days and must be finished before or on lastDayi.
 *
 * You will start on the 1st day and you cannot take two or more courses simultaneously.
 *
 * Return the maximum number of courses that you can take.
 */

/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function(courses) {
  courses.sort((a, b) => a[1] - b[1]);

  const maxHeap = new PriorityQueue({ compare: (a, b) => b - a });
  let value = 0;

  for (const [duration, lastDay] of courses) {
    if (value + duration <= lastDay) {
      value += duration;
      maxHeap.enqueue(duration);
    } else {
      if (maxHeap.front() > duration) {
        var prev = maxHeap.dequeue();
        value -= prev;
        value += duration;
        maxHeap.enqueue(duration);
      }
    }
  }

  return maxHeap.size();
};
