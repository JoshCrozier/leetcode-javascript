/**
 * 1942. The Number of the Smallest Unoccupied Chair
 * https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/
 * Difficulty: Medium
 *
 * There is a party where n friends numbered from 0 to n - 1 are attending. There is an infinite
 * number of chairs in this party that are numbered from 0 to infinity. When a friend arrives at
 * the party, they sit on the unoccupied chair with the smallest number.
 * - For example, if chairs 0, 1, and 5 are occupied when a friend comes, they will sit on chair
 *   number 2.
 *
 * When a friend leaves the party, their chair becomes unoccupied at the moment they leave.
 * If another friend arrives at that same moment, they can sit in that chair.
 *
 * You are given a 0-indexed 2D integer array times where times[i] = [arrivali, leavingi],
 * indicating the arrival and leaving times of the ith friend respectively, and an integer
 * targetFriend. All arrival times are distinct.
 *
 * Return the chair number that the friend numbered targetFriend will sit on.
 */

/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
  const events = [];

  for (let i = 0; i < times.length; i++) {
    events.push([times[i][0], 'arrive', i]);
    events.push([times[i][1], 'leave', i]);
  }

  events.sort((a, b) => a[0] - b[0] || (a[1] === 'leave' ? -1 : 1));

  const availableChairs = [];
  const occupiedChairs = new Map();
  let nextChair = 0;

  for (const [time, eventType, friendId] of events) {
    if (eventType === 'leave') {
      const chairNumber = occupiedChairs.get(friendId);
      occupiedChairs.delete(friendId);
      availableChairs.push(chairNumber);
      availableChairs.sort((a, b) => a - b);
    } else {
      let assignedChair;
      if (availableChairs.length > 0) {
        assignedChair = availableChairs.shift();
      } else {
        assignedChair = nextChair++;
      }

      occupiedChairs.set(friendId, assignedChair);

      if (friendId === targetFriend) {
        return assignedChair;
      }
    }
  }
};
