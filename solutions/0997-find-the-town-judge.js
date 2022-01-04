/**
 * 997. Find the Town Judge
 * https://leetcode.com/problems/find-the-town-judge/
 * Difficulty: Easy
 *
 * In a town, there are n people labeled from 1 to n. There is a rumor that one of these
 * people is secretly the town judge.
 *
 * If the town judge exists, then:
 * - The town judge trusts nobody.
 * - Everybody (except for the town judge) trusts the town judge.
 * - There is exactly one person that satisfies properties 1 and 2.
 *
 * You are given an array trust where trust[i] = [ai, bi] representing that the person labeled
 * ai trusts the person labeled bi.
 *
 * Return the label of the town judge if the town judge exists and can be identified, or return
 * -1 otherwise.
 */

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
  if (!trust.length) {
    return n === 1 ? n : -1;
  }

  const map = new Map();
  trust.forEach(([_, value]) => map.set(value, (map.get(value) || 0 ) + 1));

  const [judge, count] = [...map].sort(([,a], [,b]) => b - a)[0];
  return count === n - 1  && !trust.find(([key]) => key === judge) ? judge : -1;
};
