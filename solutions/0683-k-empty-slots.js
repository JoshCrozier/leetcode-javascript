/**
 * 683. K Empty Slots
 * https://leetcode.com/problems/k-empty-slots/
 * Difficulty: Hard
 *
 * You have n bulbs in a row numbered from 1 to n. Initially, all the bulbs are turned off.
 * We turn on exactly one bulb every day until all bulbs are on after n days.
 *
 * You are given an array bulbs of length n where bulbs[i] = x means that on the (i+1)th day,
 * we will turn on the bulb at position x where i is 0-indexed and x is 1-indexed.
 *
 * Given an integer k, return the minimum day number such that there exists two turned on
 * bulbs that have exactly k bulbs between them that are all turned off. If there isn't
 * such day, return -1.
 */

/**
 * @param {number[]} bulbs
 * @param {number} k
 * @return {number}
 */
var kEmptySlots = function(bulbs, k) {
  const days = new Array(bulbs.length + 1);

  for (let i = 0; i < bulbs.length; i++) {
    days[bulbs[i]] = i + 1;
  }

  let left = 1;
  let right = k + 2;
  let minDay = Infinity;

  while (right <= bulbs.length) {
    let mid = left + 1;
    let isValid = true;

    while (mid < right) {
      if (days[mid] < Math.max(days[left], days[right])) {
        isValid = false;
        left = mid;
        right = mid + k + 1;
        break;
      }
      mid++;
    }

    if (isValid) {
      minDay = Math.min(minDay, Math.max(days[left], days[right]));
      left++;
      right++;
    }
  }

  return minDay === Infinity ? -1 : minDay;
};
