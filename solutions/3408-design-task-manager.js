/**
 * 3408. Design Task Manager
 * https://leetcode.com/problems/design-task-manager/
 * Difficulty: Medium
 *
 * There is a task management system that allows users to manage their tasks, each associated
 * with a priority. The system should efficiently handle adding, modifying, executing, and
 * removing tasks.
 *
 * Implement the TaskManager class:
 * - TaskManager(vector<vector<int>>& tasks) initializes the task manager with a list of
 *   user-task-priority triples. Each element in the input list is of the form [userId,
 *   taskId, priority], which adds a task to the specified user with the given priority.
 * - void add(int userId, int taskId, int priority) adds a task with the specified taskId
 *   and priority to the user with userId. It is guaranteed that taskId does not exist in
 *   the system.
 * - void edit(int taskId, int newPriority) updates the priority of the existing taskId to
 *   newPriority. It is guaranteed that taskId exists in the system.
 * - void rmv(int taskId) removes the task identified by taskId from the system. It is
 *   guaranteed that taskId exists in the system.
 * - int execTop() executes the task with the highest priority across all users. If there
 *   are multiple tasks with the same highest priority, execute the one with the highest
 *   taskId. After executing, the taskId is removed from the system. Return the userId
 *   associated with the executed task. If no tasks are available, return -1.
 *
 * Note that a user may be assigned multiple tasks.
 */

/**
 * @param {number[][]} tasks
 */
var TaskManager = function(tasks) {
  this.taskRegistry = {};
  this.priorityHeap = new PriorityQueue((a, b) => {
    return a.priority !== b.priority ? b.priority - a.priority : b.taskId - a.taskId;
  });

  for (const [userId, taskId, priority] of tasks) {
    this.taskRegistry[taskId] = { userId, priority, version: 1 };
    this.priorityHeap.enqueue({ taskId, priority, version: 1 });
  }
};

/**
 * @param {number} userId
 * @param {number} taskId
 * @param {number} priority
 * @return {void}
 */
TaskManager.prototype.add = function(userId, taskId, priority) {
  this.taskRegistry[taskId] = { userId, priority, version: 1 };
  this.priorityHeap.enqueue({ taskId, priority, version: 1 });
};

/**
 * @param {number} taskId
 * @param {number} newPriority
 * @return {void}
 */
TaskManager.prototype.edit = function(taskId, newPriority) {
  const currentTask = this.taskRegistry[taskId];
  currentTask.priority = newPriority;
  currentTask.version++;
  this.priorityHeap.enqueue({ taskId, priority: newPriority, version: currentTask.version });
};

/**
 * @param {number} taskId
 * @return {void}
 */
TaskManager.prototype.rmv = function(taskId) {
  delete this.taskRegistry[taskId];
};


/**
 * @return {number}
 */
TaskManager.prototype.execTop = function() {
  while (!this.priorityHeap.isEmpty()) {
    const { taskId, priority, version } = this.priorityHeap.dequeue();
    const activeTask = this.taskRegistry[taskId];

    if (activeTask && activeTask.priority === priority && activeTask.version === version) {
      const executedUserId = activeTask.userId;
      delete this.taskRegistry[taskId];
      return executedUserId;
    }
  }
  return -1;
};
