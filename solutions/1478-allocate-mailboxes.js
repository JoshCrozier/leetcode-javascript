/**
 * 1478. Allocate Mailboxes
 * https://leetcode.com/problems/allocate-mailboxes/
 * Difficulty: Hard
 *
 * Given the array houses where houses[i] is the location of the ith house along a street and
 * an integer k, allocate k mailboxes in the street.
 *
 * Return the minimum total distance between each house and its nearest mailbox.
 *
 * The test cases are generated so that the answer fits in a 32-bit integer.
 */

/**
 * @param {number[]} houses
 * @param {number} k
 * @return {number}
 */
var minDistance = function(houses, k) {
  houses.sort((a, b) => a - b);
  const n = houses.length;
  const cache = new Map();

  return findMinDistance(0, k);

  function medianDistance(start, end) {
    let sum = 0;
    const mid = Math.floor((start + end) / 2);
    for (let i = start; i <= end; i++) {
      sum += Math.abs(houses[i] - houses[mid]);
    }
    return sum;
  }

  function findMinDistance(index, mailboxes) {
    if (index === n) return mailboxes === 0 ? 0 : Infinity;
    if (mailboxes === 0) return Infinity;

    const key = `${index}:${mailboxes}`;
    if (cache.has(key)) return cache.get(key);

    let minDist = Infinity;
    for (let j = index; j < n && n - j >= mailboxes; j++) {
      const distance = medianDistance(index, j) + findMinDistance(j + 1, mailboxes - 1);
      minDist = Math.min(minDist, distance);
    }

    cache.set(key, minDist);
    return minDist;
  }
};
