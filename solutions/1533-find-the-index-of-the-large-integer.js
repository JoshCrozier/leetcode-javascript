/**
 * 1533. Find the Index of the Large Integer
 * https://leetcode.com/problems/find-the-index-of-the-large-integer/
 * Difficulty: Medium
 *
 * We have an integer array arr, where all the integers in arr are equal except for one integer
 * which is larger than the rest of the integers. You will not be given direct access to the
 * array, instead, you will have an API ArrayReader which have the following functions:
 * - int compareSub(int l, int r, int x, int y): where 0 <= l, r, x, y < ArrayReader.length(),
 *   l <= r and x <= y. The function compares the sum of sub-array arr[l..r] with the sum of
 *   the sub-array arr[x..y] and returns:
 *   - 1 if arr[l]+arr[l+1]+...+arr[r] > arr[x]+arr[x+1]+...+arr[y].
 *   - 0 if arr[l]+arr[l+1]+...+arr[r] == arr[x]+arr[x+1]+...+arr[y].
 *   - -1 if arr[l]+arr[l+1]+...+arr[r] < arr[x]+arr[x+1]+...+arr[y].
 * - int length(): Returns the size of the array.
 *
 * You are allowed to call compareSub() 20 times at most. You can assume both functions work
 * in O(1) time.
 *
 * Return the index of the array arr which has the largest integer.
 */

/**
 * @param {ArrayReader} reader
 * @return {number}
 */
var getIndex = function(reader) {
  const n = reader.length();
  let left = 0;
  let right = n - 1;

  while (left < right) {
    const length = right - left + 1;
    const mid = Math.floor((left + right) / 2);

    if (length % 2 === 1) {
      const comparison = reader.compareSub(left, mid - 1, mid + 1, right);
      if (comparison === 0) {
        return mid;
      } else if (comparison === 1) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      const comparison = reader.compareSub(left, mid, mid + 1, right);
      if (comparison === 1) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  }

  return left;
};
