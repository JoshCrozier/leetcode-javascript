/**
 * 851. Loud and Rich
 * https://leetcode.com/problems/loud-and-rich/
 * Difficulty: Medium
 *
 * There is a group of n people labeled from 0 to n - 1 where each person has a different amount
 * of money and a different level of quietness.
 *
 * You are given an array richer where richer[i] = [ai, bi] indicates that ai has more money than
 * bi and an integer array quiet where quiet[i] is the quietness of the ith person. All the given
 * data in richer are logically correct (i.e., the data will not lead you to a situation where x
 * is richer than y and y is richer than x at the same time).
 *
 * Return an integer array answer where answer[x] = y if y is the least quiet person (that is,
 * the person y with the smallest value of quiet[y]) among all people who definitely have equal
 * to or more money than the person x.
 */

/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
  const graph = new Array(quiet.length).fill().map(() => []);
  const result = new Array(quiet.length).fill(-1);

  for (const [a, b] of richer) {
    graph[b].push(a);
  }

  function dfs(person) {
    if (result[person] !== -1) return result[person];

    let quietestPerson = person;

    for (const richerPerson of graph[person]) {
      const candidate = dfs(richerPerson);
      if (quiet[candidate] < quiet[quietestPerson]) {
        quietestPerson = candidate;
      }
    }

    result[person] = quietestPerson;
    return quietestPerson;
  }

  for (let i = 0; i < quiet.length; i++) {
    dfs(i);
  }

  return result;
};
