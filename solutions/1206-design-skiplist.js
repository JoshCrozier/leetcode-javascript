/**
 * 1206. Design Skiplist
 * https://leetcode.com/problems/design-skiplist/
 * Difficulty: Hard
 *
 * Design a Skiplist without using any built-in libraries.
 *
 * A skiplist is a data structure that takes O(log(n)) time to add, erase and search. Comparing with
 * treap and red-black tree which has the same function and performance, the code length of Skiplist
 * can be comparatively short and the idea behind Skiplists is just simple linked lists.
 *
 * For example, we have a Skiplist containing [30,40,50,60,70,90] and we want to add 80 and 45 into
 * it. The Skiplist works this way:
 *
 * You can see there are many layers in the Skiplist. Each layer is a sorted linked list. With the
 * help of the top layers, add, erase and search can be faster than O(n). It can be proven that the
 * average time complexity for each operation is O(log(n)) and space complexity is O(n).
 *
 * See more about Skiplist: https://en.wikipedia.org/wiki/Skip_list
 * Implement the Skiplist class:
 * - Skiplist() Initializes the object of the skiplist.
 * - bool search(int target) Returns true if the integer target exists in the Skiplist or false
 *   otherwise.
 * - void add(int num) Inserts the value num into the SkipList.
 * - bool erase(int num) Removes the value num from the Skiplist and returns true. If num does not
 *   exist in the Skiplist, do nothing and return false. If there exist multiple num values,
 *   removing any one of them is fine.
 */

var Skiplist = function() {
  this.values = {};
};

/**
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function(target) {
  return target in this.values;
};

/**
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function(num) {
  this.values[num] = (this.values[num] ?? 0) + 1;
};

/**
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function(num) {
  if (!(num in this.values)) {
    return false;
  }
  if (!--this.values[num]) {
    delete this.values[num];
  }
  return true;
};
