/**
 * 2251. Number of Flowers in Full Bloom
 * https://leetcode.com/problems/number-of-flowers-in-full-bloom/
 * Difficulty: Hard
 *
 * You are given a 0-indexed 2D integer array flowers, where flowers[i] = [starti, endi] means
 * the ith flower will be in full bloom from starti to endi (inclusive). You are also given a
 * 0-indexed integer array people of size n, where people[i] is the time that the ith person
 * will arrive to see the flowers.
 *
 * Return an integer array answer of size n, where answer[i] is the number of flowers that are
 * in full bloom when the ith person arrives.
 */

/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
  const events = [];
  for (const [start, end] of flowers) {
    events.push([start, 1]);
    events.push([end + 1, -1]);
  }
  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const result = new Array(people.length).fill(0);
  const peopleWithIndex = people.map((time, index) => [time, index]);
  peopleWithIndex.sort((a, b) => a[0] - b[0]);

  let bloomCount = 0;
  let eventIndex = 0;
  for (const [time, personIndex] of peopleWithIndex) {
    while (eventIndex < events.length && events[eventIndex][0] <= time) {
      bloomCount += events[eventIndex][1];
      eventIndex++;
    }
    result[personIndex] = bloomCount;
  }

  return result;
};
