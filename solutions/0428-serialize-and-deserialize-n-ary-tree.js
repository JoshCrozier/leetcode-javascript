/**
 * 428. Serialize and Deserialize N-ary Tree
 * https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/
 * Difficulty: Hard
 *
 * Serialization is the process of converting a data structure or object into a sequence of
 * bits so that it can be stored in a file or memory buffer, or transmitted across a network
 * connection link to be reconstructed later in the same or another computer environment.
 *
 * Design an algorithm to serialize and deserialize an N-ary tree. An N-ary tree is a rooted
 * tree in which each node has no more than N children. There is no restriction on how your
 * serialization/deserialization algorithm should work. You just need to ensure that an N-ary
 * tree can be serialized to a string and this string can be deserialized to the original
 * tree structure.
 *
 * For example, you may serialize the following 3-ary tree as [1 [3[5 6] 2 4]]. Note that
 * this is just an example, you do not necessarily need to follow this format.
 *
 * Or you can follow LeetCode's level order traversal serialization format, where each
 * group of children is separated by the null value.
 *
 * For example, the above tree may be serialized as
 * [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14].
 *
 * You do not necessarily need to follow the above-suggested formats, there are many more
 * different formats that work so please be creative and come up with different approaches
 * yourself.
 */

/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
  constructor() {}

  serialize = function(root) {
    if (!root) return '';
    const result = [];

    function serializeNode(node) {
      result.push(node.val);
      result.push(node.children.length);
      for (const child of node.children) {
        serializeNode(child);
      }
    }

    serializeNode(root);
    return result.join(',');
  };

  deserialize = function(data) {
    if (!data) return null;
    const values = data.split(',').map(Number);
    let index = 0;

    function deserializeNode() {
      const val = values[index++];
      const childCount = values[index++];
      const children = [];
      for (let i = 0; i < childCount; i++) {
        children.push(deserializeNode());
      }
      return new _Node(val, children);
    }

    return deserializeNode();
  };
}
