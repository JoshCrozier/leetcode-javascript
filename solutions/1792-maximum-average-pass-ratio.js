/**
 * 1792. Maximum Average Pass Ratio
 * https://leetcode.com/problems/maximum-average-pass-ratio/
 * Difficulty: Medium
 *
 * There is a school that has classes of students and each class will be having a final exam.
 * You are given a 2D integer array classes, where classes[i] = [passi, totali]. You know
 * beforehand that in the ith class, there are totali total students, but only passi number
 * of students will pass the exam.
 *
 * You are also given an integer extraStudents. There are another extraStudents brilliant
 * students that are guaranteed to pass the exam of any class they are assigned to. You want
 * to assign each of the extraStudents students to a class in a way that maximizes the average
 * pass ratio across all the classes.
 *
 * The pass ratio of a class is equal to the number of students of the class that will pass
 * the exam divided by the total number of students of the class. The average pass ratio is
 * the sum of pass ratios of all the classes divided by the number of the classes.
 *
 * Return the maximum possible average pass ratio after assigning the extraStudents students.
 * Answers within 10-5 of the actual answer will be accepted.
 */

/**
* @param {number[][]} classes
* @param {number} extraStudents
* @return {number}
*/
var maxAverageRatio = function(classes, extraStudents) {
  const maxHeap = [];

  for (const [pass, total] of classes) {
    const profit = getProfit(pass, total);
    maxHeap.push([profit, pass, total]);
  }

  heapify();

  for (let i = 0; i < extraStudents; i++) {
    const [_, pass, total] = extractMax();
    const newPass = pass + 1;
    const newTotal = total + 1;
    const newProfit = getProfit(newPass, newTotal);
    insert([newProfit, newPass, newTotal]);
  }

  let sumRatio = 0;
  for (const [_, pass, total] of maxHeap) {
    sumRatio += pass / total;
  }

  return sumRatio / classes.length;

  function getProfit(pass, total) {
    return (pass + 1) / (total + 1) - pass / total;
  }

  function heapify() {
    for (let i = Math.floor(maxHeap.length / 2) - 1; i >= 0; i--) {
      siftDown(i);
    }
  }

  function siftDown(i) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;

    if (left < maxHeap.length && maxHeap[left][0] > maxHeap[largest][0]) {
      largest = left;
    }

    if (right < maxHeap.length && maxHeap[right][0] > maxHeap[largest][0]) {
      largest = right;
    }

    if (largest !== i) {
      [maxHeap[i], maxHeap[largest]] = [maxHeap[largest], maxHeap[i]];
      siftDown(largest);
    }
  }

  function extractMax() {
    const max = maxHeap[0];
    const last = maxHeap.pop();

    if (maxHeap.length > 0) {
      maxHeap[0] = last;
      siftDown(0);
    }

    return max;
  }

  function insert(item) {
    maxHeap.push(item);

    let i = maxHeap.length - 1;
    let parent = Math.floor((i - 1) / 2);

    while (i > 0 && maxHeap[i][0] > maxHeap[parent][0]) {
      [maxHeap[i], maxHeap[parent]] = [maxHeap[parent], maxHeap[i]];
      i = parent;
      parent = Math.floor((i - 1) / 2);
    }
  }
};
