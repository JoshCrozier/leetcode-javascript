/**
 * 2463. Minimum Total Distance Traveled
 * https://leetcode.com/problems/minimum-total-distance-traveled/
 * Difficulty: Hard
 *
 * There are some robots and factories on the X-axis. You are given an integer array robot where
 * robot[i] is the position of the ith robot. You are also given a 2D integer array factory where
 * factory[j] = [positionj, limitj] indicates that positionj is the position of the jth factory
 * and that the jth factory can repair at most limitj robots.
 *
 * The positions of each robot are unique. The positions of each factory are also unique. Note
 * that a robot can be in the same position as a factory initially.
 *
 * All the robots are initially broken; they keep moving in one direction. The direction could be
 * the negative or the positive direction of the X-axis. When a robot reaches a factory that did
 * not reach its limit, the factory repairs the robot, and it stops moving.
 *
 * At any moment, you can set the initial direction of moving for some robot. Your target is to
 * minimize the total distance traveled by all the robots.
 *
 * Return the minimum total distance traveled by all the robots. The test cases are generated
 * such that all the robots can be repaired.
 *
 * Note that:
 * - All robots move at the same speed.
 * - If two robots move in the same direction, they will never collide.
 * - If two robots move in opposite directions and they meet at some point, they do not collide.
 *   They cross each other.
 * - If a robot passes by a factory that reached its limits, it crosses it as if it does not exist.
 * - If the robot moved from a position x to a position y, the distance it moved is |y - x|.
 */

/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function(robot, factory) {
  robot.sort((a, b) => a - b);
  factory.sort((a, b) => a[0] - b[0]);

  const robotCount = robot.length;
  const factoryCount = factory.length;
  const memo = new Array(robotCount + 1).fill(null).map(() => new Array(factoryCount + 1).fill(-1));

  return calculateMinDistance(0, 0);

  function calculateMinDistance(robotIndex, factoryIndex) {
    if (robotIndex === robotCount) return 0;
    if (factoryIndex === factoryCount) return 1e18;

    if (memo[robotIndex][factoryIndex] !== -1) {
      return memo[robotIndex][factoryIndex];
    }

    let result = calculateMinDistance(robotIndex, factoryIndex + 1);

    let totalDistance = 0;
    for (let robotsTaken = 0; robotsTaken < factory[factoryIndex][1]
         && robotIndex + robotsTaken < robotCount; robotsTaken++) {
      totalDistance += Math.abs(robot[robotIndex + robotsTaken] - factory[factoryIndex][0]);
      result = Math.min(
        result,
        totalDistance + calculateMinDistance(robotIndex + robotsTaken + 1, factoryIndex + 1)
      );
    }

    memo[robotIndex][factoryIndex] = result;
    return result;
  }
};
