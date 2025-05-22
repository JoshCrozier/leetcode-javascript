/**
 * 2391. Minimum Amount of Time to Collect Garbage
 * https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/
 * Difficulty: Medium
 *
 * You are given a 0-indexed array of strings garbage where garbage[i] represents the assortment
 * of garbage at the ith house. garbage[i] consists only of the characters 'M', 'P' and 'G'
 * representing one unit of metal, paper and glass garbage respectively. Picking up one unit of
 * any type of garbage takes 1 minute.
 *
 * You are also given a 0-indexed integer array travel where travel[i] is the number of minutes
 * needed to go from house i to house i + 1.
 *
 * There are three garbage trucks in the city, each responsible for picking up one type of garbage.
 * Each garbage truck starts at house 0 and must visit each house in order; however, they do not
 * need to visit every house.
 *
 * Only one garbage truck may be used at any given moment. While one truck is driving or picking up
 * garbage, the other two trucks cannot do anything.
 *
 * Return the minimum number of minutes needed to pick up all the garbage.
 */

/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
  let result = 0;
  const lastHouse = {'M': 0, 'P': 0, 'G': 0};

  for (let i = 0; i < garbage.length; i++) {
    result += garbage[i].length;
    for (const type of garbage[i]) {
      lastHouse[type] = i;
    }
  }

  const prefixTravel = [0];
  for (const time of travel) {
    prefixTravel.push(prefixTravel.at(-1) + time);
  }

  Object.keys(lastHouse).forEach(type => {
    result += prefixTravel[lastHouse[type]];
  });

  return result;
};
