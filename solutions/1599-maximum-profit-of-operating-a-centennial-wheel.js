/**
 * 1599. Maximum Profit of Operating a Centennial Wheel
 * https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/
 * Difficulty: Medium
 *
 * You are the operator of a Centennial Wheel that has four gondolas, and each gondola has room for
 * up to four people. You have the ability to rotate the gondolas counterclockwise, which costs you
 * runningCost dollars.
 *
 * You are given an array customers of length n where customers[i] is the number of new customers
 * arriving just before the ith rotation (0-indexed). This means you must rotate the wheel i times
 * before the customers[i] customers arrive. You cannot make customers wait if there is room in the
 * gondola. Each customer pays boardingCost dollars when they board on the gondola closest to the
 * ground and will exit once that gondola reaches the ground again.
 *
 * You can stop the wheel at any time, including before serving all customers. If you decide to stop
 * serving customers, all subsequent rotations are free in order to get all the customers down
 * safely. Note that if there are currently more than four customers waiting at the wheel, only
 * four will board the gondola, and the rest will wait for the next rotation.
 *
 * Return the minimum number of rotations you need to perform to maximize your profit. If there is
 * no scenario where the profit is positive, return -1.
 */

/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function(customers, boardingCost, runningCost) {
  let waitingCustomers = 0;
  let totalBoarded = 0;
  let maxProfit = -Infinity;
  let rotationAtMaxProfit = -1;
  let currentProfit = 0;
  let rotations = 0;

  const gondolaCapacity = 4;

  for (let i = 0; i < customers.length || waitingCustomers > 0; i++) {
    rotations++;

    if (i < customers.length) {
      waitingCustomers += customers[i];
    }

    const boarding = Math.min(waitingCustomers, gondolaCapacity);
    waitingCustomers -= boarding;
    totalBoarded += boarding;

    currentProfit = totalBoarded * boardingCost - rotations * runningCost;

    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
      rotationAtMaxProfit = rotations;
    }
  }

  return maxProfit > 0 ? rotationAtMaxProfit : -1;
};
