/**
 * 1834. Single-Threaded CPU
 * https://leetcode.com/problems/single-threaded-cpu/
 * Difficulty: Medium
 *
 * You are given n tasks labeled from 0 to n - 1 represented by a 2D integer array tasks,
 * where tasks[i] = [enqueueTimei, processingTimei] means that the ith task will be available
 * to process at enqueueTimei and will take processingTimei to finish processing.
 *
 * You have a single-threaded CPU that can process at most one task at a time and will act in
 * the following way:
 * - If the CPU is idle and there are no available tasks to process, the CPU remains idle.
 * - If the CPU is idle and there are available tasks, the CPU will choose the one with the shortest
 *   processing time. If multiple tasks have the same shortest processing time, it will choose the
 *   task with the smallest index.
 * - Once a task is started, the CPU will process the entire task without stopping.
 * - The CPU can finish a task then start a new one instantly.
 *
 * Return the order in which the CPU will process the tasks.
 */

/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
  const indexedTasks = tasks.map(([enqueue, process], index) => ({ enqueue, process, index }))
    .sort((a, b) => a.enqueue - b.enqueue);

  const result = [];
  const availableTasks = new PriorityQueue((a, b) => a.process - b.process || a.index - b.index);
  let currentTime = indexedTasks[0].enqueue;
  let taskIndex = 0;

  while (result.length < tasks.length) {
    while (taskIndex < tasks.length && indexedTasks[taskIndex].enqueue <= currentTime) {
      availableTasks.push(indexedTasks[taskIndex]);
      taskIndex++;
    }

    if (availableTasks.size() > 0) {
      const task = availableTasks.pop();
      result.push(task.index);
      currentTime += task.process;
    } else {
      currentTime = indexedTasks[taskIndex].enqueue;
    }
  }

  return result;
};
