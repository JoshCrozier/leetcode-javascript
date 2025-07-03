/**
 * 1516. Move Sub-Tree of N-Ary Tree
 * https://leetcode.com/problems/move-sub-tree-of-n-ary-tree/
 * Difficulty: Hard
 *
 * Given the root of an N-ary tree of unique values, and two nodes of the tree p and q.
 *
 * You should move the subtree of the node p to become a direct child of node q. If p is
 * already a direct child of q, do not change anything. Node p must be the last child in
 * the children list of node q.
 *
 * Return the root of the tree after adjusting it.
 *
 * There are 3 cases for nodes p and q:
 * 1. Node q is in the sub-tree of node p.
 * 2. Node p is in the sub-tree of node q.
 * 3. Neither node p is in the sub-tree of node q nor node q is in the sub-tree of node p.
 *
 * In cases 2 and 3, you just need to move p (with its sub-tree) to be a child of q, but in
 * case 1 the tree may be disconnected, thus you need to reconnect the tree again. Please
 * read the examples carefully before solving this problem.
 *
 * Nary-Tree input serialization is represented in their level order traversal, each group
 * of children is separated by the null value (See examples).
 */

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} root
 * @param {Node} p
 * @param {Node} q
 * @return {Node}
 */
var moveSubTree = function(root, p, q) {
  if (q.children.includes(p)) return root;

  const pParent = findParent(root, p);
  const qParent = findParent(root, q);

  if (isDescendant(q, p)) {
    qParent.children = qParent.children.filter(child => child !== q);
    q.children.push(p);

    if (!pParent) return q;

    pParent.children[pParent.children.indexOf(p)] = q;
  } else {
    q.children.push(p);
    pParent.children = pParent.children.filter(child => child !== p);
  }

  return root;

  function findParent(node, target) {
    if (!node) return null;
    for (const child of node.children) {
      if (child === target) return node;
      const parent = findParent(child, target);
      if (parent) return parent;
    }
    return null;
  }

  function isDescendant(target, node) {
    if (!node) return false;
    if (node === target) return true;
    return node.children.some(child => isDescendant(target, child));
  }
};
