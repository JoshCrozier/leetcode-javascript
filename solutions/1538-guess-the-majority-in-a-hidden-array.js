/**
 * 1538. Guess the Majority in a Hidden Array
 * https://leetcode.com/problems/guess-the-majority-in-a-hidden-array/
 * Difficulty: Medium
 *
 * We have an integer array nums, where all the integers in nums are 0 or 1. You will not
 * be given direct access to the array, instead, you will have an API ArrayReader which
 * have the following functions:
 * - int query(int a, int b, int c, int d): where 0 <= a < b < c < d < ArrayReader.length().
 *   The function returns the distribution of the value of the 4 elements and returns:
 *   - 4 : if the values of the 4 elements are the same (0 or 1).
 *   - 2 : if three elements have a value equal to 0 and one element has value equal to 1 or
 *     vice versa.
 *   - 0 : if two element have a value equal to 0 and two elements have a value equal to 1.
 * - int length(): Returns the size of the array.
 *
 * You are allowed to call query() 2 * n times at most where n is equal to ArrayReader.length().
 *
 * Return any index of the most frequent value in nums, in case of tie, return -1.
 */

/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *     // Compares 4 different elements in the array
 *     // return 4 if the values of the 4 elements are the same (0 or 1).
 *     // return 2 if three elements have a value equal to 0 and one element has value equal
 *     // to 1 or vice versa.
 *     // return 0 : if two element have a value equal to 0 and two elements have a value
 *     // equal to 1.
 *     @param {number} a, b, c, d
 *     @return {number}
 *     this.query = function(a, b, c, d) {
 *         ...
 *     };
 *
 *     // Returns the length of the array
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @return {number}
 */
var guessMajority = function(reader) {
  const baseQuery = reader.query(0, 1, 2, 3);
  const n = reader.length();
  let sameAsZeroCount = 1;
  let differentIndex = -1;

  for (let i = 4; i < n; i++) {
    const currentQuery = reader.query(1, 2, 3, i);
    if (baseQuery === currentQuery) {
      sameAsZeroCount++;
    } else {
      differentIndex = i;
    }
  }

  const referenceQuery = reader.query(1, 2, 3, 4);
  checkElement([0, 2, 3, 4], 1);
  checkElement([0, 1, 3, 4], 2);
  checkElement([0, 1, 2, 4], 3);

  const differentCount = n - sameAsZeroCount;
  if (sameAsZeroCount > differentCount) {
    return 0;
  } else if (sameAsZeroCount === differentCount) {
    return -1;
  } else {
    return differentIndex;
  }

  function checkElement(indices, elementIndex) {
    if (referenceQuery === reader.query(...indices)) {
      sameAsZeroCount++;
    } else {
      differentIndex = elementIndex;
    }
  }
};
