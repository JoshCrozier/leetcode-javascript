/**
 * 1868. Product of Two Run-Length Encoded Arrays
 * https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/
 * Difficulty: Medium
 *
 * Run-length encoding is a compression algorithm that allows for an integer array nums with
 * many segments of consecutive repeated numbers to be represented by a (generally smaller)
 * 2D array encoded. Each encoded[i] = [vali, freqi] describes the ith segment of repeated
 * numbers in nums where vali is the value that is repeated freqi times.
 * - For example, nums = [1,1,1,2,2,2,2,2] is represented by the run-length encoded array
 *   encoded = [[1,3],[2,5]]. Another way to read this is "three 1's followed by five 2's".
 *
 * The product of two run-length encoded arrays encoded1 and encoded2 can be calculated using
 * the following steps:
 * 1. Expand both encoded1 and encoded2 into the full arrays nums1 and nums2 respectively.
 * 2. Create a new array prodNums of length nums1.length and set prodNums[i] = nums1[i] * nums2[i].
 * 3. Compress prodNums into a run-length encoded array and return it.
 *
 * You are given two run-length encoded arrays encoded1 and encoded2 representing full arrays
 * nums1 and nums2 respectively. Both nums1 and nums2 have the same length. Each
 * encoded1[i] = [vali, freqi] describes the ith segment of nums1, and each
 * encoded2[j] = [valj, freqj] describes the jth segment of nums2.
 *
 * Return the product of encoded1 and encoded2.
 *
 * Note: Compression should be done such that the run-length encoded array has the minimum
 * possible length.
 */

/**
 * @param {number[][]} encoded1
 * @param {number[][]} encoded2
 * @return {number[][]}
 */
var findRLEArray = function(encoded1, encoded2) {
  const result = [];
  let i = 0;
  let j = 0;
  let freq1 = 0;
  let freq2 = 0;

  while (i < encoded1.length && j < encoded2.length) {
    if (freq1 === 0) {
      freq1 = encoded1[i][1];
    }
    if (freq2 === 0) {
      freq2 = encoded2[j][1];
    }

    const product = encoded1[i][0] * encoded2[j][0];
    const minFreq = Math.min(freq1, freq2);
    if (result.length > 0 && result[result.length - 1][0] === product) {
      result[result.length - 1][1] += minFreq;
    } else {
      result.push([product, minFreq]);
    }

    freq1 -= minFreq;
    freq2 -= minFreq;

    if (freq1 === 0) i++;
    if (freq2 === 0) j++;
  }

  return result;
};
