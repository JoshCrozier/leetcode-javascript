/**
 * 1889. Minimum Space Wasted From Packaging
 * https://leetcode.com/problems/minimum-space-wasted-from-packaging/
 * Difficulty: Hard
 *
 * You have n packages that you are trying to place in boxes, one package in each box. There are
 * m suppliers that each produce boxes of different sizes (with infinite supply). A package can
 * be placed in a box if the size of the package is less than or equal to the size of the box.
 *
 * The package sizes are given as an integer array packages, where packages[i] is the size of the
 * ith package. The suppliers are given as a 2D integer array boxes, where boxes[j] is an array
 * of box sizes that the jth supplier produces.
 *
 * You want to choose a single supplier and use boxes from them such that the total wasted space
 * is minimized. For each package in a box, we define the space wasted to be size of the box - size
 * of the package. The total wasted space is the sum of the space wasted in all the boxes.
 * - For example, if you have to fit packages with sizes [2,3,5] and the supplier offers boxes of
 *   sizes [4,8], you can fit the packages of size-2 and size-3 into two boxes of size-4 and the
 *   package with size-5 into a box of size-8. This would result in a waste
 *   of (4-2) + (4-3) + (8-5) = 6.
 *
 * Return the minimum total wasted space by choosing the box supplier optimally, or -1 if it is
 * impossible to fit all the packages inside boxes. Since the answer may be large, return it
 * modulo 109 + 7.
 */

/**
 * @param {number[]} packages
 * @param {number[][]} boxes
 * @return {number}
 */
var minWastedSpace = function(packages, boxes) {
  const modulo = 1e9 + 7;
  packages.sort((a, b) => a - b);
  let minWaste = BigInt(2) ** BigInt(60);
  const n = packages.length;

  const prefixSums = new Array(n + 1).fill(BigInt(0));
  for (let i = 0; i < n; i++) {
    prefixSums[i + 1] = prefixSums[i] + BigInt(packages[i]);
  }

  for (const supplier of boxes) {
    supplier.sort((a, b) => a - b);
    if (supplier[supplier.length - 1] < packages[n - 1]) continue;

    let waste = BigInt(0);
    let packageIndex = 0;

    for (const box of supplier) {
      if (packageIndex >= n) break;
      const upperBound = binarySearch(packages, box, packageIndex);
      if (upperBound > packageIndex) {
        const count = BigInt(upperBound - packageIndex);
        waste += count * BigInt(box) - (prefixSums[upperBound] - prefixSums[packageIndex]);
        packageIndex = upperBound;
      }
    }

    if (packageIndex === n) {
      minWaste = minWaste < waste ? minWaste : waste;
    }
  }

  return minWaste === BigInt(2) ** BigInt(60) ? -1 : Number(minWaste % BigInt(modulo));
};

function binarySearch(arr, target, start) {
  let left = start;
  let right = arr.length;

  while (left < right) {
    const mid = (left + right) >> 1;
    if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
