/**
 * 1354. Construct Target Array With Multiple Sums
 * https://leetcode.com/problems/construct-target-array-with-multiple-sums/
 * Difficulty: Hard
 *
 * You are given an array target of n integers. From a starting array arr consisting of n 1's,
 * you may perform the following procedure:
 * - let x be the sum of all elements currently in your array.
 * - choose index i, such that 0 <= i < n and set the value of arr at index i to x.
 * - You may repeat this procedure as many times as needed.
 *
 * Return true if it is possible to construct the target array from arr, otherwise, return false.
 */

/**
 * @param {number[]} target
 * @return {boolean}
 */
function isPossible(target) {
  let totalSum = target.reduce((sum, num) => sum + num, 0);
  const heap = [...target];

  buildHeap();

  while (heap[0] > 1) {
    const largest = heap[0];
    totalSum -= largest;
    if (totalSum < 1) return false;
    const newValue = largest - Math.floor((largest - 1) / totalSum) * totalSum;
    if (newValue === largest) return false;
    totalSum += newValue;
    heap[0] = newValue;
    heapifyDown(0);
  }

  return true;

  function heapifyDown(index) {
    let largest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    if (left < heap.length && heap[left] > heap[largest]) largest = left;
    if (right < heap.length && heap[right] > heap[largest]) largest = right;
    if (largest !== index) {
      [heap[index], heap[largest]] = [heap[largest], heap[index]];
      heapifyDown(largest);
    }
  }

  function buildHeap() {
    for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
      heapifyDown(i);
    }
  }
}
