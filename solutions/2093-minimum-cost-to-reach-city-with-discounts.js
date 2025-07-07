/**
 * 2093. Minimum Cost to Reach City With Discounts
 * https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/
 * Difficulty: Medium
 *
 * A series of highways connect n cities numbered from 0 to n - 1. You are given a 2D
 * integer array highways where highways[i] = [city1i, city2i, tolli] indicates that
 * there is a highway that connects city1i and city2i, allowing a car to go from city1i
 * to city2i and vice versa for a cost of tolli.
 *
 * You are also given an integer discounts which represents the number of discounts you have.
 * You can use a discount to travel across the ith highway for a cost of tolli / 2 (integer
 * division). Each discount may only be used once, and you can only use at most one discount
 * per highway.
 *
 * Return the minimum total cost to go from city 0 to city n - 1, or -1 if it is not possible
 * to go from city 0 to city n - 1.
 */

/**
 * @param {number} n
 * @param {number[][]} highways
 * @param {number} discounts
 * @return {number}
 */
var minimumCost = function(n, highways, discounts) {
  const graph = Array.from({ length: n }, () => []);

  for (const [a, b, c] of highways) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  const pq = new PriorityQueue((a, b) => a[0] - b[0]);
  pq.enqueue([0, 0, 0]);
  const visited = Array.from({ length: n }, () => new Array(discounts + 1).fill(Infinity));
  visited[0][0] = 0;

  while (!pq.isEmpty()) {
    const [cost, city, discountUsed] = pq.dequeue();

    if (city === n - 1) return cost;

    for (const [nextCity, weight] of graph[city]) {
      if (cost + weight < visited[nextCity][discountUsed]) {
        pq.enqueue([cost + weight, nextCity, discountUsed]);
        visited[nextCity][discountUsed] = cost + weight;
      }

      if (discountUsed < discounts
          && cost + Math.floor(weight / 2) < visited[nextCity][discountUsed + 1]) {
        pq.enqueue([cost + Math.floor(weight / 2), nextCity, discountUsed + 1]);
        visited[nextCity][discountUsed + 1] = cost + Math.floor(weight / 2);
      }
    }
  }

  return -1;
};
