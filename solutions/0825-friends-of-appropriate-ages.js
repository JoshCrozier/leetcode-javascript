/**
 * 825. Friends Of Appropriate Ages
 * https://leetcode.com/problems/friends-of-appropriate-ages/
 * Difficulty: Medium
 *
 * There are n persons on a social media website. You are given an integer array ages where ages[i]
 * is the age of the ith person.
 *
 * A Person x will not send a friend request to a person y (x != y) if any of the following
 * conditions is true:
 * - age[y] <= 0.5 * age[x] + 7
 * - age[y] > age[x]
 * - age[y] > 100 && age[x] < 100
 *
 * Otherwise, x will send a friend request to y.
 *
 * Note that if x sends a request to y, y will not necessarily send a request to x. Also, a person
 * will not send a friend request to themself.
 *
 * Return the total number of friend requests made.
 */

/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
  const ageCount = new Array(121).fill(0);

  for (const age of ages) {
    ageCount[age]++;
  }

  let result = 0;
  for (let ageX = 1; ageX <= 120; ageX++) {
    if (ageCount[ageX] === 0) continue;
    for (let ageY = 1; ageY <= 120; ageY++) {
      if (ageCount[ageY] === 0) continue;
      if (ageY <= 0.5 * ageX + 7) continue;
      if (ageY > ageX) continue;
      if (ageY > 100 && ageX < 100) continue;
      if (ageX === ageY) {
        result += ageCount[ageX] * (ageCount[ageY] - 1);
      } else {
        result += ageCount[ageX] * ageCount[ageY];
      }
    }
  }

  return result;
};
