/**
 * 1203. Sort Items by Groups Respecting Dependencies
 * https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/
 * Difficulty: Hard
 *
 * There are n items each belonging to zero or one of m groups where group[i] is the group that
 * the i-th item belongs to and it's equal to -1 if the i-th item belongs to no group. The items
 * and the groups are zero indexed. A group can have no item belonging to it.
 *
 * Return a sorted list of the items such that:
 * - The items that belong to the same group are next to each other in the sorted list.
 * - There are some relations between these items where beforeItems[i] is a list containing all
 *   the items that should come before the i-th item in the sorted array (to the left of the i-th
 *   item).
 *
 * Return any solution if there is more than one solution and return an empty list if there is
 * no solution.
 */

/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function(n, m, group, beforeItems) {
  const groupAdj = Array.from({ length: n + m }, () => []);
  const itemAdj = Array.from({ length: n }, () => []);
  const groupInDegree = new Array(n + m).fill(0);
  const itemInDegree = new Array(n).fill(0);
  let nextGroupId = m;

  assignGroupIds();
  buildGraphs();

  const groupOrder = topologicalSort(groupAdj, groupInDegree, nextGroupId);
  if (!groupOrder.length) return [];

  const itemOrder = topologicalSort(itemAdj, itemInDegree, n);
  if (!itemOrder.length) return [];

  const groupToItems = new Map();
  itemOrder.forEach(item => {
    if (!groupToItems.has(group[item])) {
      groupToItems.set(group[item], []);
    }
    groupToItems.get(group[item]).push(item);
  });

  const result = [];
  groupOrder.forEach(groupId => {
    if (groupToItems.has(groupId)) {
      result.push(...groupToItems.get(groupId));
    }
  });

  return result;

  function assignGroupIds() {
    for (let i = 0; i < n; i++) {
      if (group[i] === -1) {
        group[i] = nextGroupId++;
      }
    }
  }

  function buildGraphs() {
    for (let i = 0; i < n; i++) {
      for (const before of beforeItems[i]) {
        if (group[before] !== group[i]) {
          groupAdj[group[before]].push(group[i]);
          groupInDegree[group[i]]++;
        } else {
          itemAdj[before].push(i);
          itemInDegree[i]++;
        }
      }
    }
  }

  function topologicalSort(adjList, inDegree, size) {
    const queue = [];
    const order = [];

    for (let i = 0; i < size; i++) {
      if (inDegree[i] === 0) queue.push(i);
    }

    while (queue.length) {
      const current = queue.shift();
      order.push(current);
      for (const next of adjList[current]) {
        inDegree[next]--;
        if (inDegree[next] === 0) queue.push(next);
      }
    }

    return order.length === size ? order : [];
  }
};
