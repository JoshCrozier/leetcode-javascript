/**
 * 2676. Throttle
 * https://leetcode.com/problems/throttle/
 * Difficulty: Medium
 *
 * Given a function fn and a time in milliseconds t, return a throttled version of that
 * function.
 *
 * A throttled function is first called without delay and then, for a time interval of
 * t milliseconds, can't be executed but should store the latest function arguments provided
 * to call fn with them after the end of the delay.
 *
 * For instance, t = 50ms, and the function was called at 30ms, 40ms, and 60ms.
 *
 * At 30ms, without delay, the throttled function fn should be called with the arguments,
 * and calling the throttled function fn should be blocked for the following t milliseconds.
 *
 * At 40ms, the function should just save arguments.
 *
 * At 60ms, arguments should overwrite currently stored arguments from the second call because
 * the second and third calls are made before 80ms. Once the delay has passed, the throttled
 * function fn should be called with the latest arguments provided during the delay period,
 * and it should also create another delay period of 80ms + t.
 */

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
  let isThrottled = false;
  let nextArgs = null;

  function invoke() {
    if (nextArgs) {
      fn(...nextArgs);
      nextArgs = null;
      setTimeout(invoke, t);
    } else {
      isThrottled = false;
    }
  }

  return function(...args) {
    if (isThrottled) {
      nextArgs = args;
      return;
    }

    fn(...args);
    isThrottled = true;
    setTimeout(invoke, t);
  };
};
