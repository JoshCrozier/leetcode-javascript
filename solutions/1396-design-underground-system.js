/**
 * 1396. Design Underground System
 * https://leetcode.com/problems/design-underground-system/
 * Difficulty: Medium
 *
 * An underground railway system is keeping track of customer travel times between different
 * stations. They are using this data to calculate the average time it takes to travel from
 * one station to another.
 *
 * Implement the UndergroundSystem class:
 * - void checkIn(int id, string stationName, int t)
 *   - A customer with a card ID equal to id, checks in at the station stationName at time t.
 *   - A customer can only be checked into one place at a time.
 * - void checkOut(int id, string stationName, int t)
 *   - A customer with a card ID equal to id, checks out from the station stationName at time t.
 * - double getAverageTime(string startStation, string endStation)
 *   - Returns the average time it takes to travel from startStation to endStation.
 *   - The average time is computed from all the previous traveling times from startStation to
 *     endStation that happened directly, meaning a check in at startStation followed by a check
 *     out from endStation.
 *   - The time it takes to travel from startStation to endStation may be different from the
 *     time it takes to travel from endStation to startStation.
 *
 * There will be at least one customer that has traveled from startStation to endStation before
 * getAverageTime is called.
 * You may assume all calls to the checkIn and checkOut methods are consistent. If a customer
 * checks in at time t1 then checks out at time t2, then t1 < t2. All events happen in
 * chronological order.
 */


var UndergroundSystem = function() {
  this.travels = new Map();
  this.averages = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.travels.set(id, { startStation: stationName, startTime: t });
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  const { startStation, startTime } = this.travels.get(id);
  const route = `${startStation}-${stationName}`;
  const duration = t - startTime;

  if (!this.averages.has(route)) {
    this.averages.set(route, { totalTime: 0, count: 0 });
  }

  const record = this.averages.get(route);
  record.totalTime += duration;
  record.count += 1;

  this.travels.delete(id);
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  const route = `${startStation}-${endStation}`;
  const { totalTime, count } = this.averages.get(route);
  return totalTime / count;
};
