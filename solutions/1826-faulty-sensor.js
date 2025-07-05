/**
 * 1826. Faulty Sensor
 * https://leetcode.com/problems/faulty-sensor/
 * Difficulty: Easy
 *
 * An experiment is being conducted in a lab. To ensure accuracy, there are two sensors
 * collecting data simultaneously. You are given two arrays sensor1 and sensor2, where
 * sensor1[i] and sensor2[i] are the ith data points collected by the two sensors.
 *
 * However, this type of sensor has a chance of being defective, which causes exactly one data
 * point to be dropped. After the data is dropped, all the data points to the right of the
 * dropped data are shifted one place to the left, and the last data point is replaced with
 * some random value. It is guaranteed that this random value will not be equal to the dropped
 * value.
 * - For example, if the correct data is [1,2,3,4,5] and 3 is dropped, the sensor could
 *   return [1,2,4,5,7] (the last position can be any value, not just 7).
 *
 * We know that there is a defect in at most one of the sensors. Return the sensor number
 * (1 or 2) with the defect. If there is no defect in either sensor or if it is impossible
 * to determine the defective sensor, return -1.
 */

/**
 * @param {number[]} sensor1
 * @param {number[]} sensor2
 * @return {number}
 */
var badSensor = function(sensor1, sensor2) {
  const length = sensor1.length;
  let firstDifference = -1;

  for (let i = 0; i < length; i++) {
    if (sensor1[i] !== sensor2[i]) {
      firstDifference = i;
      break;
    }
  }

  if (firstDifference === -1) {
    return -1;
  }

  let sensor1Defective = true;
  let sensor2Defective = true;

  for (let i = firstDifference; i < length - 1; i++) {
    if (sensor1[i] !== sensor2[i + 1]) {
      sensor1Defective = false;
      break;
    }
  }

  for (let i = firstDifference; i < length - 1; i++) {
    if (sensor2[i] !== sensor1[i + 1]) {
      sensor2Defective = false;
      break;
    }
  }

  if (sensor1Defective && !sensor2Defective) {
    return 1;
  }

  if (sensor2Defective && !sensor1Defective) {
    return 2;
  }

  return -1;
};
