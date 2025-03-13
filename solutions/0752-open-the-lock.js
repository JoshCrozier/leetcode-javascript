/**
 * 752. Open the Lock
 * https://leetcode.com/problems/open-the-lock/
 * Difficulty: Medium
 *
 * You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2',
 * '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example
 * we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.
 *
 * The lock initially starts at '0000', a string representing the state of the 4 wheels.
 *
 * You are given a list of deadends dead ends, meaning if the lock displays any of these codes,
 * the wheels of the lock will stop turning and you will be unable to open it.
 *
 * Given a target representing the value of the wheels that will unlock the lock, return the
 * minimum total number of turns required to open the lock, or -1 if it is impossible.
 */

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  const dead = new Set(deadends);
  const queue = [['0000', 0]];
  const seen = new Set(['0000']);

  if (dead.has('0000')) return -1;
  while (queue.length) {
    const [combo, turns] = queue.shift();
    if (combo === target) return turns;

    for (let i = 0; i < 4; i++) {
      const current = combo[i];
      const up = (parseInt(current) + 1) % 10;
      const down = (parseInt(current) + 9) % 10;

      const nextUp = combo.slice(0, i) + up + combo.slice(i + 1);
      if (!seen.has(nextUp) && !dead.has(nextUp)) {
        queue.push([nextUp, turns + 1]);
        seen.add(nextUp);
      }

      const nextDown = combo.slice(0, i) + down + combo.slice(i + 1);
      if (!seen.has(nextDown) && !dead.has(nextDown)) {
        queue.push([nextDown, turns + 1]);
        seen.add(nextDown);
      }
    }
  }

  return -1;
};
