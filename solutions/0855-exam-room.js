/**
 * 855. Exam Room
 * https://leetcode.com/problems/exam-room/
 * Difficulty: Medium
 *
 * There is an exam room with n seats in a single row labeled from 0 to n - 1.
 *
 * When a student enters the room, they must sit in the seat that maximizes the distance to the
 * closest person. If there are multiple such seats, they sit in the seat with the lowest number.
 * If no one is in the room, then the student sits at seat number 0.
 *
 * Design a class that simulates the mentioned exam room.
 *
 * Implement the ExamRoom class:
 * - ExamRoom(int n) Initializes the object of the exam room with the number of the seats n.
 * - int seat() Returns the label of the seat at which the next student will set.
 * - void leave(int p) Indicates that the student sitting at seat p will leave the room. It is
 *   guaranteed that there will be a student sitting at seat p.
 */

/**
 * @param {number} n - Number of seats in the exam room
 */
var ExamRoom = function(n) {
  this.n = n;
  this.seats = [];
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
  if (this.seats.length === 0) {
    this.seats.push(0);
    return 0;
  }

  let maxDistance = this.seats[0];
  let chosenSeat = 0;

  for (let i = 1; i < this.seats.length; i++) {
    const distance = Math.floor((this.seats[i] - this.seats[i-1]) / 2);
    if (distance > maxDistance) {
      maxDistance = distance;
      chosenSeat = Math.floor((this.seats[i] + this.seats[i-1]) / 2);
    }
  }

  const endDistance = this.n - 1 - this.seats[this.seats.length - 1];
  if (endDistance > maxDistance) {
    chosenSeat = this.n - 1;
    maxDistance = endDistance;
  }

  const insertPosition = this.findInsertPosition(chosenSeat);
  this.seats.splice(insertPosition, 0, chosenSeat);

  return chosenSeat;
};

/**
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
  const index = this.seats.indexOf(p);
  this.seats.splice(index, 1);
};

/**
 * @param {number} seat
 * @return {number}
 */
ExamRoom.prototype.findInsertPosition = function(seat) {
  let left = 0;
  let right = this.seats.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (this.seats[mid] < seat) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
