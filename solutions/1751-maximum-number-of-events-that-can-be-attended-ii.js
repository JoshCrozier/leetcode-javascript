/**
 * 1751. Maximum Number of Events That Can Be Attended II
 * https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/
 * Difficulty: Hard
 *
 * You are given an array of events where events[i] = [startDayi, endDayi, valuei]. The ith event
 * starts at startDayi and ends at endDayi, and if you attend this event, you will receive a value
 * of valuei. You are also given an integer k which represents the maximum number of events you can
 * attend.
 *
 * You can only attend one event at a time. If you choose to attend an event, you must attend the
 * entire event. Note that the end day is inclusive: that is, you cannot attend two events where
 * one of them starts and the other ends on the same day.
 *
 * Return the maximum sum of values that you can receive by attending events.
 */

/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(events, k) {
  events.sort((a, b) => a[0] - b[0]);
  const n = events.length;
  const dp = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(-1));

  return maximize(0, k);

  function findNext(index, end) {
    let left = index;
    let right = n;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (events[mid][0] > end) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }

  function maximize(index, remaining) {
    if (index >= n || remaining === 0) return 0;
    if (dp[remaining][index] !== -1) return dp[remaining][index];

    const nextIndex = findNext(index + 1, events[index][1]);
    const take = events[index][2] + maximize(nextIndex, remaining - 1);
    const skip = maximize(index + 1, remaining);

    return dp[remaining][index] = Math.max(take, skip);
  }
};
