/**
 * 686. Repeated String Match
 * https://leetcode.com/problems/repeated-string-match/
 * Difficulty: Easy
 *
 * Given two strings A and B, find the minimum number of times A has to be
 * repeated such that B is a substring of it. If no such solution, return -1.
 *
 * For example, with A = "abcd" and B = "cdabcdab".
 *
 * Return 3, because by repeating A three times (“abcdabcdabcd”), B is a
 * substring of it; and B is not a substring of A repeated two times ("abcdabcd").
 */

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  const length = Math.ceil(B.length / A.length);
  if (A.repeat(length).includes(B)) return length;
  if ((A.repeat(length) + A).includes(B)) return length + 1;
  return -1;
};
