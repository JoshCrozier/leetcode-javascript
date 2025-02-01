/**
 * 1319. Number of Operations to Make Network Connected
 * https://leetcode.com/problems/number-of-operations-to-make-network-connected/
 * Difficulty: Medium
 *
 * There are n computers numbered from 0 to n - 1 connected by ethernet cables connections forming
 * a network where connections[i] = [ai, bi] represents a connection between computers ai and bi.
 * Any computer can reach any other computer directly or indirectly through the network.
 *
 * You are given an initial computer network connections. You can extract certain cables between
 * two directly connected computers, and place them between any pair of disconnected computers to
 * make them directly connected.
 *
 * Return the minimum number of times you need to do this in order to make all the computers
 * connected. If it is not possible, return -1.
 */

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
  const parent = Array(n).fill(-1);
  let isNotConnected = n - 1;
  let count = 0;

  connections.forEach(([node, connection]) => {
    if (search(node) !== search(connection)) {
      const p1 = search(node);
      const p2 = search(connection);
      if (p1 !== p2) {
        parent[p2] = p1;
      }
      isNotConnected--;
    } else {
      count++;
    }
  });

  return isNotConnected <= count ? isNotConnected : -1;

  function search(node) {
    if (parent[node] === -1) {
      return node;
    }
    parent[node] = search(parent[node]);
    return parent[node];
  }
};
