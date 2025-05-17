/**
 * 2234. Maximum Total Beauty of the Gardens
 * https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/
 * Difficulty: Hard
 *
 * Alice is a caretaker of n gardens and she wants to plant flowers to maximize the total
 * beauty of all her gardens.
 *
 * You are given a 0-indexed integer array flowers of size n, where flowers[i] is the number
 * of flowers already planted in the ith garden. Flowers that are already planted cannot be
 * removed. You are then given another integer newFlowers, which is the maximum number of
 * flowers that Alice can additionally plant. You are also given the integers target, full,
 * and partial.
 *
 * A garden is considered complete if it has at least target flowers. The total beauty of the
 * gardens is then determined as the sum of the following:
 * - The number of complete gardens multiplied by full.
 * - The minimum number of flowers in any of the incomplete gardens multiplied by partial.
 *   If there are no incomplete gardens, then this value will be 0.
 *
 * Return the maximum total beauty that Alice can obtain after planting at most newFlowers flowers.
 */

/**
 * @param {number[]} flowers
 * @param {number} newFlowers
 * @param {number} target
 * @param {number} full
 * @param {number} partial
 * @return {number}
 */
var maximumBeauty = function(flowers, newFlowers, target, full, partial) {
  const n = flowers.length;
  flowers.sort((a, b) => b - a);

  const suffixCost = Array(n + 1).fill(0);
  let lastUniqueIndex = n - 1;
  let minIndex = n - 2;

  for (; minIndex >= 0; --minIndex) {
    if (flowers[minIndex] >= target) break;

    const flowerDiff = flowers[minIndex] - flowers[minIndex + 1];
    const gardenCount = n - lastUniqueIndex;
    suffixCost[minIndex] = suffixCost[minIndex + 1] + flowerDiff * gardenCount;

    if (suffixCost[minIndex] > newFlowers) break;

    if (flowers[minIndex] !== flowers[minIndex - 1]) {
      lastUniqueIndex = minIndex;
    }
  }

  ++minIndex;

  const remainingFlowersForMin = newFlowers - suffixCost[minIndex];
  const gardenCountForMin = n - minIndex;
  let minFlowerValue = Math.min(
    target - 1,
    flowers[minIndex] + Math.floor(remainingFlowersForMin / gardenCountForMin)
  );

  let result = 0;

  for (let i = 0; i < n; ++i) {
    if (flowers[i] >= target) {
      continue;
    }

    const currentBeauty = i * full + minFlowerValue * partial;
    result = Math.max(result, currentBeauty);

    const flowersNeeded = target - flowers[i];
    if (flowersNeeded > newFlowers) break;

    newFlowers -= flowersNeeded;
    flowers[i] = target;

    while (
      minIndex <= i || newFlowers < suffixCost[minIndex]
      || (minIndex > 0 && flowers[minIndex] === flowers[minIndex - 1])
    ) {
      ++minIndex;
    }

    const updatedRemaining = newFlowers - suffixCost[minIndex];
    const updatedGardenCount = n - minIndex;
    minFlowerValue = Math.min(
      target - 1,
      flowers[minIndex] + Math.floor(updatedRemaining / updatedGardenCount)
    );
  }

  if (flowers[n - 1] >= target) {
    result = Math.max(result, n * full);
  }

  return result;
};
