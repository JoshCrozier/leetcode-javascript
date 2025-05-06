/**
 * 2039. The Time When the Network Becomes Idle
 * https://leetcode.com/problems/the-time-when-the-network-becomes-idle/
 * Difficulty: Medium
 *
 * There is a network of n servers, labeled from 0 to n - 1. You are given a 2D integer array
 * edges, where edges[i] = [ui, vi] indicates there is a message channel between servers ui
 * and vi, and they can pass any number of messages to each other directly in one second.
 * You are also given a 0-indexed integer array patience of length n.
 *
 * All servers are connected, i.e., a message can be passed from one server to any other
 * server(s) directly or indirectly through the message channels.
 *
 * The server labeled 0 is the master server. The rest are data servers. Each data server
 * needs to send its message to the master server for processing and wait for a reply.
 * Messages move between servers optimally, so every message takes the least amount of
 * time to arrive at the master server. The master server will process all newly arrived
 * messages instantly and send a reply to the originating server via the reversed path
 * the message had gone through.
 *
 * At the beginning of second 0, each data server sends its message to be processed. Starting
 * from second 1, at the beginning of every second, each data server will check if it has
 * received a reply to the message it sent (including any newly arrived replies) from the
 * master server:
 * - If it has not, it will resend the message periodically. The data server i will resend
 *   the message every patience[i] second(s), i.e., the data server i will resend the message
 *   if patience[i] second(s) have elapsed since the last time the message was sent from this
 *   server.
 * - Otherwise, no more resending will occur from this server.
 *
 * The network becomes idle when there are no messages passing between servers or arriving
 * at servers.
 *
 * Return the earliest second starting from which the network becomes idle.
 */

/**
 * @param {number[][]} edges
 * @param {number[]} patience
 * @return {number}
 */
var networkBecomesIdle = function(edges, patience) {
  const n = patience.length;
  const adjList = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  const distances = new Array(n).fill(Infinity);
  distances[0] = 0;
  const queue = [0];
  let maxTime = 0;

  while (queue.length) {
    const curr = queue.shift();
    for (const next of adjList[curr]) {
      if (distances[next] === Infinity) {
        distances[next] = distances[curr] + 1;
        queue.push(next);
        if (next !== 0) {
          const roundTrip = 2 * distances[next];
          const lastSent = Math.floor((roundTrip - 1) / patience[next]) * patience[next];
          maxTime = Math.max(maxTime, lastSent + roundTrip);
        }
      }
    }
  }

  return maxTime + 1;
};
