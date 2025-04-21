/**
 * 1600. Throne Inheritance
 * https://leetcode.com/problems/throne-inheritance/
 * Difficulty: Medium
 *
 * A kingdom consists of a king, his children, his grandchildren, and so on. Every once in a while,
 * someone in the family dies or a child is born.
 *
 * The kingdom has a well-defined order of inheritance that consists of the king as the first
 * member. Let's define the recursive function Successor(x, curOrder), which given a person x and
 * the inheritance order so far, returns who should be the next person after x in the order of
 * inheritance.
 *
 * For example, assume we have a kingdom that consists of the king, his children Alice and Bob
 * (Alice is older than Bob), and finally Alice's son Jack.
 *
 * 1. In the beginning, curOrder will be ["king"].
 * 2. Calling Successor(king, curOrder) will return Alice, so we append to curOrder to
 *    get ["king", "Alice"].
 * 3. Calling Successor(Alice, curOrder) will return Jack, so we append to curOrder to
 *    get ["king", "Alice", "Jack"].
 * 4. Calling Successor(Jack, curOrder) will return Bob, so we append to curOrder to
 *    get ["king", "Alice", "Jack", "Bob"].
 * 5. Calling Successor(Bob, curOrder) will return null. Thus the order of inheritance
 *    will be ["king", "Alice", "Jack", "Bob"].
 *
 * Using the above function, we can always obtain a unique order of inheritance.
 *
 * Implement the ThroneInheritance class:
 * - ThroneInheritance(string kingName) Initializes an object of the ThroneInheritance class.
 *   The name of the king is given as part of the constructor.
 * - void birth(string parentName, string childName) Indicates that parentName gave birth
 *   to childName.
 * - void death(string name) Indicates the death of name. The death of the person doesn't
 *   affect the Successor function nor the current inheritance order. You can treat it as
 *   just marking the person as dead.
 * - string[] getInheritanceOrder() Returns a list representing the current order of inheritance
 *   excluding dead people.
 */

/**
 * @param {string} kingName
 */
var ThroneInheritance = function(kingName) {
  this.king = kingName;
  this.familyTree = new Map();
  this.deceased = new Set();
};

/**
 * @param {string} parentName
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function(parentName, childName) {
  if (!this.familyTree.has(parentName)) {
    this.familyTree.set(parentName, []);
  }
  this.familyTree.get(parentName).push(childName);
};

/**
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function(name) {
  this.deceased.add(name);
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function() {
  const result = [];
  const traverse = (person) => {
    if (!this.deceased.has(person)) {
      result.push(person);
    }
    const children = this.familyTree.get(person) || [];
    for (const child of children) {
      traverse(child);
    }
  };
  traverse(this.king);
  return result;
};
