/**
 * 93. Restore IP Addresses
 * https://leetcode.com/problems/restore-ip-addresses/
 * Difficulty: Medium
 *
 * A valid IP address consists of exactly four integers separated by single
 * dots. Each integer is between 0 and 255 (inclusive) and cannot have
 * leading zeros.
 *
 * For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but
 * "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
 *
 * Given a string s containing only digits, return all possible valid IP
 * addresses that can be formed by inserting dots into s. You are not allowed
 * to reorder or remove any digits in s. You may return the valid IP addresses
 * in any order.
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  return backtrack([], s);
};

function backtrack(order, string, result = []) {
  const isValid = s => +s <= 255 && `${+s}` === s;

  if (order.length === 3 && isValid(string)) {
    result.push([...order, string].join('.'));
  } else {
    for (let index = 1; index < 4; index++) {
      const sliced = string.slice(0, index);
      if (isValid(sliced)) {
        backtrack([...order, sliced], string.slice(index), result);
      }
    }
  }

  return result;
}
