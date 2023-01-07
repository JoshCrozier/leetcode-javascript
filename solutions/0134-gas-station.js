/**
 * 134. Gas Station
 * https://leetcode.com/problems/gas-station/
 * Difficulty: Medium
 *
 * There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
 *
 * You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to
 * its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.
 *
 * Given two integer arrays gas and cost, return the starting gas station's index if you can travel around
 * the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is
 * guaranteed to be unique
 */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let total = 0, tank = 0, index = 0;

  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    total += gas[i] - cost[i];
    if (tank < 0) {
      tank = 0;
      index = i + 1;
    }
  }

  return total >= 0 ? index : -1;
};
