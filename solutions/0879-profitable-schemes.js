/**
 * 879. Profitable Schemes
 * https://leetcode.com/problems/profitable-schemes/
 * Difficulty: Hard
 *
 * There is a group of n members, and a list of various crimes they could commit. The ith crime
 * generates a profit[i] and requires group[i] members to participate in it. If a member
 * participates in one crime, that member can't participate in another crime.
 *
 * Let's call a profitable scheme any subset of these crimes that generates at least minProfit
 * profit, and the total number of members participating in that subset of crimes is at most n.
 *
 * Return the number of schemes that can be chosen. Since the answer may be very large, return
 * it modulo 109 + 7.
 */

/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(n, minProfit, group, profit) {
  const MOD = 1e9 + 7;
  const dp = Array.from({ length: group.length + 1 }, () =>
    Array.from({ length: n + 1 }, () => new Array(minProfit + 1).fill(0))
  );

  dp[0][0][0] = 1;

  for (let crime = 1; crime <= group.length; crime++) {
    const membersNeeded = group[crime - 1];
    const profitGained = profit[crime - 1];

    for (let members = 0; members <= n; members++) {
      for (let currentProfit = 0; currentProfit <= minProfit; currentProfit++) {
        dp[crime][members][currentProfit] = dp[crime - 1][members][currentProfit];

        if (members >= membersNeeded) {
          const prevProfit = Math.max(0, currentProfit - profitGained);
          dp[crime][members][currentProfit] = (dp[crime][members][currentProfit]
            + dp[crime - 1][members - membersNeeded][prevProfit]) % MOD;
        }
      }
    }
  }

  let result = 0;
  for (let members = 0; members <= n; members++) {
    result = (result + dp[group.length][members][minProfit]) % MOD;
  }

  return result;
};
