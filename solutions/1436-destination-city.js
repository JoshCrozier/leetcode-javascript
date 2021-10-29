/**
 * 1436. Destination City
 * https://leetcode.com/problems/destination-city/
 * Difficulty: Easy
 *
 * You are given the array paths, where paths[i] = [cityAi, cityBi] means there
 * exists a direct path going from cityAi to cityBi. Return the destination city,
 * that is, the city without any path outgoing to another city.
 *
 * It is guaranteed that the graph of paths forms a line without any loop, therefore,
 * there will be exactly one destination city.
 */

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  const set = new Set(paths.map(([a]) => a));
  return paths.find(([_, b]) => !set.has(b))[1];
};
