/**
 * 1192. Critical Connections in a Network
 * https://leetcode.com/problems/critical-connections-in-a-network/
 * Difficulty: Hard
 *
 * There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections
 * forming a network where connections[i] = [ai, bi] represents a connection between servers ai and
 * bi. Any server can reach other servers directly or indirectly through the network.
 *
 * A critical connection is a connection that, if removed, will make some servers unable to reach
 * some other server.
 *
 * Return all critical connections in the network in any order.
 */

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
  const graph = Array.from({ length: n }, () => []);
  const discoveryTimes = new Array(n).fill(-1);
  const lowestReachableTimes = new Array(n).fill(-1);
  const criticalEdges = [];
  let time = 0;

  connections.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  exploreNode(0, -1);

  return criticalEdges;

  function exploreNode(current, parent) {
    discoveryTimes[current] = lowestReachableTimes[current] = time++;

    for (const neighbor of graph[current]) {
      if (neighbor === parent) continue;
      if (discoveryTimes[neighbor] === -1) {
        exploreNode(neighbor, current);
        lowestReachableTimes[current] = Math.min(
          lowestReachableTimes[current],
          lowestReachableTimes[neighbor]
        );
        if (lowestReachableTimes[neighbor] > discoveryTimes[current]) {
          criticalEdges.push([current, neighbor]);
        }
      } else {
        lowestReachableTimes[current] = Math.min(
          lowestReachableTimes[current],
          discoveryTimes[neighbor]
        );
      }
    }
  }
};
