/**
 * 815. Bus Routes
 * https://leetcode.com/problems/bus-routes/
 * Difficulty: Hard
 *
 * You are given an array routes representing bus routes where routes[i] is a bus route that
 * the ith bus repeats forever.
 *
 * For example, if routes[0] = [1, 5, 7], this means that the 0th bus travels in the sequence
 * 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... forever.
 *
 * You will start at the bus stop source (You are not on any bus initially), and you want to
 * go to the bus stop target. You can travel between bus stops by buses only.
 *
 * Return the least number of buses you must take to travel from source to target.
 *
 * Return -1 if it is not possible.
 */


/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
  if (source === target) return 0;

  const stopToBuses = new Map();

  for (let busId = 0; busId < routes.length; busId++) {
    for (const stop of routes[busId]) {
      if (!stopToBuses.has(stop)) {
        stopToBuses.set(stop, []);
      }
      stopToBuses.get(stop).push(busId);
    }
  }
  if (!stopToBuses.has(source) || !stopToBuses.has(target)) return -1;

  const visitedBuses = new Set();
  const visitedStops = new Set([source]);
  const queue = [[source, 0]];

  while (queue.length > 0) {
    const [currentStop, busCount] = queue.shift();
    if (currentStop === target) return busCount;
    for (const busId of stopToBuses.get(currentStop)) {
      if (visitedBuses.has(busId)) continue;
      visitedBuses.add(busId);
      for (const nextStop of routes[busId]) {
        if (visitedStops.has(nextStop)) continue;
        visitedStops.add(nextStop);
        queue.push([nextStop, busCount + 1]);
        if (nextStop === target) return busCount + 1;
      }
    }
  }

  return -1;
};
