/**
 * 708. Insert into a Sorted Circular Linked List
 * https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/
 * Difficulty: Medium
 *
 * Given a Circular Linked List node, which is sorted in non-descending order, write a
 * function to insert a value insertVal into the list such that it remains a sorted
 * circular list. The given node can be a reference to any single node in the list and
 * may not necessarily be the smallest value in the circular list.
 *
 * If there are multiple suitable places for insertion, you may choose any place to
 * insert the new value. After the insertion, the circular list should remain sorted.
 *
 * If the list is empty (i.e., the given node is null), you should create a new single
 * circular list and return the reference to that single node. Otherwise, you should
 * return the originally given node.
 */

/**
 * @param {_Node} head
 * @param {number} insertVal
 * @return {_Node}
 */
var insert = function(head, insertVal) {
  const newNode = new _Node(insertVal, null);

  if (!head) {
    newNode.next = newNode;
    return newNode;
  }

  if (head.next === head) {
    newNode.next = head;
    head.next = newNode;
    return head;
  }

  let prev = head;
  let curr = head.next;
  do {
    if ((prev.val <= insertVal && insertVal <= curr.val)
        || (prev.val > curr.val && (insertVal >= prev.val || insertVal <= curr.val))) {
      break;
    }
    prev = curr;
    curr = curr.next;
  } while (prev !== head);

  prev.next = newNode;
  newNode.next = curr;

  return head;
};
