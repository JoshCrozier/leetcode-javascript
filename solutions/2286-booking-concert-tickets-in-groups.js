/**
 * 2286. Booking Concert Tickets in Groups
 * https://leetcode.com/problems/booking-concert-tickets-in-groups/
 * Difficulty: Hard
 *
 * A concert hall has n rows numbered from 0 to n - 1, each with m seats, numbered from
 * 0 to m - 1. You need to design a ticketing system that can allocate seats in the following cases:
 * - If a group of k spectators can sit together in a row.
 * - If every member of a group of k spectators can get a seat. They may or may not sit together.
 *
 * Note that the spectators are very picky. Hence:
 * - They will book seats only if each member of their group can get a seat with row number less
 *   than or equal to maxRow. maxRow can vary from group to group.
 * - In case there are multiple rows to choose from, the row with the smallest number is chosen.
 *   If there are multiple seats to choose in the same row, the seat with the smallest number is
 *   chosen.
 *
 * Implement the BookMyShow class:
 * - BookMyShow(int n, int m) Initializes the object with n as number of rows and m as number of
 *   seats per row.
 * - int[] gather(int k, int maxRow) Returns an array of length 2 denoting the row and seat number
 *   (respectively) of the first seat being allocated to the k members of the group, who must sit
 *   together. In other words, it returns the smallest possible r and c such that all [c, c + k - 1]
 *   seats are valid and empty in row r, and r <= maxRow. Returns [] in case it is not possible to
 *   allocate seats to the group.
 * - boolean scatter(int k, int maxRow) Returns true if all k members of the group can be allocated
 *   seats in rows 0 to maxRow, who may or may not sit together. If the seats can be allocated, it
 *   allocates k seats to the group with the smallest row numbers, and the smallest possible seat
 *   numbers in each row. Otherwise, returns false.
 */

/**
 * @param {number} n
 * @param {number} m
 */
var BookMyShow = function(n, m) {
  this.n = n;
  this.m = m;

  let size = 1;
  while (size < n * 2) {
    size <<= 1;
  }
  this.segmentTree = new Array(size).fill(0).map(() => [0, 0]);

  this.build(0, 0, n - 1);
};

/**
 * @param {number} k
 * @param {number} maxRow
 * @return {number[]}
 */
BookMyShow.prototype.gather = function(k, maxRow) {
  const result = this.queryMax(0, 0, this.n - 1, k, maxRow);
  if (result.length) {
    this.updateMax(0, 0, this.n - 1, result[0], k);
  }
  return result;
};

/**
 * @param {number} k
 * @param {number} maxRow
 * @return {boolean}
 */
BookMyShow.prototype.scatter = function(k, maxRow) {
  const totalAvailable = this.querySum(0, 0, this.n - 1, maxRow);
  const canScatter = totalAvailable >= k;
  if (canScatter) {
    this.updateSum(0, 0, this.n - 1, k, maxRow);
  }
  return canScatter;
};

/**
 * @param {number} index
 * @param {number} left
 * @param {number} right
 */
BookMyShow.prototype.build = function(index, left, right) {
  if (left === right) {
    this.segmentTree[index] = [this.m, this.m];
    return;
  }
  const mid = Math.floor((left + right) / 2);
  this.segmentTree[index] = [this.m, (right - left + 1) * this.m];
  this.build(2 * index + 1, left, mid);
  this.build(2 * index + 2, mid + 1, right);
};

/**
 * @param {number} index
 * @param {number} left
 * @param {number} right
 * @param {number} k
 * @param {number} maxRow
 * @return {number[]}
 */
BookMyShow.prototype.queryMax = function(index, left, right, k, maxRow) {
  if (left > maxRow) return [];
  if (this.segmentTree[index][0] < k) return [];
  if (left === right) {
    return [left, this.m - this.segmentTree[index][0]];
  }

  const mid = Math.floor((left + right) / 2);
  const leftResult = this.queryMax(2 * index + 1, left, mid, k, maxRow);
  if (leftResult.length) return leftResult;
  return this.queryMax(2 * index + 2, mid + 1, right, k, maxRow);
};

/**
 * @param {number} index
 * @param {number} left
 * @param {number} right
 * @param {number} row
 * @param {number} k
 */
BookMyShow.prototype.updateMax = function(index, left, right, row, k) {
  if (left > row || right < row) return;
  if (left === right) {
    this.segmentTree[index][0] -= k;
    this.segmentTree[index][1] -= k;
    return;
  }

  const mid = Math.floor((left + right) / 2);
  this.segmentTree[index][1] -= k;
  this.updateMax(2 * index + 1, left, mid, row, k);
  this.updateMax(2 * index + 2, mid + 1, right, row, k);
  this.segmentTree[index][0] = Math.max(
    this.segmentTree[2 * index + 1][0],
    this.segmentTree[2 * index + 2][0]
  );
};

/**
 * @param {number} index
 * @param {number} left
 * @param {number} right
 * @param {number} maxRow
 * @return {number}
 */
BookMyShow.prototype.querySum = function(index, left, right, maxRow) {
  if (left > maxRow) return 0;
  if (right <= maxRow) return this.segmentTree[index][1];

  const mid = Math.floor((left + right) / 2);
  return this.querySum(2 * index + 1, left, mid, maxRow)
    + this.querySum(2 * index + 2, mid + 1, right, maxRow);
};

/**
 * @param {number} index
 * @param {number} left
 * @param {number} right
 * @param {number} k
 * @param {number} maxRow
 */
BookMyShow.prototype.updateSum = function(index, left, right, k, maxRow) {
  if (left > maxRow) return;
  if (left === right) {
    this.segmentTree[index][0] -= k;
    this.segmentTree[index][1] -= k;
    return;
  }

  const mid = Math.floor((left + right) / 2);
  this.segmentTree[index][1] -= k;

  if (mid + 1 > maxRow || this.segmentTree[2 * index + 1][1] >= k) {
    this.updateSum(2 * index + 1, left, mid, k, maxRow);
  } else {
    const leftSum = this.segmentTree[2 * index + 1][1];
    this.updateSum(2 * index + 1, left, mid, leftSum, maxRow);
    this.updateSum(2 * index + 2, mid + 1, right, k - leftSum, maxRow);
  }

  this.segmentTree[index][0] = Math.max(
    this.segmentTree[2 * index + 1][0],
    this.segmentTree[2 * index + 2][0]
  );
};
