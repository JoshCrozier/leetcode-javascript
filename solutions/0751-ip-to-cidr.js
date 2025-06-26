/**
 * 751. IP to CIDR
 * https://leetcode.com/problems/ip-to-cidr/
 * Difficulty: Medium
 *
 * An IP address is a formatted 32-bit unsigned integer where each group of 8 bits is printed as
 * a decimal number and the dot character '.' splits the groups.
 * - For example, the binary number 00001111 10001000 11111111 01101011 (spaces added for clarity)
 *   formatted as an IP address would be "15.136.255.107".
 *
 * A CIDR block is a format used to denote a specific set of IP addresses. It is a string consisting
 * of a base IP address, followed by a slash, followed by a prefix length k. The addresses it covers
 * are all the IPs whose first k bits are the same as the base IP address.
 * - For example, "123.45.67.89/20" is a CIDR block with a prefix length of 20. Any IP address whose
 *   binary representation matches 01111011 00101101 0100xxxx xxxxxxxx, where x can be either 0 or
 *   1, is in the set covered by the CIDR block.
 *
 * You are given a start IP address ip and the number of IP addresses we need to cover n. Your goal
 * is to use as few CIDR blocks as possible to cover all the IP addresses in the inclusive
 * range [ip, ip + n - 1] exactly. No other IP addresses outside of the range should be covered.
 *
 * Return the shortest list of CIDR blocks that covers the range of IP addresses. If there are
 * multiple answers, return any of them.
 */

/**
 * @param {string} ip
 * @param {number} n
 * @return {string[]}
 */
var ipToCIDR = function(ip, n) {
  let start = ipToNumber(ip);
  const result = [];

  while (n > 0) {
    let rightmostOneBit = start & (-start);
    if (rightmostOneBit === 0) rightmostOneBit = 4294967296;

    let blockSize = Math.min(rightmostOneBit, n);
    let temp = blockSize;
    while ((temp & (temp - 1)) !== 0) {
      temp = temp & (temp - 1);
    }
    blockSize = temp;

    let prefixLength = 32;
    let mask = blockSize;
    while (mask > 1) {
      mask >>>= 1;
      prefixLength--;
    }

    result.push(`${numberToIp(start)}/${prefixLength}`);

    start += blockSize;
    n -= blockSize;
  }

  return result;

  function ipToNumber(ip) {
    const parts = ip.split('.').map(Number);
    return (parts[0] << 24) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
  }

  function numberToIp(num) {
    return [
      (num >>> 24) & 255,
      (num >>> 16) & 255,
      (num >>> 8) & 255,
      num & 255
    ].join('.');
  }
};
