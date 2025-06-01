/**
 * 2739. Total Distance Traveled
 * https://leetcode.com/problems/total-distance-traveled/
 * Difficulty: Easy
 *
 * A truck has two fuel tanks. You are given two integers, mainTank representing the fuel present
 * in the main tank in liters and additionalTank representing the fuel present in the additional
 * tank in liters.
 *
 * The truck has a mileage of 10 km per liter. Whenever 5 liters of fuel get used up in the main
 * tank, if the additional tank has at least 1 liters of fuel, 1 liters of fuel will be transferred
 * from the additional tank to the main tank.
 *
 * Return the maximum distance which can be traveled.
 *
 * Note: Injection from the additional tank is not continuous. It happens suddenly and immediately
 * for every 5 liters consumed.
 */

/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(mainTank, additionalTank) {
  let distance = 0;
  let fuel = mainTank;

  while (fuel >= 5 && additionalTank > 0) {
    distance += 50;
    fuel -= 5;
    fuel += 1;
    additionalTank -= 1;
  }

  distance += fuel * 10;
  return distance;
};
