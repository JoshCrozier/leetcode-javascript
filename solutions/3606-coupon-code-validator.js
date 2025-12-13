/**
 * 3606. Coupon Code Validator
 * https://leetcode.com/problems/coupon-code-validator/
 * Difficulty: Easy
 *
 * You are given three arrays of length n that describe the properties of n
 * coupons: code, businessLine, and isActive. The ith coupon has:
 * - code[i]: a string representing the coupon identifier.
 * - businessLine[i]: a string denoting the business category of the coupon.
 * - isActive[i]: a boolean indicating whether the coupon is currently active.
 *
 * A coupon is considered valid if all of the following conditions hold:
 * 1. code[i] is non-empty and consists only of alphanumeric characters (a-z, A-Z, 0-9)
 *    and underscores (_).
 * 2. businessLine[i] is one of the following four categories: "electronics", "grocery",
 *    "pharmacy", "restaurant".
 * 3. isActive[i] is true.
 *
 * Return an array of the codes of all valid coupons, sorted first by their businessLine
 * in the order: "electronics", "grocery", "pharmacy", "restaurant", and then by code in
 * lexicographical (ascending) order within each category.
 */

/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
  const whitelist = ['electronics', 'grocery', 'pharmacy', 'restaurant'];
  const order = { electronics: 0, grocery: 1, pharmacy: 2, restaurant: 3 };

  return code
    .map((id, i) => ({ id, name: businessLine[i], active: isActive[i] }))
    .filter(({ id, name, active }) => active && whitelist.includes(name) && /^[\da-z_]+$/i.test(id))
    .sort((a, b) => {
      const compare = order[a.name] - order[b.name];
      if (compare !== 0) return compare;
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    })
    .map(({ id }) => id);
};
