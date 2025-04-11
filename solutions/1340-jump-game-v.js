/**
 * 1340. Jump Game V
 * https://leetcode.com/problems/jump-game-v/
 * Difficulty: Hard
 *
 * Given an array of integers arr and an integer d. In one step you can jump from index i to index:
 * - i + x where: i + x < arr.length and  0 < x <= d.
 * - i - x where: i - x >= 0 and  0 < x <= d.
 *
 * In addition, you can only jump from index i to index j if arr[i] > arr[j] and arr[i] > arr[k] for
 * all indices k between i and j (More formally min(i, j) < k < max(i, j)).
 *
 * You can choose any index of the array and start jumping. Return the maximum number of indices you
 * can visit.
 *
 * Notice that you can not jump outside of the array at any time.
 */

/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function(arr, d) {
  const n = arr.length;
  const memo = new Array(n).fill(0);
  let result = 1;

  for (let i = 0; i < n; i++) {
    result = Math.max(result, exploreJumps(i));
  }

  return result;

  function exploreJumps(index) {
    if (memo[index]) return memo[index];

    let maxJumpsFromHere = 1;

    for (let offset = 1; offset <= d; offset++) {
      const right = index + offset;
      if (right < n && arr[index] > arr[right]) {
        maxJumpsFromHere = Math.max(maxJumpsFromHere, 1 + exploreJumps(right));
      } else {
        break;
      }
    }

    for (let offset = 1; offset <= d; offset++) {
      const left = index - offset;
      if (left >= 0 && arr[index] > arr[left]) {
        maxJumpsFromHere = Math.max(maxJumpsFromHere, 1 + exploreJumps(left));
      } else {
        break;
      }
    }

    memo[index] = maxJumpsFromHere;
    return maxJumpsFromHere;
  }
};
