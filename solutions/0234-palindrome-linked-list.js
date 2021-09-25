/**
 * 234. Palindrome Linked List
 * https://leetcode.com/problems/palindrome-linked-list/
 * Difficulty: Easy
 *
 * Given the `head` of a singly linked list, return `true` if it is a palindrome.
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let a = '', b = '';

  while (head) {
    a = a + head.val;
    b = head.val + b;
    head = head.next;
  }

  return a === b;
};
