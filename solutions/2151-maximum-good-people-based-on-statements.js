/**
 * 2151. Maximum Good People Based on Statements
 * https://leetcode.com/problems/maximum-good-people-based-on-statements/
 * Difficulty: Hard
 *
 * There are two types of persons:
 * - The good person: The person who always tells the truth.
 * - The bad person: The person who might tell the truth and might lie.
 *
 * You are given a 0-indexed 2D integer array statements of size n x n that represents the
 * statements made by n people about each other. More specifically, statements[i][j] could
 * be one of the following:
 * - 0 which represents a statement made by person i that person j is a bad person.
 * - 1 which represents a statement made by person i that person j is a good person.
 * - 2 represents that no statement is made by person i about person j.
 *
 * Additionally, no person ever makes a statement about themselves. Formally, we have that
 * statements[i][i] = 2 for all 0 <= i < n.
 *
 * Return the maximum number of people who can be good based on the statements made by the
 * n people.
 */

/**
 * @param {number[][]} statements
 * @return {number}
 */
var maximumGood = function(statements) {
  const n = statements.length;
  let result = 0;

  backtrack(0, new Array(n).fill(false), 0);
  return result;

  function isValid(goodPeople) {
    for (let i = 0; i < n; i++) {
      if (!goodPeople[i]) continue;
      for (let j = 0; j < n; j++) {
        if (statements[i][j] === 0 && goodPeople[j]) return false;
        if (statements[i][j] === 1 && !goodPeople[j]) return false;
      }
    }
    return true;
  }

  function backtrack(index, goodPeople, goodCount) {
    if (index === n) {
      if (isValid(goodPeople)) {
        result = Math.max(result, goodCount);
      }
      return;
    }

    goodPeople[index] = true;
    backtrack(index + 1, goodPeople, goodCount + 1);
    goodPeople[index] = false;
    backtrack(index + 1, goodPeople, goodCount);
  }
};
