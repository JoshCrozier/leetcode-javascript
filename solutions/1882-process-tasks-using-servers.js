/**
 * 1882. Process Tasks Using Servers
 * https://leetcode.com/problems/process-tasks-using-servers/
 * Difficulty: Medium
 *
 * You are given two 0-indexed integer arrays servers and tasks of lengths n and m respectively.
 * servers[i] is the weight of the ith server, and tasks[j] is the time needed to process the
 * jth task in seconds.
 *
 * Tasks are assigned to the servers using a task queue. Initially, all servers are free, and
 * the queue is empty.
 *
 * At second j, the jth task is inserted into the queue (starting with the 0th task being inserted
 * at second 0). As long as there are free servers and the queue is not empty, the task in the front
 * of the queue will be assigned to a free server with the smallest weight, and in case of a tie,
 * it is assigned to a free server with the smallest index.
 *
 * If there are no free servers and the queue is not empty, we wait until a server becomes free
 * and immediately assign the next task. If multiple servers become free at the same time, then
 * multiple tasks from the queue will be assigned in order of insertion following the weight and
 * index priorities above.
 *
 * A server that is assigned task j at second t will be free again at second t + tasks[j].
 *
 * Build an array ans of length m, where ans[j] is the index of the server the jth task will
 * be assigned to.
 *
 * Return the array ans.
 */

/**
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
var assignTasks = function(servers, tasks) {
  const serverHeap = new PriorityQueue((a, b) => a[0] * 1000000 + a[1] - (b[0] * 1000000 + b[1]));
  const busyHeap = new PriorityQueue((a, b) => a[0] - b[0]);
  const result = new Array(tasks.length);

  for (let i = 0; i < servers.length; i++) {
    serverHeap.enqueue([servers[i], i]);
  }

  let time = 0;
  let taskIndex = 0;

  while (taskIndex < tasks.length) {
    time = Math.max(time, taskIndex);

    while (!busyHeap.isEmpty() && busyHeap.front()[0] <= time) {
      const [, weight, index] = busyHeap.dequeue();
      serverHeap.enqueue([weight, index]);
    }

    while (serverHeap.size() && taskIndex < tasks.length && taskIndex <= time) {
      const [weight, index] = serverHeap.dequeue();
      result[taskIndex] = index;
      busyHeap.enqueue([time + tasks[taskIndex], weight, index]);
      taskIndex++;
    }

    if (serverHeap.isEmpty() && taskIndex < tasks.length) {
      const [freeTime, weight, index] = busyHeap.dequeue();
      time = freeTime;
      serverHeap.enqueue([weight, index]);
    }
  }

  return result;
};
