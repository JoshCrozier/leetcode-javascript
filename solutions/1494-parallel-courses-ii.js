/**
 * 1494. Parallel Courses II
 * https://leetcode.com/problems/parallel-courses-ii/
 * Difficulty: Hard
 *
 * You are given an integer n, which indicates that there are n courses labeled from 1 to n. You are
 * also given an array relations where relations[i] = [prevCoursei, nextCoursei], representing a
 * prerequisite relationship between course prevCoursei and course nextCoursei: course prevCoursei
 * has to be taken before course nextCoursei. Also, you are given the integer k.
 *
 * In one semester, you can take at most k courses as long as you have taken all the prerequisites
 * in the previous semesters for the courses you are taking.
 *
 * Return the minimum number of semesters needed to take all courses. The testcases will be
 * generated such that it is possible to take every course.
 */

/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number} k
 * @return {number}
 */
var minNumberOfSemesters = function(n, relations, k) {
  const prerequisites = new Array(n).fill(0);
  for (const [prev, next] of relations) {
    prerequisites[next - 1] |= 1 << (prev - 1);
  }

  const cache = new Array(1 << n).fill(-1);

  return findMinSemesters(0);

  function findMinSemesters(courses) {
    if (courses === (1 << n) - 1) return 0;
    if (cache[courses] !== -1) return cache[courses];

    let available = 0;
    for (let i = 0; i < n; i++) {
      if (!(courses & (1 << i)) && (courses & prerequisites[i]) === prerequisites[i]) {
        available |= 1 << i;
      }
    }

    let minSemesters = n + 1;
    const combinations = function(pos, count, selected) {
      if (count === 0 || pos === n) {
        if (selected) {
          minSemesters = Math.min(
            minSemesters,
            1 + findMinSemesters(courses | selected)
          );
        }
        return;
      }
      if (!(available & (1 << pos))) return combinations(pos + 1, count, selected);
      combinations(pos + 1, count - 1, selected | (1 << pos));
      combinations(pos + 1, count, selected);
    };

    combinations(0, Math.min(k, bitCount(available)), 0);
    cache[courses] = minSemesters;
    return minSemesters;
  }

  function bitCount(num) {
    let count = 0;
    while (num) {
      count += num & 1;
      num >>= 1;
    }
    return count;
  }
};
