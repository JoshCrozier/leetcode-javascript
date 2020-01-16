/**
 * 1108. Defanging an IP Address
 * https://leetcode.com/problems/defanging-an-ip-address/
 * Difficulty: Easy
 *
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.
 *
 * A defanged IP address replaces every period "." with "[.]".
 */

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  return address.replace(/\./g, '[.]');
};

// or...

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  return address.split('.').join('[.]');
};
