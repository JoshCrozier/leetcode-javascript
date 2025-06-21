/**
 * 573. Squirrel Simulation
 * https://leetcode.com/problems/squirrel-simulation/
 * Difficulty: Medium
 *
 * You are given two integers height and width representing a garden of size height x width.
 * You are also given:
 * - an array tree where tree = [treer, treec] is the position of the tree in the garden,
 * - an array squirrel where squirrel = [squirrelr, squirrelc] is the position of the squirrel
 *   in the garden,
 * - and an array nuts where nuts[i] = [nutir, nutic] is the position of the ith nut in the garden.
 *
 * The squirrel can only take at most one nut at one time and can move in four directions: up, down,
 * left, and right, to the adjacent cell.
 *
 * Return the minimal distance for the squirrel to collect all the nuts and put them under the tree
 * one by one.
 *
 * The distance is the number of moves.
 */

/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} tree
 * @param {number[]} squirrel
 * @param {number[][]} nuts
 * @return {number}
 */
var minDistance = function(height, width, tree, squirrel, nuts) {
  const helper = (p1, p2) => Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);

  let totalDistance = 0;
  let maxSaving = -Infinity;

  for (const nut of nuts) {
    const nutToTree = helper(nut, tree);
    totalDistance += 2 * nutToTree;
    const squirrelToNut = helper(squirrel, nut);
    maxSaving = Math.max(maxSaving, nutToTree - squirrelToNut);
  }

  return totalDistance - maxSaving;
};
