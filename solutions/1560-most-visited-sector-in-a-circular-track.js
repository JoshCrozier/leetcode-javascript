/**
 * 1560. Most Visited Sector in a Circular Track
 * https://leetcode.com/problems/most-visited-sector-in-a-circular-track/
 * Difficulty: Easy
 *
 * Given an integer n and an integer array rounds. We have a circular track which consists of n
 * sectors labeled from 1 to n. A marathon will be held on this track, the marathon consists of
 * m rounds. The ith round starts at sector rounds[i - 1] and ends at sector rounds[i]. For
 * example, round 1 starts at sector rounds[0] and ends at sector rounds[1]
 *
 * Return an array of the most visited sectors sorted in ascending order.
 *
 * Notice that you circulate the track in ascending order of sector numbers in the counter-clockwise
 * direction (See the first example).
 */

/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function(n, rounds) {
  const sectorVisits = new Array(n + 1).fill(0);
  let maxVisits = 0;

  for (let i = 1; i < rounds.length; i++) {
    let start = rounds[i - 1];
    const end = rounds[i];

    while (start !== end) {
      sectorVisits[start]++;
      maxVisits = Math.max(maxVisits, sectorVisits[start]);
      start = start === n ? 1 : start + 1;
    }
  }

  sectorVisits[rounds[rounds.length - 1]]++;
  maxVisits = Math.max(maxVisits, sectorVisits[rounds[rounds.length - 1]]);

  const result = [];
  for (let i = 1; i <= n; i++) {
    if (sectorVisits[i] === maxVisits) {
      result.push(i);
    }
  }

  return result;
};
