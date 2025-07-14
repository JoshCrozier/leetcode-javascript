/**
 * 2753. Count Houses in a Circular Street II
 * https://leetcode.com/problems/count-houses-in-a-circular-street-ii/
 * Difficulty: Hard
 *
 * You are given an object street of class Street that represents a circular street and a positive
 * integer k which represents a maximum bound for the number of houses in that street (in other
 * words, the number of houses is less than or equal to k). Houses' doors could be open or closed
 * initially (at least one is open).
 *
 * Initially, you are standing in front of a door to a house on this street. Your task is to count
 * the number of houses in the street.
 *
 * The class Street contains the following functions which may help you:
 * - void closeDoor(): Close the door of the house you are in front of.
 * - boolean isDoorOpen(): Returns true if the door of the current house is open and false
 *   otherwise.
 * - void moveRight(): Move to the right house.
 *
 * Note that by circular street, we mean if you number the houses from 1 to n, then the right house
 * of housei is housei+1 for i < n, and the right house of housen is house1.
 *
 * Return ans which represents the number of houses on this street.
 */

/**
 * Definition for a street.
 * class Street {
 *     @param {number[]} doors
 *     constructor(doors);
 *
 *     @return {void}
 *     closeDoor();
 *
 *     @return {boolean}
 *     isDoorOpen();
 *
 *     @return {void}
 *     moveRight();
 * }
 */
/**
 * @param {Street} street
 * @param {number} k
 * @return {number}
 */
var houseCount = function(street, k) {
  let result = 0;

  while (true) {
    tryMoveToOpen(street, k, true);
    const distance = tryMoveToOpen(street, k, false);

    if (distance > k) {
      return result;
    }

    result = distance;
    street.closeDoor();
  }

  function tryMoveToOpen(street, k, considerCurrent) {
    if (street.isDoorOpen() && considerCurrent) {
      return 0;
    }

    let moves = 1;
    street.moveRight();

    while (!street.isDoorOpen() && moves <= k) {
      street.moveRight();
      moves++;
    }

    return moves;
  }
};
