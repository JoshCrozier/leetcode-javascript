/**
 * 1054. Distant Barcodes
 * https://leetcode.com/problems/distant-barcodes/
 * Difficulty: Medium
 *
 * In a warehouse, there is a row of barcodes, where the ith barcode is barcodes[i].
 *
 * Rearrange the barcodes so that no two adjacent barcodes are equal. You may return any answer,
 * and it is guaranteed an answer exists.
 */

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
  const frequencyMap = new Map();
  for (const code of barcodes) {
    frequencyMap.set(code, (frequencyMap.get(code) || 0) + 1);
  }

  const sortedCodes = [...frequencyMap.entries()]
    .sort((a, b) => b[1] - a[1]);

  const result = new Array(barcodes.length);
  let index = 0;

  for (const [code, count] of sortedCodes) {
    for (let i = 0; i < count; i++) {
      if (index >= barcodes.length) index = 1;
      result[index] = code;
      index += 2;
    }
  }

  return result;
};
