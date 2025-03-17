/**
 * 818. Race Car
 * https://leetcode.com/problems/race-car/
 * Difficulty: Hard
 *
 * Your car starts at position 0 and speed +1 on an infinite number line. Your car can go into
 * negative positions. Your car drives automatically according to a sequence of instructions
 * 'A' (accelerate) and 'R' (reverse):
 * - When you get an instruction 'A', your car does the following:
 *   - position += speed
 *   - speed *= 2
 * - When you get an instruction 'R', your car does the following:
 *   - If your speed is positive then speed = -1
 *   - otherwise speed = 1
 *
 * Your position stays the same.
 *
 * For example, after commands "AAR", your car goes to positions 0 --> 1 --> 3 --> 3, and your
 * speed goes to 1 --> 2 --> 4 --> -1.
 *
 * Given a target position target, return the length of the shortest sequence of instructions
 * to get there.
 */

/**
 * @param {number} target
 * @return {number}
 */
var racecar = function(target) {
  const dp = new Array(target + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= target; i++) {
    const k = Math.ceil(Math.log2(i + 1));

    if ((1 << k) - 1 === i) {
      dp[i] = k;
      continue;
    }

    dp[i] = k + 1 + dp[(1 << k) - 1 - i];

    for (let j = 0; j < k - 1; j++) {
      dp[i] = Math.min(
        dp[i],
        (k - 1) + 1 + j + 1 + dp[i - ((1 << (k - 1)) - 1) + (1 << j) - 1]
      );
    }
  }

  return dp[target];
};
