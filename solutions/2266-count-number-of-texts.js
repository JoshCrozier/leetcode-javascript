/**
 * 2266. Count Number of Texts
 * https://leetcode.com/problems/count-number-of-texts/
 * Difficulty: Medium
 *
 * Alice is texting Bob using her phone. The mapping of digits to letters is shown in the
 * figure below.
 *
 * In order to add a letter, Alice has to press the key of the corresponding digit i times,
 * where i is the position of the letter in the key.
 * - For example, to add the letter 's', Alice has to press '7' four times. Similarly, to
 *   add the letter 'k', Alice has to press '5' twice.
 * - Note that the digits '0' and '1' do not map to any letters, so Alice does not use them.
 *
 * However, due to an error in transmission, Bob did not receive Alice's text message but
 * received a string of pressed keys instead.
 * - For example, when Alice sent the message "bob", Bob received the string "2266622".
 *
 * Given a string pressedKeys representing the string received by Bob, return the total
 * number of possible text messages Alice could have sent.
 *
 * Since the answer may be very large, return it modulo 109 + 7.
 */

/**
 * @param {string} pressedKeys
 * @return {number}
 */
var countTexts = function(pressedKeys) {
  const mod = 1e9 + 7;
  const maxGroup = pressedKeys.length;
  const dp = new Array(maxGroup + 1).fill(0);
  dp[0] = 1;

  const map = new Map([
    ['2', 3], ['3', 3], ['4', 3], ['5', 3],
    ['6', 3], ['7', 4], ['8', 3], ['9', 4]
  ]);

  for (let i = 1; i <= maxGroup; i++) {
    dp[i] = dp[i - 1];
    if (i >= 2 && pressedKeys[i - 1] === pressedKeys[i - 2]) {
      dp[i] = (dp[i] + dp[i - 2]) % mod;
    }
    if (i >= 3 && pressedKeys[i - 1] === pressedKeys[i - 2]
        && pressedKeys[i - 2] === pressedKeys[i - 3]) {
      dp[i] = (dp[i] + dp[i - 3]) % mod;
    }
    if (i >= 4 && pressedKeys[i - 1] === pressedKeys[i - 2]
        && pressedKeys[i - 2] === pressedKeys[i - 3]
        && pressedKeys[i - 3] === pressedKeys[i - 4] && map.get(pressedKeys[i - 1]) === 4) {
      dp[i] = (dp[i] + dp[i - 4]) % mod;
    }
  }

  return dp[maxGroup];
};
