/**
 * 1847. Closest Room
 * https://leetcode.com/problems/closest-room/
 * Difficulty: Hard
 *
 * There is a hotel with n rooms. The rooms are represented by a 2D integer array rooms where
 * rooms[i] = [roomIdi, sizei] denotes that there is a room with room number roomIdi and size
 * equal to sizei. Each roomIdi is guaranteed to be unique.
 *
 * You are also given k queries in a 2D array queries where queries[j] = [preferredj, minSizej].
 * The answer to the jth query is the room number id of a room such that:
 * - The room has a size of at least minSizej, and
 * - abs(id - preferredj) is minimized, where abs(x) is the absolute value of x.
 *
 * If there is a tie in the absolute difference, then use the room with the smallest such id.
 * If there is no such room, the answer is -1.
 *
 * Return an array answer of length k where answer[j] contains the answer to the jth query.
 */

/**
 * @param {number[][]} rooms
 * @param {number[][]} queries
 * @return {number[]}
 */
var closestRoom = function(rooms, queries) {
  rooms.sort((a, b) => b[1] - a[1]);
  const sortedQueries = queries
    .map((q, i) => [q[0], q[1], i])
    .sort((a, b) => b[1] - a[1]);

  const result = new Array(queries.length).fill(-1);
  const roomIds = [];
  let roomIndex = 0;

  for (const [preferred, minSize, queryIndex] of sortedQueries) {
    while (roomIndex < rooms.length && rooms[roomIndex][1] >= minSize) {
      insertSorted(rooms[roomIndex][0]);
      roomIndex++;
    }

    result[queryIndex] = findClosestId(preferred);
  }

  return result;

  function insertSorted(id) {
    let left = 0;
    let right = roomIds.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (roomIds[mid] < id) left = mid + 1;
      else right = mid;
    }
    roomIds.splice(left, 0, id);
  }

  function findClosestId(target) {
    if (!roomIds.length) return -1;

    let left = 0;
    let right = roomIds.length - 1;
    let closest = roomIds[0];
    let minDiff = Math.abs(closest - target);

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const id = roomIds[mid];
      const diff = Math.abs(id - target);

      if (diff < minDiff || (diff === minDiff && id < closest)) {
        minDiff = diff;
        closest = id;
      }

      if (id < target) left = mid + 1;
      else if (id > target) right = mid - 1;
      else break;
    }

    return closest;
  }
};
