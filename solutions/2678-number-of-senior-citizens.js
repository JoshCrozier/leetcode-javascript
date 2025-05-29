/**
 * 2678. Number of Senior Citizens
 * https://leetcode.com/problems/number-of-senior-citizens/
 * Difficulty: Easy
 *
 * You are given a 0-indexed array of strings details. Each element of details provides
 * information about a given passenger compressed into a string of length 15. The system
 * is such that:
 * - The first ten characters consist of the phone number of passengers.
 * - The next character denotes the gender of the person.
 * - The following two characters are used to indicate the age of the person.
 * - The last two characters determine the seat allotted to that person.
 *
 * Return the number of passengers who are strictly more than 60 years old.
 */

/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
  let result = 0;

  for (const detail of details) {
    const age = parseInt(detail.slice(11, 13));
    if (age > 60) result++;
  }

  return result;
};
