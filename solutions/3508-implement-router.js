/**
 * 3508. Implement Router
 * https://leetcode.com/problems/implement-router/
 * Difficulty: Medium
 *
 * Design a data structure that can efficiently manage data packets in a network router.
 * Each data packet consists of the following attributes:
 * - source: A unique identifier for the machine that generated the packet.
 * - destination: A unique identifier for the target machine.
 * - timestamp: The time at which the packet arrived at the router.
 *
 * Implement the Router class:
 * Router(int memoryLimit): Initializes the Router object with a fixed memory limit.
 * - memoryLimit is the maximum number of packets the router can store at any given time.
 * - If adding a new packet would exceed this limit, the oldest packet must be removed to
 *   free up space.
 * bool addPacket(int source, int destination, int timestamp): Adds a packet with the
 * given attributes to the router.
 * - A packet is considered a duplicate if another packet with the same source, destination,
 *   and timestamp already exists in the router.
 * - Return true if the packet is successfully added (i.e., it is not a duplicate); otherwise
 *   return false.
 * int[] forwardPacket(): Forwards the next packet in FIFO (First In First Out) order.
 * - Remove the packet from storage.
 * - Return the packet as an array [source, destination, timestamp].
 * - If there are no packets to forward, return an empty array.
 * int getCount(int destination, int startTime, int endTime):
 * - Returns the number of packets currently stored in the router (i.e., not yet forwarded) that
 *   have the specified destination and have timestamps in the inclusive range [startTime, endTime].
 *
 * Note that queries for addPacket will be made in increasing order of timestamp.
 */

/**
 * @param {number} memoryLimit
 */
var Router = function(memoryLimit) {
  this.memoryCapacity = memoryLimit;
  this.packetQueue = [];
  this.packetSet = new Set();
  this.destinationTimestamps = new Map();
  this.removedPacketIndex = new Map();
};

/**
 * @param {number} source
 * @param {number} destination
 * @param {number} timestamp
 * @return {boolean}
 */
Router.prototype.addPacket = function(source, destination, timestamp) {
  const packetKey = `${source}-${destination}-${timestamp}`;

  if (this.packetSet.has(packetKey)) {
    return false;
  }

  if (this.packetQueue.length === this.memoryCapacity) {
    const [oldSource, oldDestination, oldTimestamp] = this.packetQueue.shift();
    const oldPacketKey = `${oldSource}-${oldDestination}-${oldTimestamp}`;
    this.packetSet.delete(oldPacketKey);
    this.removedPacketIndex.set(
      oldDestination,
      (this.removedPacketIndex.get(oldDestination) || 0) + 1,
    );
  }

  this.packetQueue.push([source, destination, timestamp]);
  this.packetSet.add(packetKey);

  if (!this.destinationTimestamps.has(destination)) {
    this.destinationTimestamps.set(destination, []);
  }
  this.destinationTimestamps.get(destination).push(timestamp);

  return true;
};

/**
 * @return {number[]}
 */
Router.prototype.forwardPacket = function() {
  if (this.packetQueue.length === 0) {
    return [];
  }

  const [source, destination, timestamp] = this.packetQueue.shift();
  const packetKey = `${source}-${destination}-${timestamp}`;
  this.packetSet.delete(packetKey);
  this.removedPacketIndex.set(destination, (this.removedPacketIndex.get(destination) || 0) + 1);

  return [source, destination, timestamp];
};

/**
 * @param {number} destination
 * @param {number} startTime
 * @param {number} endTime
 * @return {number}
 */
Router.prototype.getCount = function(destination, startTime, endTime) {
  if (!this.destinationTimestamps.has(destination)) {
    return 0;
  }

  const timestampArray = this.destinationTimestamps.get(destination);
  const removedCount = this.removedPacketIndex.get(destination) || 0;
  const totalLength = timestampArray.length;

  if (removedCount >= totalLength) {
    return 0;
  }

  const leftBound = this.binarySearchLeft(timestampArray, startTime, removedCount);
  const rightBound = this.binarySearchRight(timestampArray, endTime, removedCount) - 1;

  if (leftBound > rightBound) {
    return 0;
  }

  return rightBound - leftBound + 1;
};

/**
 * @param {number[]} array
 * @param {number} target
 * @param {number} startIndex
 * @return {number}
 */
Router.prototype.binarySearchLeft = function(array, target, startIndex) {
  let left = startIndex;
  let right = array.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

/**
 * @param {number[]} array
 * @param {number} target
 * @param {number} startIndex
 * @return {number}
 */
Router.prototype.binarySearchRight = function(array, target, startIndex) {
  let left = startIndex;
  let right = array.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};
