/**
 * 838. Push Dominoes
 * https://leetcode.com/problems/push-dominoes/
 * Difficulty: Medium
 *
 * There are n dominoes in a line, and we place each domino vertically upright. In the beginning,
 * we simultaneously push some of the dominoes either to the left or to the right.
 *
 * After each second, each domino that is falling to the left pushes the adjacent domino on the
 * left. Similarly, the dominoes falling to the right push their adjacent dominoes standing on
 * the right.
 *
 * When a vertical domino has dominoes falling on it from both sides, it stays still due to the
 * balance of the forces.
 *
 * For the purposes of this question, we will consider that a falling domino expends no additional
 * force to a falling or already fallen domino.
 *
 * You are given a string dominoes representing the initial state where:
 * - dominoes[i] = 'L', if the ith domino has been pushed to the left,
 * - dominoes[i] = 'R', if the ith domino has been pushed to the right, and
 * - dominoes[i] = '.', if the ith domino has not been pushed.
 *
 * Return a string representing the final state.
 */

/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
  const forces = new Array(dominoes.length).fill(0);

  let force = 0;
  for (let i = 0; i < dominoes.length; i++) {
    if (dominoes[i] === 'R') {
      force = dominoes.length;
    } else if (dominoes[i] === 'L') {
      force = 0;
    } else {
      force = Math.max(force - 1, 0);
    }
    forces[i] += force;
  }

  force = 0;
  for (let i = dominoes.length - 1; i >= 0; i--) {
    if (dominoes[i] === 'L') {
      force = dominoes.length;
    } else if (dominoes[i] === 'R') {
      force = 0;
    } else {
      force = Math.max(force - 1, 0);
    }
    forces[i] -= force;
  }

  return forces.map(f => {
    if (f > 0) return 'R';
    if (f < 0) return 'L';
    return '.';
  }).join('');
};
