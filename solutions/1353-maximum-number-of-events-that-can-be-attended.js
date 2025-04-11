/**
 * 1353. Maximum Number of Events That Can Be Attended
 * https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/
 * Difficulty: Medium
 *
 * You are given an array of events where events[i] = [startDayi, endDayi]. Every event i starts
 * at startDayi and ends at endDayi.
 *
 * You can attend an event i at any day d where startTimei <= d <= endTimei. You can only attend
 * one event at any time d.
 *
 * Return the maximum number of events you can attend.
 */

/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
  events.sort((a, b) => a[0] - b[0]);
  const heap = [];
  let result = 0;
  let eventIndex = 0;
  let currentDay = 1;

  while (eventIndex < events.length || heap.length) {
    while (eventIndex < events.length && events[eventIndex][0] <= currentDay) {
      heapPush(heap, events[eventIndex][1]);
      eventIndex++;
    }

    while (heap.length && heap[0] < currentDay) {
      heapPop(heap);
    }

    if (heap.length) {
      heapPop(heap);
      result++;
    }

    currentDay++;
  }

  function heapPush(arr, val) {
    arr.push(val);
    let i = arr.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (arr[parent] <= arr[i]) break;
      [arr[parent], arr[i]] = [arr[i], arr[parent]];
      i = parent;
    }
  }

  function heapPop(arr) {
    const result = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();
    let i = 0;
    while (true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let smallest = i;
      if (left < arr.length && arr[left] < arr[smallest]) smallest = left;
      if (right < arr.length && arr[right] < arr[smallest]) smallest = right;
      if (smallest === i) break;
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      i = smallest;
    }
    return result;
  }

  return result;
};
