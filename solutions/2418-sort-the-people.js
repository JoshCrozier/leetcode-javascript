/**
 * 2418. Sort the People
 * https://leetcode.com/problems/sort-the-people/
 * Difficulty: Easy
 *
 * You are given an array of strings names, and an array heights that consists of distinct
 * positive integers. Both arrays are of length n.
 *
 * For each index i, names[i] and heights[i] denote the name and height of the ith person.
 *
 * Return names sorted in descending order by the people's heights.
 */

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  const people = names.map((name, index) => ({name, height: heights[index]}));
  people.sort((a, b) => b.height - a.height);
  return people.map(person => person.name);
};
