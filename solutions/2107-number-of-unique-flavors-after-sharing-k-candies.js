/**
 * 2107. Number of Unique Flavors After Sharing K Candies
 * https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/
 * Difficulty: Medium
 *
 * You are given a 0-indexed integer array candies, where candies[i] represents the flavor
 * of the ith candy. Your mom wants you to share these candies with your little sister by
 * giving her k consecutive candies, but you want to keep as many flavors of candies as possible.
 *
 * Return the maximum number of unique flavors of candy you can keep after sharing with your sister.
 */

/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var shareCandies = function(candies, k) {
  if (k === 0) return new Set(candies).size;
  if (k === candies.length) return 0;

  const totalFlavorCount = new Map();
  for (const candy of candies) {
    totalFlavorCount.set(candy, (totalFlavorCount.get(candy) || 0) + 1);
  }

  const windowFlavorCount = new Map();
  let uniqueRemainingFlavors = totalFlavorCount.size;

  for (let i = 0; i < k; i++) {
    const candy = candies[i];
    const prevWindowCount = windowFlavorCount.get(candy) || 0;
    windowFlavorCount.set(candy, prevWindowCount + 1);

    if (prevWindowCount + 1 === totalFlavorCount.get(candy)) {
      uniqueRemainingFlavors--;
    }
  }

  let result = uniqueRemainingFlavors;

  for (let i = k; i < candies.length; i++) {
    const addCandy = candies[i];
    const removeCandy = candies[i - k];

    const prevAddCount = windowFlavorCount.get(addCandy) || 0;
    windowFlavorCount.set(addCandy, prevAddCount + 1);
    if (prevAddCount + 1 === totalFlavorCount.get(addCandy)) {
      uniqueRemainingFlavors--;
    }

    const prevRemoveCount = windowFlavorCount.get(removeCandy);
    windowFlavorCount.set(removeCandy, prevRemoveCount - 1);
    if (prevRemoveCount === totalFlavorCount.get(removeCandy)) {
      uniqueRemainingFlavors++;
    }

    result = Math.max(result, uniqueRemainingFlavors);
  }

  return result;
};
