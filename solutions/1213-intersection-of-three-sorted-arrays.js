/**
 * 1213. Intersection of Three Sorted Arrays
 * https://leetcode.com/problems/intersection-of-three-sorted-arrays/
 * Difficulty: Easy
 *
 * Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order,
 * return a sorted array of only the integers that appeared in all three arrays.
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
  let i = 0;
  let j = 0;
  let k = 0;
  const result = [];

  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      result.push(arr1[i]);
      i++;
      j++;
      k++;
    } else {
      const minValue = Math.min(arr1[i], arr2[j], arr3[k]);
      if (arr1[i] === minValue) i++;
      if (arr2[j] === minValue) j++;
      if (arr3[k] === minValue) k++;
    }
  }

  return result;
};
