/**
 * 1733. Minimum Number of People to Teach
 * https://leetcode.com/problems/minimum-number-of-people-to-teach/
 * Difficulty: Medium
 *
 * On a social network consisting of m users and some friendships between users, two users can
 * communicate with each other if they know a common language.
 *
 * You are given an integer n, an array languages, and an array friendships where:
 * - There are n languages numbered 1 through n,
 * - languages[i] is the set of languages the ith user knows, and
 * - friendships[i] = [ui, vi] denotes a friendship between the users ui and vi.
 *
 * You can choose one language and teach it to some users so that all friends can communicate
 * with each other. Return the minimum number of users you need to teach.
 *
 * Note that friendships are not transitive, meaning if x is a friend of y and y is a friend of
 * z, this doesn't guarantee that x is a friend of z.
 */

/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function(n, languages, friendships) {
  const languageUsers = Array.from({ length: n + 1 }, () => new Set());
  const nonCommunicating = new Set();

  for (let i = 0; i < languages.length; i++) {
    for (const lang of languages[i]) {
      languageUsers[lang].add(i + 1);
    }
  }

  for (const [u, v] of friendships) {
    let canCommunicate = false;
    for (const lang of languages[u - 1]) {
      if (languages[v - 1].includes(lang)) {
        canCommunicate = true;
        break;
      }
    }
    if (!canCommunicate) {
      nonCommunicating.add(u);
      nonCommunicating.add(v);
    }
  }

  let result = Infinity;
  for (let lang = 1; lang <= n; lang++) {
    let usersToTeach = 0;
    for (const user of nonCommunicating) {
      if (!languages[user - 1].includes(lang)) {
        usersToTeach++;
      }
    }
    result = Math.min(result, usersToTeach);
  }

  return result;
};
