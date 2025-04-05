/**
 * 1184. Distance Between Bus Stops
 * https://leetcode.com/problems/distance-between-bus-stops/
 * Difficulty: Easy
 *
 * A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between
 * all pairs of neighboring stops where distance[i] is the distance between the stops number
 * i and (i + 1) % n.
 *
 * The bus goes along both directions i.e. clockwise and counterclockwise.
 *
 * Return the shortest distance between the given start and destination stops.
 */

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  const normalizeIndices = (from, to) => from < to ? [from, to] : [to, from];

  const [left, right] = normalizeIndices(start, destination);
  const clockwiseDistance = distance.slice(left, right).reduce((sum, dist) => sum + dist, 0);
  const totalDistance = distance.reduce((sum, dist) => sum + dist, 0);
  const counterclockwiseDistance = totalDistance - clockwiseDistance;

  return Math.min(clockwiseDistance, counterclockwiseDistance);
};
