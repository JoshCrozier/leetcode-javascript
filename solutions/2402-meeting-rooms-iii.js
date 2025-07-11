/**
 * 2402. Meeting Rooms III
 * https://leetcode.com/problems/meeting-rooms-iii/
 * Difficulty: Hard
 *
 * You are given an integer n. There are n rooms numbered from 0 to n - 1.
 *
 * You are given a 2D integer array meetings where meetings[i] = [starti, endi] means that
 * a meeting will be held during the half-closed time interval [starti, endi). All the values
 * of starti are unique.
 *
 * Meetings are allocated to rooms in the following manner:
 * 1. Each meeting will take place in the unused room with the lowest number.
 * 2. If there are no available rooms, the meeting will be delayed until a room becomes free.
 *    The delayed meeting should have the same duration as the original meeting.
 * 3. When a room becomes unused, meetings that have an earlier original start time should be
 *    given the room.
 *
 * Return the number of the room that held the most meetings. If there are multiple rooms,
 * return the room with the lowest number.
 *
 * A half-closed interval [a, b) is the interval between a and b including a and not including b.
 */

/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);

  const roomCount = new Array(n).fill(0);
  const availableRooms = [];
  const occupiedRooms = [];
  for (let i = 0; i < n; i++) {
    availableRooms.push(i);
  }

  for (const [start, end] of meetings) {
    while (occupiedRooms.length > 0 && occupiedRooms[0][0] <= start) {
      const [endTime, roomNumber] = occupiedRooms.shift();
      availableRooms.push(roomNumber);
      availableRooms.sort((a, b) => a - b);
    }

    let assignedRoom;
    let meetingEnd;

    if (availableRooms.length > 0) {
      assignedRoom = availableRooms.shift();
      meetingEnd = end;
    } else {
      const [earliestEndTime, roomNumber] = occupiedRooms.shift();
      assignedRoom = roomNumber;
      meetingEnd = earliestEndTime + (end - start);
    }

    roomCount[assignedRoom]++;
    occupiedRooms.push([meetingEnd, assignedRoom]);
    occupiedRooms.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  }

  const maxMeetings = Math.max(...roomCount);
  return roomCount.indexOf(maxMeetings);
};
