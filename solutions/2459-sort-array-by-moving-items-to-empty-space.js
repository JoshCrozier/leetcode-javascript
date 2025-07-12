/**
 * 2459. Sort Array by Moving Items to Empty Space
 * https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space/
 * Difficulty: Hard
 *
 * You are given an integer array nums of size n containing each element from 0 to n - 1
 * (inclusive). Each of the elements from 1 to n - 1 represents an item, and the element
 * 0 represents an empty space.
 *
 * In one operation, you can move any item to the empty space. nums is considered to be sorted
 * if the numbers of all the items are in ascending order and the empty space is either at the
 * beginning or at the end of the array.
 *
 * For example, if n = 4, nums is sorted if:
 * - nums = [0,1,2,3] or
 * - nums = [1,2,3,0]
 *
 * ...and considered to be unsorted otherwise.
 *
 * Return the minimum number of operations needed to sort nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sortArray = function(nums) {
  const n = nums.length;
  const positions = new Array(n);

  for (let i = 0; i < n; i++) {
    positions[nums[i]] = i;
  }

  return Math.min(
    permute([...positions], 0),
    permute([...positions], 1)
  );

  function permute(pos, shift) {
    let count = 0;
    let next = 1;

    while (next < n) {
      if (pos[0] === shift * (n - 1)) {
        while (pos[next] === next - shift) {
          next++;
          if (next === n) return count;
        }
        var targetIndex = next;
      } else {
        var targetIndex = pos[0] + shift;
      }

      [pos[0], pos[targetIndex]] = [pos[targetIndex], pos[0]];
      count++;
    }

    return count;
  }
};
