/**
 * 1615. Maximal Network Rank
 * https://leetcode.com/problems/maximal-network-rank/
 * Difficulty: Medium
 *
 * There is an infrastructure of n cities with some number of roads connecting these cities.
 * Each roads[i] = [ai, bi] indicates that there is a bidirectional road between cities ai and bi.
 *
 * The network rank of two different cities is defined as the total number of directly connected
 * roads to either city. If a road is directly connected to both cities, it is only counted once.
 *
 * The maximal network rank of the infrastructure is the maximum network rank of all pairs of
 * different cities.
 *
 * Given the integer n and the array roads, return the maximal network rank of the entire
 * infrastructure.
 */

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, citiesConnections) {
  const cityRoadCounts = new Array(n).fill(0);
  const directConnections = new Set();

  for (const [cityA, cityB] of citiesConnections) {
    cityRoadCounts[cityA]++;
    cityRoadCounts[cityB]++;
    directConnections.add(`${Math.min(cityA, cityB)}-${Math.max(cityA, cityB)}`);
  }

  let maxNetworkRank = 0;

  for (let cityA = 0; cityA < n; cityA++) {
    for (let cityB = cityA + 1; cityB < n; cityB++) {
      let networkRank = cityRoadCounts[cityA] + cityRoadCounts[cityB];
      if (directConnections.has(`${cityA}-${cityB}`)
          || directConnections.has(`${cityB}-${cityA}`)) {
        networkRank--;
      }
      maxNetworkRank = Math.max(maxNetworkRank, networkRank);
    }
  }

  return maxNetworkRank;
};
