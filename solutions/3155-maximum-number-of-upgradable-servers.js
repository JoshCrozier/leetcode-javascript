/**
 * 3155. Maximum Number of Upgradable Servers
 * https://leetcode.com/problems/maximum-number-of-upgradable-servers/
 * Difficulty: Medium
 *
 * You have n data centers and need to upgrade their servers.
 *
 * You are given four arrays count, upgrade, sell, and money of length n, which show:
 * - The number of servers
 * - The cost of upgrading a single server
 * - The money you get by selling a server
 * - The money you initially have
 * - for each data center respectively.
 *
 * Return an array answer, where for each data center, the corresponding element in answer
 * represents the maximum number of servers that can be upgraded.
 *
 * Note that the money from one data center cannot be used for another data center.
 */

/**
 * @param {number[]} count
 * @param {number[]} upgrade
 * @param {number[]} sell
 * @param {number[]} money
 * @return {number[]}
 */
var maxUpgrades = function(count, upgrade, sell, money) {
  const n = count.length;
  const result = [...count];

  for (let i = 0; i < n; i++) {
    const totalUpgradeCost = count[i] * upgrade[i] - money[i];

    if (totalUpgradeCost > 0) {
      const netGainPerSale = sell[i] + upgrade[i];
      const serversToSell = Math.ceil(totalUpgradeCost / netGainPerSale);
      result[i] -= serversToSell;
    }
  }

  return result;
};
