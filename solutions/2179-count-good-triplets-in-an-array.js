/**
 * 2179. Count Good Triplets in an Array
 * https://leetcode.com/problems/count-good-triplets-in-an-array/
 * Difficulty: Hard
 *
 * You are given two 0-indexed arrays nums1 and nums2 of length n, both of which are permutations
 * of [0, 1, ..., n - 1].
 *
 * A good triplet is a set of 3 distinct values which are present in increasing order by position
 * both in nums1 and nums2. In other words, if we consider pos1v as the index of the value v in
 * nums1 and pos2v as the index of the value v in nums2, then a good triplet will be a set (x, y, z)
 * where 0 <= x, y, z <= n - 1, such that pos1x < pos1y < pos1z and pos2x < pos2y < pos2z.
 *
 * Return the total number of good triplets.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var goodTriplets = function(nums1, nums2) {
  const length = nums1.length;
  const pos1 = new Array(length);
  const pos2 = new Array(length);

  for (let i = 0; i < length; i++) {
    pos1[nums1[i]] = i;
    pos2[nums2[i]] = i;
  }

  const indices = new Array(length);
  for (let i = 0; i < length; i++) {
    indices[pos1[i]] = pos2[i];
  }

  const leftTree = new Array(length + 1).fill(0);
  const rightTree = new Array(length + 1).fill(0);

  let result = 0;
  for (let i = length - 1; i >= 0; i--) {
    const position = indices[i];
    update(rightTree, position, 1);
  }

  for (let i = 0; i < length; i++) {
    const position = indices[i];
    update(rightTree, position, -1);
    const smaller = query(leftTree, position);
    const larger = query(rightTree, length - 1) - query(rightTree, position);
    result += smaller * larger;
    update(leftTree, position, 1);
  }

  return result;

  function update(tree, index, delta) {
    for (let i = index + 1; i <= length; i += i & -i) {
      tree[i] += delta;
    }
  }

  function query(tree, index) {
    let sum = 0;
    for (let i = index + 1; i > 0; i -= i & -i) {
      sum += tree[i];
    }
    return sum;
  }
};
