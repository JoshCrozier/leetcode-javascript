/**
 * 2158. Amount of New Area Painted Each Day
 * https://leetcode.com/problems/amount-of-new-area-painted-each-day/
 * Difficulty: Hard
 *
 * There is a long and thin painting that can be represented by a number line. You are given
 * a 0-indexed 2D integer array paint of length n, where paint[i] = [starti, endi]. This means
 * that on the ith day you need to paint the area between starti and endi.
 *
 * Painting the same area multiple times will create an uneven painting so you only want to
 * paint each area of the painting at most once.
 *
 * Return an integer array worklog of length n, where worklog[i] is the amount of new area that
 * you painted on the ith day.
 */

/**
 * @param {number[][]} paint
 * @return {number[]}
 */
var amountPainted = function(paint) {
  const intervals = new Map();
  const result = [];

  for (const [start, end] of paint) {
    let left = start;
    let right = end;
    let paintAmount = right - left;

    const keys = Array.from(intervals.keys()).sort((a, b) => a - b);
    const toRemove = [];
    let merged = false;

    for (const key of keys) {
      const value = intervals.get(key);

      if (key > right || value < left) continue;

      if (!merged && key <= left && value >= left) {
        left = Math.min(left, key);
        right = Math.max(right, value);
        paintAmount = Math.max(0, end - Math.max(start, value));
        toRemove.push(key);
        merged = true;
      } else if (key >= left && key < right) {
        paintAmount -= Math.min(right, value) - key;
        right = Math.max(right, value);
        toRemove.push(key);
      } else if (value > left && value <= right) {
        paintAmount -= value - Math.max(left, key);
        left = Math.min(left, key);
        toRemove.push(key);
      }
    }

    for (const key of toRemove) {
      intervals.delete(key);
    }

    intervals.set(left, right);
    result.push(Math.max(0, paintAmount));
  }

  return result;
};
