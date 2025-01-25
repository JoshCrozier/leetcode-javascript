/**
 * 743. Network Delay Time
 * https://leetcode.com/problems/network-delay-time/
 * Difficulty: Medium
 *
 * You are given a network of n nodes, labeled from 1 to n. You are also given times, a
 * list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source
 * node, vi is the target node, and wi is the time it takes for a signal to travel from
 * source to target.
 *
 * We will send a signal from a given node k. Return the minimum time it takes for all
 * the n nodes to receive the signal. If it is impossible for all the n nodes to receive
 * the signal, return -1.
 */

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
  const time = new Array(n + 1).fill(Infinity);

  time[k] = 0;

  for (let i = 0; i < n; i++) {
    for (const [u, v, w] of times) {
      if (time[u] === Infinity) continue;
      if (time[v] > time[u] + w) {
        time[v] = time[u] + w;
      }
    }
  }

  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = Math.max(result, time[i]);
  }

  return result === Infinity ? -1 : result;
};
