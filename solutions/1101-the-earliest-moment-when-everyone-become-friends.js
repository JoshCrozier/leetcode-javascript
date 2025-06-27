/**
 * 1101. The Earliest Moment When Everyone Become Friends
 * https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/
 * Difficulty: Medium
 *
 * There are n people in a social group labeled from 0 to n - 1. You are given an array logs
 * where logs[i] = [timestampi, xi, yi] indicates that xi and yi will be friends at the time
 * timestampi.
 *
 * Friendship is symmetric. That means if a is friends with b, then b is friends with a.
 * Also, person a is acquainted with a person b if a is friends with b, or a is a friend
 * of someone acquainted with b.
 *
 * Return the earliest time for which every person became acquainted with every other person.
 * If there is no such earliest time, return -1.
 */

/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function(logs, n) {
  logs.sort((a, b) => a[0] - b[0]);

  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = new Array(n).fill(0);
  let components = n;
  for (const [timestamp, x, y] of logs) {
    if (union(x, y) && components === 1) {
      return timestamp;
    }
  }

  return -1;

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX === rootY) return false;

    if (rank[rootX] < rank[rootY]) {
      parent[rootX] = rootY;
    } else if (rank[rootX] > rank[rootY]) {
      parent[rootY] = rootX;
    } else {
      parent[rootY] = rootX;
      rank[rootX]++;
    }

    components--;
    return true;
  }
};
