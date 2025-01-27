/**
 * 1535. Find the Winner of an Array Game
 * https://leetcode.com/problems/find-the-winner-of-an-array-game/
 * Difficulty: Medium
 *
 * Given an integer array arr of distinct integers and an integer k.
 *
 * A game will be played between the first two elements of the array (i.e. arr[0] and arr[1]).
 * In each round of the game, we compare arr[0] with arr[1], the larger integer wins and
 * remains at position 0, and the smaller integer moves to the end of the array. The game
 * ends when an integer wins k consecutive rounds.
 *
 * Return the integer which will win the game.
 *
 * It is guaranteed that there will be a winner of the game.
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
  let result = arr[0];

  for (let i = 1, count = 0; i < arr.length && count < k; i++) {
    if (result < arr[i]) {
      result = arr[i];
      count = 0;
    }
    count++;
  }

  return result;
};
