/**
 * 2076. Process Restricted Friend Requests
 * https://leetcode.com/problems/process-restricted-friend-requests/
 * Difficulty: Hard
 *
 * You are given an integer n indicating the number of people in a network. Each person is
 * labeled from 0 to n - 1.
 *
 * You are also given a 0-indexed 2D integer array restrictions, where restrictions[i] = [xi, yi]
 * means that person xi and person yi cannot become friends, either directly or indirectly through
 * other people.
 *
 * Initially, no one is friends with each other. You are given a list of friend requests as a
 * 0-indexed 2D integer array requests, where requests[j] = [uj, vj] is a friend request between
 * person uj and person vj.
 *
 * A friend request is successful if uj and vj can be friends. Each friend request is processed
 * in the given order (i.e., requests[j] occurs before requests[j + 1]), and upon a successful
 * request, uj and vj become direct friends for all future friend requests.
 *
 * Return a boolean array result, where each result[j] is true if the jth friend request is
 * successful or false if it is not.
 *
 * Note: If uj and vj are already direct friends, the request is still successful.
 */

/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @param {number[][]} requests
 * @return {boolean[]}
 */
var friendRequests = function(n, restrictions, requests) {
  const parent = Array.from({ length: n }, (_, i) => i);
  const result = new Array(requests.length).fill(true);

  for (let j = 0; j < requests.length; j++) {
    const [u, v] = requests[j];
    const pu = find(u);
    const pv = find(v);

    let canBeFriends = true;
    for (const [x, y] of restrictions) {
      const px = find(x);
      const py = find(y);
      if ((pu === px && pv === py) || (pu === py && pv === px)) {
        canBeFriends = false;
        break;
      }
    }

    result[j] = canBeFriends;
    if (canBeFriends) {
      union(u, v);
    }
  }

  return result;

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    parent[find(x)] = find(y);
  }
};
