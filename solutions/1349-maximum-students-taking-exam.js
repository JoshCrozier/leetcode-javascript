/**
 * 1349. Maximum Students Taking Exam
 * https://leetcode.com/problems/maximum-students-taking-exam/
 * Difficulty: Hard
 *
 * Given a m * n matrix seats  that represent seats distributions in a classroom. If a seat is
 * broken, it is denoted by '#' character otherwise it is denoted by a '.' character.
 *
 * Students can see the answers of those sitting next to the left, right, upper left and upper
 * right, but he cannot see the answers of the student sitting directly in front or behind him.
 * Return the maximum number of students that can take the exam together without any cheating
 * being possible.
 *
 * Students must be placed in seats in good condition.
 */

/**
 * @param {character[][]} seats
 * @return {number}
 */
var maxStudents = function(seats) {
  const rows = seats.length;
  const cols = seats[0].length;
  const cache = new Map();

  return countStudents(0, 0);

  function isValid(row, currMask, prevMask) {
    for (let j = 0; j < cols; j++) {
      if (!(currMask & (1 << j))) continue;
      if (seats[row][j] === '#') return false;
      if (j > 0 && (currMask & (1 << (j - 1)))) return false;
      if (j < cols - 1 && (currMask & (1 << (j + 1)))) return false;
      if (row > 0) {
        if (j > 0 && (prevMask & (1 << (j - 1)))) return false;
        if (j < cols - 1 && (prevMask & (1 << (j + 1)))) return false;
      }
    }
    return true;
  }

  function countStudents(row, prevMask) {
    if (row === rows) return 0;
    const key = `${row},${prevMask}`;
    if (cache.has(key)) return cache.get(key);

    let maxCount = 0;
    for (let currMask = 0; currMask < (1 << cols); currMask++) {
      if (!isValid(row, currMask, prevMask)) continue;
      const students = (currMask.toString(2).match(/1/g) || []).length;
      maxCount = Math.max(maxCount, students + countStudents(row + 1, currMask));
    }

    cache.set(key, maxCount);
    return maxCount;
  }
};
