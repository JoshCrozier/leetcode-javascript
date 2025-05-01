/**
 * 1850. Minimum Adjacent Swaps to Reach the Kth Smallest Number
 * https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/
 * Difficulty: Medium
 *
 * You are given a string num, representing a large integer, and an integer k.
 *
 * We call some integer wonderful if it is a permutation of the digits in num and is greater in
 * value than num. There can be many wonderful integers. However, we only care about the
 * smallest-valued ones.
 * - For example, when num = "5489355142":
 *   - The 1st smallest wonderful integer is "5489355214".
 *   - The 2nd smallest wonderful integer is "5489355241".
 *   - The 3rd smallest wonderful integer is "5489355412".
 *   - The 4th smallest wonderful integer is "5489355421".
 *
 * Return the minimum number of adjacent digit swaps that needs to be applied to num to reach
 * the kth smallest wonderful integer.
 *
 * The tests are generated in such a way that kth smallest wonderful integer exists.
 */

/**
 * @param {string} num
 * @param {number} k
 * @return {number}
 */
var getMinSwaps = function(num, k) {
  const original = num.split('');
  const target = num.split('');

  for (let i = 0; i < k; i++) {
    nextPermutation(target);
  }

  let result = 0;
  for (let i = 0; i < original.length; i++) {
    if (original[i] !== target[i]) {
      let j = i + 1;
      while (j < original.length && original[j] !== target[i]) j++;
      while (j > i) {
        [original[j], original[j - 1]] = [original[j - 1], original[j]];
        result++;
        j--;
      }
    }
  }

  return result;

  function nextPermutation(arr) {
    let i = arr.length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) i--;
    if (i < 0) return false;

    let j = arr.length - 1;
    while (arr[j] <= arr[i]) j--;

    [arr[i], arr[j]] = [arr[j], arr[i]];

    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
    return true;
  }
};
