/**
 * 2117. Abbreviating the Product of a Range
 * https://leetcode.com/problems/abbreviating-the-product-of-a-range/
 * Difficulty: Hard
 *
 * You are given two positive integers left and right with left <= right. Calculate the product of
 * all integers in the inclusive range [left, right].
 *
 * Since the product may be very large, you will abbreviate it following these steps:
 * 1. Count all trailing zeros in the product and remove them. Let us denote this count as C.
 *    - For example, there are 3 trailing zeros in 1000, and there are 0 trailing zeros in 546.
 * 2. Denote the remaining number of digits in the product as d. If d > 10, then express the product
 *    as <pre>...<suf> where <pre> denotes the first 5 digits of the product, and <suf> denotes the
 *    last 5 digits of the product after removing all trailing zeros. If d <= 10, we keep it
 *    unchanged.
 *    - For example, we express 1234567654321 as 12345...54321, but 1234567 is represented as
 *      1234567.
 * 3. Finally, represent the product as a string "<pre>...<suf>eC".
 *    - For example, 12345678987600000 will be represented as "12345...89876e5".
 *
 * Return a string denoting the abbreviated product of all integers in the inclusive range [left,
 * right].
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {string}
 */
var abbreviateProduct = function(left, right) {
  let zeros = 0;
  let count2 = 0;
  let count5 = 0;

  for (let i = left; i <= right; i++) {
    let n = i;
    while (n % 2 === 0) {
      count2++;
      n = Math.floor(n / 2);
    }
    n = i;
    while (n % 5 === 0) {
      count5++;
      n = Math.floor(n / 5);
    }
  }
  zeros = Math.min(count2, count5);

  let digits = 0;
  for (let i = left; i <= right; i++) {
    digits += Math.log10(i);
  }
  digits = Math.floor(digits) + 1;

  if (digits - zeros <= 10) {
    let product = 1n;
    for (let i = left; i <= right; i++) {
      product *= BigInt(i);
    }
    for (let i = 0; i < zeros; i++) {
      product /= 10n;
    }
    return product.toString() + 'e' + zeros;
  }

  let prefix = 1;
  for (let i = left; i <= right; i++) {
    prefix *= i;
    while (prefix >= 1e10) {
      prefix /= 10;
    }
  }
  prefix = prefix.toString().slice(0, 5);

  let suffix = 1n;
  for (let i = right; i >= left; i--) {
    suffix = (suffix * BigInt(i));
    while (suffix % 10n === 0n) {
      suffix /= 10n;
    }
    suffix = suffix % (10n ** 15n);
  }

  suffix = suffix.toString();
  while (suffix.length < 5) {
    suffix = '0' + suffix;
  }
  suffix = suffix.slice(-5);

  return prefix + '...' + suffix + 'e' + zeros;
};
