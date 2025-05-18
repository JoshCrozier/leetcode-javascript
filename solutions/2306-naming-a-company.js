/**
 * 2306. Naming a Company
 * https://leetcode.com/problems/naming-a-company/
 * Difficulty: Hard
 *
 * You are given an array of strings ideas that represents a list of names to be used in the
 * process of naming a company. The process of naming a company is as follows:
 * 1. Choose 2 distinct names from ideas, call them ideaA and ideaB.
 * 2. Swap the first letters of ideaA and ideaB with each other.
 * 3. If both of the new names are not found in the original ideas, then the name ideaA ideaB
 *    (the concatenation of ideaA and ideaB, separated by a space) is a valid company name.
 * 4. Otherwise, it is not a valid name.
 *
 * Return the number of distinct valid names for the company.
 */

/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
  const groups = Array.from({ length: 26 }, () => new Set());
  let result = 0;

  for (const idea of ideas) {
    groups[idea.charCodeAt(0) - 97].add(idea.slice(1));
  }

  for (let i = 0; i < 25; i++) {
    for (let j = i + 1; j < 26; j++) {
      const mutualCount = [...groups[i]].filter(suffix => groups[j].has(suffix)).length;
      result += 2 * (groups[i].size - mutualCount) * (groups[j].size - mutualCount);
    }
  }

  return result;
};
