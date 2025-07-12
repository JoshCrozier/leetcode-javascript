/**
 * 2473. Minimum Cost to Buy Apples
 * https://leetcode.com/problems/minimum-cost-to-buy-apples/
 * Difficulty: Medium
 *
 * You are given a positive integer n representing n cities numbered from 1 to n. You are also
 * given a 2D array roads, where roads[i] = [ai, bi, costi] indicates that there is a bidirectional
 * road between cities ai and bi with a cost of traveling equal to costi.
 *
 * You can buy apples in any city you want, but some cities have different costs to buy apples.
 * You are given the 1-based array appleCost where appleCost[i] is the cost of buying one apple
 * from city i.
 *
 * You start at some city, traverse through various roads, and eventually buy exactly one apple
 * from any city. After you buy that apple, you have to return back to the city you started at,
 * but now the cost of all the roads will be multiplied by a given factor k.
 *
 * Given the integer k, return a 1-based array answer of size n where answer[i] is the minimum
 * total cost to buy an apple if you start at city i.
 */

/**
 * @param {number} n
 * @param {number[][]} roads
 * @param {number[]} appleCost
 * @param {number} k
 * @return {number[]}
 */
var minCost = function(n, roads, appleCost, k) {
  const graph = new Array(n).fill().map(() => []);
  for (const [cityA, cityB, cost] of roads) {
    graph[cityA - 1].push([cityB - 1, cost]);
    graph[cityB - 1].push([cityA - 1, cost]);
  }

  const result = new Array(n);
  for (let startCity = 0; startCity < n; startCity++) {
    result[startCity] = appleCost[startCity];
  }

  const heap = [];
  for (let startCity = 0; startCity < n; startCity++) {
    heap.push([appleCost[startCity], startCity]);
  }
  heap.sort((a, b) => a[0] - b[0]);

  while (heap.length > 0) {
    const [totalCost, currCity] = heap.shift();

    if (result[currCity] < totalCost) continue;

    for (const [neighbor, cost] of graph[currCity]) {
      const newCost = result[currCity] + (k + 1) * cost;
      if (result[neighbor] > newCost) {
        result[neighbor] = newCost;

        let insertIndex = 0;
        while (insertIndex < heap.length && heap[insertIndex][0] <= newCost) {
          insertIndex++;
        }
        heap.splice(insertIndex, 0, [newCost, neighbor]);
      }
    }
  }

  return result;
};
