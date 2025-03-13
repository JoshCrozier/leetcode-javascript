/**
 * 765. Couples Holding Hands
 * https://leetcode.com/problems/couples-holding-hands/
 * Difficulty: Hard
 *
 * There are n couples sitting in 2n seats arranged in a row and want to hold hands.
 *
 * The people and seats are represented by an integer array row where row[i] is the ID of the
 * person sitting in the ith seat. The couples are numbered in order, the first couple being
 * (0, 1), the second couple being (2, 3), and so on with the last couple being (2n - 2, 2n - 1).
 *
 * Return the minimum number of swaps so that every couple is sitting side by side. A swap
 * consists of choosing any two people, then they stand up and switch seats.
 */

/**
 * @param {number[]} row
 * @return {number}
 */
function minSwapsCouples(row) {
  const n = row.length / 2;
  const partner = new Array(2 * n);
  const position = new Array(2 * n);

  for (let i = 0; i < 2 * n; i++) {
    partner[i] = i % 2 === 0 ? i + 1 : i - 1;
    position[row[i]] = i;
  }

  let swaps = 0;
  for (let i = 0; i < 2 * n; i += 2) {
    const current = row[i];
    const expected = partner[current];
    const nextPerson = row[i + 1];

    if (nextPerson !== expected) {
      row[i + 1] = expected;
      row[position[expected]] = nextPerson;
      position[nextPerson] = position[expected];
      position[expected] = i + 1;
      swaps++;
    }
  }

  return swaps;
}
