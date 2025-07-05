/**
 * 1634. Add Two Polynomials Represented as Linked Lists
 * https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/
 * Difficulty: Medium
 *
 * A polynomial linked list is a special type of linked list where every node represents a
 * term in a polynomial expression.
 *
 * Each node has three attributes:
 * - coefficient: an integer representing the number multiplier of the term. The coefficient
 *   of the term 9x4 is 9.
 * - power: an integer representing the exponent. The power of the term 9x4 is 4.
 * - next: a pointer to the next node in the list, or null if it is the last node of the list.
 *
 * For example, the polynomial 5x3 + 4x - 7 is represented by the polynomial linked list
 * illustrated below:
 *
 * The polynomial linked list must be in its standard form: the polynomial must be in strictly
 * descending order by its power value. Also, terms with a coefficient of 0 are omitted.
 *
 * Given two polynomial linked list heads, poly1 and poly2, add the polynomials together
 * and return the head of the sum of the polynomials.
 *
 * PolyNode format:
 * The input/output format is as a list of n nodes, where each node is represented as
 * its [coefficient, power]. For example, the polynomial 5x3 + 4x - 7 would be represented
 * as: [[5,3],[4,1],[-7,0]].
 */

/**
 * Definition for polynomial singly-linked list.
 * function PolyNode(x=0, y=0, next=null) {
 *     this.coefficient = x;
 *     this.power = y;
 *     this.next = next;
 * }
 */

/**
 * @param {PolyNode} poly1
 * @param {PolyNode} poly2
 * @return {PolyNode}
 */
var addPoly = function(poly1, poly2) {
  const dummyHead = new PolyNode();
  let current = dummyHead;
  let pointer1 = poly1;
  let pointer2 = poly2;

  while (pointer1 || pointer2) {
    let coefficient = 0;
    let power = 0;

    if (!pointer1) {
      coefficient = pointer2.coefficient;
      power = pointer2.power;
      pointer2 = pointer2.next;
    } else if (!pointer2) {
      coefficient = pointer1.coefficient;
      power = pointer1.power;
      pointer1 = pointer1.next;
    } else if (pointer1.power > pointer2.power) {
      coefficient = pointer1.coefficient;
      power = pointer1.power;
      pointer1 = pointer1.next;
    } else if (pointer2.power > pointer1.power) {
      coefficient = pointer2.coefficient;
      power = pointer2.power;
      pointer2 = pointer2.next;
    } else {
      coefficient = pointer1.coefficient + pointer2.coefficient;
      power = pointer1.power;
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
    }

    if (coefficient !== 0) {
      current.next = new PolyNode(coefficient, power);
      current = current.next;
    }
  }

  return dummyHead.next;
};
