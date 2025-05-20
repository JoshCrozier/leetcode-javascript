/**
 * 2326. Spiral Matrix IV
 * https://leetcode.com/problems/spiral-matrix-iv/
 * Difficulty: Medium
 *
 * You are given two integers m and n, which represent the dimensions of a matrix.
 *
 * You are also given the head of a linked list of integers.
 *
 * Generate an m x n matrix that contains the integers in the linked list presented in spiral
 * order (clockwise), starting from the top-left of the matrix. If there are remaining empty
 * spaces, fill them with -1.
 *
 * Return the generated matrix.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
  const matrix = new Array(m).fill().map(() => new Array(n).fill(-1));
  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;
  let current = head;

  while (top <= bottom && left <= right && current) {
    for (let col = left; col <= right && current; col++) {
      matrix[top][col] = current.val;
      current = current.next;
    }
    top++;

    for (let row = top; row <= bottom && current; row++) {
      matrix[row][right] = current.val;
      current = current.next;
    }
    right--;

    for (let col = right; col >= left && current; col--) {
      matrix[bottom][col] = current.val;
      current = current.next;
    }
    bottom--;

    for (let row = bottom; row >= top && current; row--) {
      matrix[row][left] = current.val;
      current = current.next;
    }
    left++;
  }

  return matrix;
};
