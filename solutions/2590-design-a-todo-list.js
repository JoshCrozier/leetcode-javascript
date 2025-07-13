/**
 * 2590. Design a Todo List
 * https://leetcode.com/problems/design-a-todo-list/
 * Difficulty: Medium
 *
 * Design a Todo List Where users can add tasks, mark them as complete, or get a list of pending
 * tasks. Users can also add tags to tasks and can filter the tasks by certain tags.
 *
 * Implement the TodoList class:
 * - TodoList() Initializes the object.
 * - int addTask(int userId, String taskDescription, int dueDate, List<String> tags) Adds a task for
 *   the user with the ID userId with a due date equal to dueDate and a list of tags attached to the
 *   task. The return value is the ID of the task. This ID starts at 1 and is sequentially
 *   increasing. That is, the first task's id should be 1, the second task's id should be 2, and so
 *   on.
 * - List<String> getAllTasks(int userId) Returns a list of all the tasks not marked as complete for
 *   the user with ID userId, ordered by the due date. You should return an empty list if the user
 *   has no uncompleted tasks.
 * - List<String> getTasksForTag(int userId, String tag) Returns a list of all the tasks that are
 *   not marked as complete for the user with the ID userId and have tag as one of their tags,
 *   ordered by their due date. Return an empty list if no such task exists.
 * - void completeTask(int userId, int taskId) Marks the task with the ID taskId as completed only
 *   if the task exists and the user with the ID userId has this task, and it is uncompleted.
 */

var TodoList = function() {
  this.nextTaskId = 1;
  this.userTasks = new Map();
  this.allTasks = new Map();
};

/**
 * @param {number} userId
 * @param {string} taskDescription
 * @param {number} dueDate
 * @param {string[]} tags
 * @return {number}
 */
TodoList.prototype.addTask = function(userId, taskDescription, dueDate, tags) {
  const taskId = this.nextTaskId++;
  const task = {
    id: taskId,
    description: taskDescription,
    dueDate: dueDate,
    tags: new Set(tags),
    completed: false
  };

  if (!this.userTasks.has(userId)) {
    this.userTasks.set(userId, []);
  }
  this.userTasks.get(userId).push(task);
  this.allTasks.set(taskId, { userId, task });

  return taskId;
};

/**
 * @param {number} userId
 * @return {string[]}
 */
TodoList.prototype.getAllTasks = function(userId) {
  if (!this.userTasks.has(userId)) {
    return [];
  }

  return this.userTasks.get(userId)
    .filter(task => !task.completed)
    .sort((a, b) => a.dueDate - b.dueDate)
    .map(task => task.description);
};

/**
 * @param {number} userId
 * @param {string} tag
 * @return {string[]}
 */
TodoList.prototype.getTasksForTag = function(userId, tag) {
  if (!this.userTasks.has(userId)) {
    return [];
  }

  return this.userTasks.get(userId)
    .filter(task => !task.completed && task.tags.has(tag))
    .sort((a, b) => a.dueDate - b.dueDate)
    .map(task => task.description);
};

/**
 * @param {number} userId
 * @param {number} taskId
 * @return {void}
 */
TodoList.prototype.completeTask = function(userId, taskId) {
  const taskInfo = this.allTasks.get(taskId);
  if (taskInfo && taskInfo.userId === userId && !taskInfo.task.completed) {
    taskInfo.task.completed = true;
  }
};
