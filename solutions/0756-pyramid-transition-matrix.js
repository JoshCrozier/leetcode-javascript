/**
 * 756. Pyramid Transition Matrix
 * https://leetcode.com/problems/pyramid-transition-matrix/
 * Difficulty: Medium
 *
 * You are stacking blocks to form a pyramid. Each block has a color, which is represented by
 * a single letter. Each row of blocks contains one less block than the row beneath it and is
 * centered on top.
 *
 * To make the pyramid aesthetically pleasing, there are only specific triangular patterns that
 * are allowed. A triangular pattern consists of a single block stacked on top of two blocks.
 * The patterns are given as a list of three-letter strings allowed, where the first two characters
 * of a pattern represent the left and right bottom blocks respectively, and the third character
 * is the top block.
 *
 * For example, "ABC" represents a triangular pattern with a 'C' block stacked on top of an 'A'
 * (left) and 'B' (right) block. Note that this is different from "BAC" where 'B' is on the left
 * bottom and 'A' is on the right bottom.
 *
 * You start with a bottom row of blocks bottom, given as a single string, that you must use as
 * the base of the pyramid.
 *
 * Given bottom and allowed, return true if you can build the pyramid all the way to the top such
 * that every triangular pattern in the pyramid is in allowed, or false otherwise.
 */

/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function(bottom, allowed) {
  const transitions = new Map();
  for (const [left, right, top] of allowed) {
    const key = left + right;
    transitions.set(key, (transitions.get(key) || '') + top);
  }

  function canBuild(row, nextRow = '') {
    if (row.length === 1) return true;
    if (nextRow.length === row.length - 1) return canBuild(nextRow);

    const pair = row.slice(nextRow.length, nextRow.length + 2);
    const options = transitions.get(pair) || '';

    for (const top of options) {
      if (canBuild(row, nextRow + top)) return true;
    }
    return false;
  }

  return canBuild(bottom);
};
