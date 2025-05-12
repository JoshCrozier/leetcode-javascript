/**
 * 2092. Find All People With Secret
 * https://leetcode.com/problems/find-all-people-with-secret/
 * Difficulty: Hard
 *
 * You are given an integer n indicating there are n people numbered from 0 to n - 1. You are also
 * given a 0-indexed 2D integer array meetings where meetings[i] = [xi, yi, timei] indicates that
 * person xi and person yi have a meeting at timei. A person may attend multiple meetings at the
 * same time. Finally, you are given an integer firstPerson.
 *
 * Person 0 has a secret and initially shares the secret with a person firstPerson at time 0. This
 * secret is then shared every time a meeting takes place with a person that has the secret. More
 * formally, for every meeting, if a person xi has the secret at timei, then they will share the
 * secret with person yi, and vice versa.
 *
 * The secrets are shared instantaneously. That is, a person may receive the secret and share it
 * with people in other meetings within the same time frame.
 *
 * Return a list of all the people that have the secret after all the meetings have taken place.
 * You may return the answer in any order.
 */

/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function(n, meetings, firstPerson) {
  const parent = Array.from({ length: n }, (_, i) => i);

  union(0, firstPerson);
  meetings.sort((a, b) => a[2] - b[2]);

  let i = 0;
  while (i < meetings.length) {
    const currentTime = meetings[i][2];
    const group = [];

    while (i < meetings.length && meetings[i][2] === currentTime) {
      const [x, y] = meetings[i];
      group.push(x, y);
      union(x, y);
      i++;
    }

    for (const person of group) {
      if (find(person) !== find(0)) {
        parent[person] = person;
      }
    }
  }

  const result = [];
  for (let j = 0; j < n; j++) {
    if (find(j) === find(0)) {
      result.push(j);
    }
  }

  return result;

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    parent[find(x)] = find(y);
  }
};
