/**
 * 2469. Convert the Temperature
 * https://leetcode.com/problems/convert-the-temperature/
 * Difficulty: Easy
 *
 * You are given a non-negative floating point number rounded to two decimal places celsius,
 * that denotes the temperature in Celsius.
 *
 * You should convert Celsius into Kelvin and Fahrenheit and return it as an array
 * ans = [kelvin, fahrenheit].
 *
 * Return the array ans. Answers within 10-5 of the actual answer will be accepted.
 */

/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
  return [celsius + 273.15, celsius * 1.80 + 32];
};
