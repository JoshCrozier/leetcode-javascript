/**
 * 2613. Beautiful Pairs
 * https://leetcode.com/problems/beautiful-pairs/
 * Difficulty: Hard
 *
 * You are given two 0-indexed integer arrays nums1 and nums2 of the same length. A pair
 * of indices (i,j) is called beautiful if|nums1[i] - nums1[j]| + |nums2[i] - nums2[j]|
 * is the smallest amongst all possible indices pairs where i < j.
 *
 * Return the beautiful pair. In the case that there are multiple beautiful pairs, return
 * the lexicographically smallest pair.
 *
 * Note that
 * - |x| denotes the absolute value of x.
 * - A pair of indices (i1, j1) is lexicographically smaller than (i2, j2) if i1 < i2
 *   or i1 == i2 and j1 < j2.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var beautifulPair = function(nums1, nums2) {
  const n = nums1.length;
  const max = Math.max(...nums1, ...nums2);
  const size = max + 1;

  const indices = Array.from({ length: n }, (_, i) => i)
    .sort((a, b) => nums1[a] === nums1[b] ? a - b : nums1[a] - nums1[b]);

  nums1.push(-100000001);
  nums2.push(100000000);

  const tree1 = new Array(2 * size).fill(-1);
  const tree2 = new Array(2 * size).fill(-1);
  let best = null;

  update(nums2[indices[0]], indices[0], 1);
  update(nums2[indices[0]], indices[0], -1);

  for (let i = 1; i < n; i++) {
    const index = indices[i];
    const y = nums2[index];

    const left = query(0, y, -1);
    const right = query(y, max, 1);

    best = select(index, left, right);

    update(y, index, -1);
    update(y, index, 1);
  }

  return best;

  function compare(i, j, dir) {
    if (j === -1) return i;
    if (i === -1) return j;
    const vi = -nums1[i] + dir * nums2[i];
    const vj = -nums1[j] + dir * nums2[j];
    return vi < vj || (vi === vj && i < j) ? i : j;
  }

  function update(position, index, dir) {
    position += size;
    const tree = dir === 1 ? tree2 : tree1;

    while (position > 0) {
      const cur = tree[position];
      const better = compare(index, cur, dir);
      if (better !== index) return;
      tree[position] = better;
      position = Math.floor(position / 2);
    }
  }

  function query(l, r, dir) {
    l += size;
    r += size;
    const tree = dir === 1 ? tree2 : tree1;
    let result = -1;

    while (l <= r) {
      if (l & 1) {
        result = compare(result, tree[l], dir);
        l++;
      }
      if (!(r & 1)) {
        result = compare(result, tree[r], dir);
        r--;
      }
      l = Math.floor(l / 2);
      r = Math.floor(r / 2);
    }

    return result;
  }

  function select(x, y, z) {
    const pairs = [];

    if (y !== -1) {
      const d = nums1[x] + nums2[x] - nums1[y] - nums2[y];
      pairs.push([d, [Math.min(x, y), Math.max(x, y)]]);
    }

    if (z !== -1) {
      const d = nums1[x] - nums2[x] - nums1[z] + nums2[z];
      pairs.push([d, [Math.min(x, z), Math.max(x, z)]]);
    }

    if (best !== null) {
      const d = Math.abs(
        nums1[best[0]] - nums1[best[1]]) + Math.abs(nums2[best[0]] - nums2[best[1]]
      );
      pairs.push([d, best]);
    } else {
      pairs.push([Infinity, [-1, -1]]);
    }

    return pairs.sort((a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0];
      if (a[1][0] !== b[1][0]) return a[1][0] - b[1][0];
      return a[1][1] - b[1][1];
    })[0][1];
  }
};
