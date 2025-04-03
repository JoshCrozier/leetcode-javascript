/**
 * 1093. Statistics from a Large Sample
 * https://leetcode.com/problems/statistics-from-a-large-sample/
 * Difficulty: Medium
 *
 * You are given a large sample of integers in the range [0, 255]. Since the sample is so large,
 * it is represented by an array count where count[k] is the number of times that k appears in
 * the sample.
 *
 * Calculate the following statistics:
 * - minimum: The minimum element in the sample.
 * - maximum: The maximum element in the sample.
 * - mean: The average of the sample, calculated as the total sum of all elements divided by the
 *   total number of elements.
 * - median:
 *   - If the sample has an odd number of elements, then the median is the middle element once
 *     the sample is sorted.
 *   - If the sample has an even number of elements, then the median is the average of the two
 *     middle elements once the sample is sorted.
 * - mode: The number that appears the most in the sample. It is guaranteed to be unique.
 *
 * Return the statistics of the sample as an array of floating-point numbers [minimum, maximum,
 * mean, median, mode]. Answers within 10-5 of the actual answer will be accepted.
 */

/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function(count) {
  let minimum = 256;
  let maximum = -1;
  let sum = 0;
  let totalCount = 0;
  let mode = 0;
  let maxFrequency = 0;

  for (let value = 0; value < 256; value++) {
    const frequency = count[value];
    if (frequency > 0) {
      minimum = Math.min(minimum, value);
      maximum = Math.max(maximum, value);
      sum += value * frequency;
      totalCount += frequency;
      if (frequency > maxFrequency) {
        maxFrequency = frequency;
        mode = value;
      }
    }
  }

  const mean = sum / totalCount;
  const median = findMedian(count, totalCount);

  return [minimum, maximum, mean, median, mode];
};

function findMedian(count, totalCount) {
  const isOdd = totalCount % 2 === 1;
  const target = Math.floor(totalCount / 2);
  let currentCount = 0;
  let firstMedian = -1;

  for (let value = 0; value < 256; value++) {
    currentCount += count[value];
    if (isOdd) {
      if (currentCount > target) return value;
    } else {
      if (firstMedian === -1 && currentCount >= target) {
        firstMedian = value;
      }
      if (currentCount > target) {
        return (firstMedian + value) / 2;
      }
    }
  }
}
