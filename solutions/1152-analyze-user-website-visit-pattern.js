/**
 * 1152. Analyze User Website Visit Pattern
 * https://leetcode.com/problems/analyze-user-website-visit-pattern/
 * Difficulty: Medium
 *
 * You are given two string arrays username and website and an integer array timestamp.
 * All the given arrays are of the same length and the tuple [username[i], website[i],
 * timestamp[i]] indicates that the user username[i] visited the website website[i] at
 * time timestamp[i].
 *
 * A pattern is a list of three websites (not necessarily distinct).
 * - For example, ["home", "away", "love"], ["leetcode", "love", "leetcode"],
 *   and ["luffy", "luffy", "luffy"] are all patterns.
 *
 * The score of a pattern is the number of users that visited all the websites in the
 * pattern in the same order they appeared in the pattern.
 * - For example, if the pattern is ["home", "away", "love"], the score is the number of
 *   users x such that x visited "home" then visited "away" and visited "love" after that.
 * - Similarly, if the pattern is ["leetcode", "love", "leetcode"], the score is the number
 *   of users x such that x visited "leetcode" then visited "love" and visited "leetcode"
 *   one more time after that.
 * - Also, if the pattern is ["luffy", "luffy", "luffy"], the score is the number of users
 *   x such that x visited "luffy" three different times at different timestamps.
 *
 * Return the pattern with the largest score. If there is more than one pattern with the
 * same largest score, return the lexicographically smallest such pattern.
 *
 * Note that the websites in a pattern do not need to be visited contiguously, they only
 * need to be visited in the order they appeared in the pattern.
 */

/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function(username, timestamp, website) {
  const visitData = username.map((user, i) => ({
    user,
    time: timestamp[i],
    site: website[i]
  }));

  visitData.sort((a, b) => a.time - b.time);

  const userVisits = new Map();

  for (const visit of visitData) {
    if (!userVisits.has(visit.user)) {
      userVisits.set(visit.user, []);
    }
    userVisits.get(visit.user).push(visit.site);
  }

  const patternCounts = new Map();

  for (const [user, sites] of userVisits) {
    if (sites.length < 3) continue;

    const userPatterns = new Set();

    for (let i = 0; i < sites.length - 2; i++) {
      for (let j = i + 1; j < sites.length - 1; j++) {
        for (let k = j + 1; k < sites.length; k++) {
          const pattern = [sites[i], sites[j], sites[k]].join(',');
          userPatterns.add(pattern);
        }
      }
    }

    for (const pattern of userPatterns) {
      patternCounts.set(pattern, (patternCounts.get(pattern) || 0) + 1);
    }
  }

  let maxCount = 0;
  let bestPattern = '';

  for (const [pattern, count] of patternCounts) {
    if (count > maxCount || (count === maxCount && pattern < bestPattern)) {
      maxCount = count;
      bestPattern = pattern;
    }
  }

  return bestPattern.split(',');
};
