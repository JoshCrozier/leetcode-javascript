/**
 * 1452. People Whose List of Favorite Companies Is Not a Subset of Another List
 * https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/
 * Difficulty: Medium
 *
 * Given the array favoriteCompanies where favoriteCompanies[i] is the list of favorites companies
 * for the ith person (indexed from 0).
 *
 * Return the indices of people whose list of favorite companies is not a subset of any other list
 * of favorites companies. You must return the indices in increasing order.
 */

/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
var peopleIndexes = function(favoriteCompanies) {
  const companySets = favoriteCompanies.map(companies => new Set(companies));
  const result = [];

  for (let i = 0; i < favoriteCompanies.length; i++) {
    let isSubset = false;
    for (let j = 0; j < favoriteCompanies.length; j++) {
      if (i !== j && isSubsetOf(companySets[i], companySets[j])) {
        isSubset = true;
        break;
      }
    }
    if (!isSubset) {
      result.push(i);
    }
  }

  return result;

  function isSubsetOf(setA, setB) {
    if (setA.size > setB.size) return false;
    for (const item of setA) {
      if (!setB.has(item)) return false;
    }
    return true;
  }
};
