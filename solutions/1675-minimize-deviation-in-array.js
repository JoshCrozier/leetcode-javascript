/**
 * 1675. Minimize Deviation in Array
 * https://leetcode.com/problems/minimize-deviation-in-array/
 * Difficulty: Hard
 *
 * You are given an array nums of n positive integers.
 *
 * You can perform two types of operations on any element of the array any number of times:
 * - If the element is even, divide it by 2.
 *   - For example, if the array is [1,2,3,4], then you can do this operation on the last element,
 *     and the array will be [1,2,3,2].
 * - If the element is odd, multiply it by 2.
 *   - For example, if the array is [1,2,3,4], then you can do this operation on the first element,
 *     and the array will be [2,2,3,4].
 *
 * The deviation of the array is the maximum difference between any two elements in the array.
 *
 * Return the minimum deviation the array can have after performing some number of operations.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function(nums) {
  const heap = [];
  let minElement = Infinity;

  for (const num of nums) {
    const value = num % 2 ? num * 2 : num;
    heap.push(value);
    minElement = Math.min(minElement, value);
  }

  for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
    siftDown(i);
  }

  let minDeviation = heap[0] - minElement;

  while (heap[0] % 2 === 0) {
    const maxElement = heap[0];
    heap[0] = maxElement / 2;
    minElement = Math.min(minElement, heap[0]);
    siftDown(0);
    minDeviation = Math.min(minDeviation, heap[0] - minElement);
  }

  return minDeviation;

  function siftDown(index) {
    while (2 * index + 1 < heap.length) {
      let maxChild = 2 * index + 1;
      if (maxChild + 1 < heap.length && heap[maxChild + 1] > heap[maxChild]) {
        maxChild++;
      }
      if (heap[index] < heap[maxChild]) {
        [heap[index], heap[maxChild]] = [heap[maxChild], heap[index]];
        index = maxChild;
      } else {
        break;
      }
    }
  }
};
