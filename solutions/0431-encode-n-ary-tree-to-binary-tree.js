/**
 * 431. Encode N-ary Tree to Binary Tree
 * https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/
 * Difficulty: Hard
 *
 * Design an algorithm to encode an N-ary tree into a binary tree and decode the binary tree
 * to get the original N-ary tree. An N-ary tree is a rooted tree in which each node has no
 * more than N children. Similarly, a binary tree is a rooted tree in which each node has no
 * more than 2 children. There is no restriction on how your encode/decode algorithm should
 * work. You just need to ensure that an N-ary tree can be encoded to a binary tree and this
 * binary tree can be decoded to the original N-nary tree structure.
 *
 * Nary-Tree input serialization is represented in their level order traversal, each group
 * of children is separated by the null value (See following example).
 *
 * For example, you may encode the following 3-ary tree to a binary tree in this way:
 * - Input: root = [1,null,3,2,4,null,5,6]
 *
 * Note that the above is just an example which might or might not work. You do not necessarily
 * need to follow this format, so please be creative and come up with different approaches yourself.
 */

/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class Codec {
  constructor() {}

  encode = function(root) {
    if (!root) return null;

    const binaryRoot = new TreeNode(root.val);

    if (root.children.length > 0) {
      binaryRoot.left = this.encode(root.children[0]);
    }

    let sibling = binaryRoot.left;
    for (let i = 1; i < root.children.length; i++) {
      if (sibling) {
        sibling.right = this.encode(root.children[i]);
        sibling = sibling.right;
      }
    }

    return binaryRoot;
  };

  decode = function(root) {
    if (!root) return null;

    const updated = new _Node(root.val, []);
    let sibling = root.left;
    while (sibling) {
      updated.children.push(this.decode(sibling));
      sibling = sibling.right;
    }

    return updated;
  };
}
