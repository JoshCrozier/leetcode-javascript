/**
 * 582. Kill Process
 * https://leetcode.com/problems/kill-process/
 * Difficulty: Medium
 *
 * You have n processes forming a rooted tree structure. You are given two integer arrays pid
 * and ppid, where pid[i] is the ID of the ith process and ppid[i] is the ID of the ith process's
 * parent process.
 *
 * Each process has only one parent process but may have multiple children processes. Only one
 * process has ppid[i] = 0, which means this process has no parent process (the root of the tree).
 *
 * When a process is killed, all of its children processes will also be killed.
 *
 * Given an integer kill representing the ID of a process you want to kill, return a list of the
 * IDs of the processes that will be killed. You may return the answer in any order.
 */

/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
  const map = new Map();
  for (let i = 0; i < ppid.length; i++) {
    if (!map.has(ppid[i])) {
      map.set(ppid[i], []);
    }
    map.get(ppid[i]).push(pid[i]);
  }

  const result = [];
  traverse(kill);
  return result;

  function traverse(process) {
    result.push(process);
    if (map.has(process)) {
      for (const child of map.get(process)) {
        traverse(child);
      }
    }
  }
};
