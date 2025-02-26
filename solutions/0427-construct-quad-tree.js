/**
 * 427. Construct Quad Tree
 * https://leetcode.com/problems/construct-quad-tree/
 * Difficulty: Medium
 *
 * Given a n * n matrix grid of 0's and 1's only. We want to represent grid with a Quad-Tree.
 *
 * Return the root of the Quad-Tree representing grid.
 *
 * A Quad-Tree is a tree data structure in which each internal node has exactly four children.
 * Besides, each node has two attributes:
 * - val: True if the node represents a grid of 1's or False if the node represents a grid of
 *   0's. Notice that you can assign the val to True or False when isLeaf is False, and both are
 *   accepted in the answer.
 * - isLeaf: True if the node is a leaf node on the tree or False if the node has four children.
 */

/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function(grid) {
  return build(0, 0, grid.length);

  function build(x, y, n) {
    const value = grid[x][y];
    for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        if (grid[i][j] !== value) {
          n /= 2;
          return new _Node(true, false,
            build(x, y, n),
            build(x, y + n, n),
            build(x + n, y, n),
            build(x + n, y + n, n)
          );
        }
      }
    }
    return new _Node(value === 1, true, null, null, null, null);
  }
};
