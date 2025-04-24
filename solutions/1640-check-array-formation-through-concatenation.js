/**
 * 1640. Check Array Formation Through Concatenation
 * https://leetcode.com/problems/check-array-formation-through-concatenation/
 * Difficulty: Easy
 *
 * You are given an array of distinct integers arr and an array of integer arrays pieces,
 * where the integers in pieces are distinct. Your goal is to form arr by concatenating
 * the arrays in pieces in any order. However, you are not allowed to reorder the integers
 * in each array pieces[i].
 *
 * Return true if it is possible to form the array arr from pieces. Otherwise, return false.
 */

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  const numberToPiece = new Map();
  for (const piece of pieces) {
    numberToPiece.set(piece[0], piece);
  }

  let index = 0;
  while (index < arr.length) {
    const currentNumber = arr[index];
    if (!numberToPiece.has(currentNumber)) {
      return false;
    }
    const piece = numberToPiece.get(currentNumber);
    for (const num of piece) {
      if (arr[index] !== num) {
        return false;
      }
      index++;
    }
  }

  return true;
};
