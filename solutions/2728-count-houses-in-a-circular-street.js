/**
 * 2728. Count Houses in a Circular Street
 * https://leetcode.com/problems/count-houses-in-a-circular-street/
 * Difficulty: Easy
 *
 * You are given an object street of class Street that represents a circular street and a positive
 * integer k which represents a maximum bound for the number of houses in that street (in other
 * words, the number of houses is less than or equal to k). Houses' doors could be open or closed
 * initially.
 *
 * Initially, you are standing in front of a door to a house on this street. Your task is to count
 * the number of houses in the street.
 *
 * The class Street contains the following functions which may help you:
 * - void openDoor(): Open the door of the house you are in front of.
 * - void closeDoor(): Close the door of the house you are in front of.
 * - boolean isDoorOpen(): Returns true if the door of the current house is open and false
 *   otherwise.
 * - void moveRight(): Move to the right house.
 * - void moveLeft(): Move to the left house.
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
 *     openDoor();
 *
 *     @return {void}
 *     closeDoor();
 *
 *     @return {boolean}
 *     isDoorOpen();
 *
 *     @return {void}
 *     moveRight();
 *
 *     @return {void}
 *     moveLeft();
 * }
 */
/**
 * @param {Street} street
 * @param {number} k
 * @return {number}
 */
var houseCount = function(street, k) {
  for (let i = 0; i < k; i++) {
    street.closeDoor();
    street.moveLeft();
  }

  street.openDoor();
  let count = 1;

  street.moveLeft();
  while (!street.isDoorOpen()) {
    street.moveLeft();
    count++;
  }

  return count;
};
