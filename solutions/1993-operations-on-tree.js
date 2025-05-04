/**
 * 1993. Operations on Tree
 * https://leetcode.com/problems/operations-on-tree/
 * Difficulty: Medium
 *
 * You are given a tree with n nodes numbered from 0 to n - 1 in the form of a parent array
 * parent where parent[i] is the parent of the ith node. The root of the tree is node 0,
 * so parent[0] = -1 since it has no parent. You want to design a data structure that
 * allows users to lock, unlock, and upgrade nodes in the tree.
 *
 * The data structure should support the following functions:
 * - Lock: Locks the given node for the given user and prevents other users from locking
 *   the same node. You may only lock a node using this function if the node is unlocked.
 * - Unlock: Unlocks the given node for the given user. You may only unlock a node using
 *   this function if it is currently locked by the same user.
 * - Upgrade: Locks the given node for the given user and unlocks all of its descendants
 *   regardless of who locked it. You may only upgrade a node if all 3 conditions are true:
 *   - The node is unlocked,
 *   - It has at least one locked descendant (by any user), and
 *   - It does not have any locked ancestors.
 *
 * Implement the LockingTree class:
 * - LockingTree(int[] parent) initializes the data structure with the parent array.
 * - lock(int num, int user) returns true if it is possible for the user with id user to lock
 *   the node num, or false otherwise. If it is possible, the node num will become locked by
 *   the user with id user.
 * - unlock(int num, int user) returns true if it is possible for the user with id user to
 *   unlock the node num, or false otherwise. If it is possible, the node num will become unlocked.
 * - upgrade(int num, int user) returns true if it is possible for the user with id user to
 *   upgrade the node num, or false otherwise. If it is possible, the node num will be upgraded.
 */

/**
 * @param {number[]} parent
 */
var LockingTree = function(parent) {
  this.parent = parent;
  this.locked = new Map();
  this.children = new Array(parent.length).fill().map(() => []);
  for (let i = 1; i < parent.length; i++) {
    this.children[parent[i]].push(i);
  }
};

/**
 * @param {number} num
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.lock = function(num, user) {
  if (this.locked.has(num)) return false;
  this.locked.set(num, user);
  return true;
};

/**
 * @param {number} num
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.unlock = function(num, user) {
  if (!this.locked.has(num) || this.locked.get(num) !== user) return false;
  this.locked.delete(num);
  return true;
};

/**
 * @param {number} num
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.upgrade = function(num, user) {
  if (this.locked.has(num)) return false;

  let node = num;
  while (node !== -1) {
    if (this.locked.has(node)) return false;
    node = this.parent[node];
  }

  const descendants = [];
  const queue = [num];
  let hasLockedDescendant = false;

  while (queue.length) {
    const curr = queue.shift();
    if (this.locked.has(curr)) {
      hasLockedDescendant = true;
      descendants.push(curr);
    }
    queue.push(...this.children[curr]);
  }

  if (!hasLockedDescendant) return false;

  for (const descendant of descendants) {
    this.locked.delete(descendant);
  }
  this.locked.set(num, user);
  return true;
};
