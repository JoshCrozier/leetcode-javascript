/**
 * 1274. Number of Ships in a Rectangle
 * https://leetcode.com/problems/number-of-ships-in-a-rectangle/
 * Difficulty: Hard
 *
 * Each ship is located at an integer point on the sea represented by a cartesian plane, and
 * each integer point may contain at most 1 ship.
 *
 * You have a function Sea.hasShips(topRight, bottomLeft) which takes two points as arguments
 * and returns true If there is at least one ship in the rectangle represented by the two
 * points, including on the boundary.
 *
 * Given two points: the top right and bottom left corners of a rectangle, return the number
 * of ships present in that rectangle. It is guaranteed that there are at most 10 ships in
 * that rectangle.
 *
 * Submissions making more than 400 calls to hasShips will be judged Wrong Answer. Also, any
 * solutions that attempt to circumvent the judge will result in disqualification.
 */

/**
 * @param {Sea} sea
 * @param {integer[]} topRight
 * @param {integer[]} bottomLeft
 * @return {integer}
 */
var countShips = function(sea, topRight, bottomLeft) {
  const [x2, y2] = topRight;
  const [x1, y1] = bottomLeft;

  if (x1 > x2 || y1 > y2 || !sea.hasShips(topRight, bottomLeft)) {
    return 0;
  }

  if (x1 === x2 && y1 === y2) {
    return 1;
  }

  const midX = Math.floor((x1 + x2) / 2);
  const midY = Math.floor((y1 + y2) / 2);

  return countShips(sea, [midX, midY], [x1, y1])
    + countShips(sea, [x2, midY], [midX + 1, y1])
    + countShips(sea, [midX, y2], [x1, midY + 1])
    + countShips(sea, [x2, y2], [midX + 1, midY + 1]);
};
