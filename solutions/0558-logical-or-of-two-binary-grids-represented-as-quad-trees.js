/**
 * 558. Logical OR of Two Binary Grids Represented as Quad-Trees
 * https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/
 * Difficulty: Medium
 *
 * A Binary Matrix is a matrix in which all the elements are either 0 or 1.
 *
 * Given quadTree1 and quadTree2. quadTree1 represents a n * n binary matrix and quadTree2
 * represents another n * n binary matrix.
 *
 * Return a Quad-Tree representing the n * n binary matrix which is the result of logical
 * bitwise OR of the two binary matrixes represented by quadTree1 and quadTree2.
 *
 * Notice that you can assign the value of a node to True or False when isLeaf is False, and
 * both are accepted in the answer.
 *
 * A Quad-Tree is a tree data structure in which each internal node has exactly four children.
 * Besides, each node has two attributes:
 * - val: True if the node represents a grid of 1's or False if the node represents a grid of 0's.
 * - isLeaf: True if the node is leaf node on the tree or False if the node has the four children.
 * class Node {
 *     public boolean val;
 *     public boolean isLeaf;
 *     public Node topLeft;
 *     public Node topRight;
 *     public Node bottomLeft;
 *     public Node bottomRight;
 * }.
 *
 * We can construct a Quad-Tree from a two-dimensional area using the following steps:
 * 1. If the current grid has the same value (i.e all 1's or all 0's) set isLeaf True and set val to
 *    the value of the grid and set the four children to Null and stop.
 * 2. If the current grid has different values, set isLeaf to False and set val to any value and
 *    divide the current grid into four sub-grids as shown in the photo.
 * 3. Recurse for each of the children with the proper sub-grid.
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
 * @param {_Node} quadTree1
 * @param {_Node} quadTree2
 * @return {_Node}
 */
var intersect = function(quadTree1, quadTree2) {
  if (quadTree1.isLeaf) return quadTree1.val ? quadTree1 : quadTree2;
  if (quadTree2.isLeaf) return quadTree2.val ? quadTree2 : quadTree1;

  const topLeft = intersect(quadTree1.topLeft, quadTree2.topLeft);
  const topRight = intersect(quadTree1.topRight, quadTree2.topRight);
  const bottomLeft = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft);
  const bottomRight = intersect(quadTree1.bottomRight, quadTree2.bottomRight);

  if (topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf
      && topLeft.val === topRight.val && topRight.val === bottomLeft.val
      && bottomLeft.val === bottomRight.val) {
    return new _Node(topLeft.val, true, null, null, null, null);
  }

  return new _Node(false, false, topLeft, topRight, bottomLeft, bottomRight);
};
