/**
 * 3062. Winner of the Linked List Game
 * https://leetcode.com/problems/winner-of-the-linked-list-game/
 * Difficulty: Easy
 *
 * You are given the head of a linked list of even length containing integers.
 *
 * Each odd-indexed node contains an odd integer and each even-indexed node contains an
 * even integer.
 *
 * We call each even-indexed node and its next node a pair, e.g., the nodes with indices
 * 0 and 1 are a pair, the nodes with indices 2 and 3 are a pair, and so on.
 *
 * For every pair, we compare the values of the nodes in the pair:
 * - If the odd-indexed node is higher, the "Odd" team gets a point.
 * - If the even-indexed node is higher, the "Even" team gets a point.
 *
 * Return the name of the team with the higher points, if the points are equal, return "Tie".
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {string}
 */
var gameResult = function(head) {
  let evenScore = 0;
  let oddScore = 0;
  let currentNode = head;

  while (currentNode && currentNode.next) {
    const evenValue = currentNode.val;
    const oddValue = currentNode.next.val;

    if (evenValue > oddValue) {
      evenScore++;
    } else if (oddValue > evenValue) {
      oddScore++;
    }

    currentNode = currentNode.next.next;
  }

  if (evenScore > oddScore) {
    return 'Even';
  } else if (oddScore > evenScore) {
    return 'Odd';
  } else {
    return 'Tie';
  }
};
