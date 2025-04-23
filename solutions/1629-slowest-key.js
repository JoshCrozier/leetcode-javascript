/**
 * 1629. Slowest Key
 * https://leetcode.com/problems/slowest-key/
 * Difficulty: Easy
 *
 * A newly designed keypad was tested, where a tester pressed a sequence of n keys, one at a time.
 *
 * You are given a string keysPressed of length n, where keysPressed[i] was the ith key pressed in
 * the testing sequence, and a sorted list releaseTimes, where releaseTimes[i] was the time the
 * ith key was released. Both arrays are 0-indexed. The 0th key was pressed at the time 0, and
 * every subsequent key was pressed at the exact time the previous key was released.
 *
 * The tester wants to know the key of the keypress that had the longest duration. The ith keypress
 * had a duration of releaseTimes[i] - releaseTimes[i - 1], and the 0th keypress had a duration of
 * releaseTimes[0].
 *
 * Note that the same key could have been pressed multiple times during the test, and these multiple
 * presses of the same key may not have had the same duration.
 *
 * Return the key of the keypress that had the longest duration. If there are multiple such
 * keypresses, return the lexicographically largest key of the keypresses.
 */

/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
  let maxDuration = releaseTimes[0];
  let result = keysPressed[0];

  for (let i = 1; i < releaseTimes.length; i++) {
    const duration = releaseTimes[i] - releaseTimes[i - 1];
    if (duration > maxDuration || (duration === maxDuration && keysPressed[i] > result)) {
      maxDuration = duration;
      result = keysPressed[i];
    }
  }

  return result;
};
