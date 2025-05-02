/**
 * 1871. Jump Game VII
 * https://leetcode.com/problems/jump-game-vii/
 * Difficulty: Medium
 *
 * You are given a 0-indexed binary string s and two integers minJump and maxJump. In the
 * beginning, you are standing at index 0, which is equal to '0'. You can move from index
 * i to index j if the following conditions are fulfilled:
 * - i + minJump <= j <= min(i + maxJump, s.length - 1), and
 * - s[j] == '0'.
 *
 * Return true if you can reach index s.length - 1 in s, or false otherwise.
 */

/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
  const length = s.length;
  const reachable = new Array(length).fill(false);
  reachable[0] = true;
  const queue = [0];
  let farthest = 0;

  while (queue.length) {
    const current = queue.shift();
    const start = current + minJump;
    const end = Math.min(current + maxJump, length - 1);

    for (let next = Math.max(start, farthest + 1); next <= end; next++) {
      if (s[next] === '0' && !reachable[next]) {
        reachable[next] = true;
        queue.push(next);
        if (next === length - 1) return true;
      }
    }
    farthest = Math.max(farthest, end);
  }

  return false;
};
