/**
 * 635. Design Log Storage System
 * https://leetcode.com/problems/design-log-storage-system/
 * Difficulty: Medium
 *
 * You are given several logs, where each log contains a unique ID and timestamp. Timestamp is a
 * string that has the following format: Year:Month:Day:Hour:Minute:Second, for example,
 * 2017:01:01:23:59:59. All domains are zero-padded decimal numbers.
 *
 * Implement the LogSystem class:
 * - LogSystem() Initializes the LogSystem object.
 * - void put(int id, string timestamp) Stores the given log (id, timestamp) in your storage system.
 * - int[] retrieve(string start, string end, string granularity) Returns the IDs of the logs whose
 *   timestamps are within the range from start to end inclusive. start and end all have the same
 *   format as timestamp, and granularity means how precise the range should be (i.e. to the exact
 *   Day, Minute, etc.). For example, start = "2017:01:01:23:59:59", end = "2017:01:02:23:59:59",
 *   and granularity = "Day" means that we need to find the logs within the inclusive range from
 *   Jan. 1st 2017 to Jan. 2nd 2017, and the Hour, Minute, and Second for each log entry can be
 *   ignored.
 */

var LogSystem = function() {
  this.logs = [];
  this.granularities = {
    Year: 4,
    Month: 7,
    Day: 10,
    Hour: 13,
    Minute: 16,
    Second: 19
  };
};

/**
 * @param {number} id
 * @param {string} timestamp
 * @return {void}
 */
LogSystem.prototype.put = function(id, timestamp) {
  this.logs.push([timestamp, id]);
};

/**
 * @param {string} start
 * @param {string} end
 * @param {string} granularity
 * @return {number[]}
 */
LogSystem.prototype.retrieve = function(start, end, granularity) {
  const precision = this.granularities[granularity];
  const startKey = start.slice(0, precision).padEnd(19, '0');
  const endKey = end.slice(0, precision).padEnd(19, '9');

  const result = [];
  for (const [timestamp, id] of this.logs) {
    const key = timestamp.slice(0, precision).padEnd(19, '0');
    if (key >= startKey && key <= endKey) {
      result.push(id);
    }
  }

  return result.sort((a, b) => a - b);
};
