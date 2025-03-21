/**
 * 632. Smallest Range Covering Elements from K Lists
 * https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/
 * Difficulty: Hard
 *
 * You have k lists of sorted integers in non-decreasing order. Find the smallest range that
 * includes at least one number from each of the k lists.
 *
 * We define the range [a, b] is smaller than range [c, d] if b - a < d - c or a < c
 * if b - a == d - c.
 */

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
  const k = nums.length;
  const listCountMap = new Map();
  let coveredLists = 0;
  let minDiff = Infinity;
  let minStart;
  let minEnd;

  const allElements = nums.flatMap((list, listIndex) =>
    list.map(num => ({ num, index: listIndex }))
  ).sort((a, b) => a.num - b.num);

  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < allElements.length; windowEnd++) {
    const currentElement = allElements[windowEnd];
    const listIndex = currentElement.index;
    const count = listCountMap.get(listIndex) ?? 0;

    if (count === 0) coveredLists += 1;
    listCountMap.set(listIndex, count + 1);

    while (coveredLists === k) {
      const leftElement = allElements[windowStart];
      const range = currentElement.num - leftElement.num;

      if (range < minDiff) {
        minDiff = range;
        minStart = leftElement.num;
        minEnd = currentElement.num;
      }
      const leftListIndex = leftElement.index;
      const leftCount = listCountMap.get(leftListIndex);
      listCountMap.set(leftListIndex, leftCount - 1);
      if (leftCount - 1 === 0) coveredLists -= 1;
      windowStart += 1;
    }
  }

  return [minStart, minEnd];
};
