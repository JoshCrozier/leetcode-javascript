/**
 * 811. Subdomain Visit Count
 * https://leetcode.com/problems/subdomain-visit-count/
 * Difficulty: Medium
 *
 * A website domain "discuss.leetcode.com" consists of various subdomains. At the top level, we have
 * "com", at the next level, we have "leetcode.com" and at the lowest level, "discuss.leetcode.com".
 * When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains
 * "leetcode.com" and "com" implicitly.
 *
 * A count-paired domain is a domain that has one of the two formats "rep d1.d2.d3" or "rep d1.d2"
 * where rep is the number of visits to the domain and d1.d2.d3 is the domain itself.
 *
 * For example, "9001 discuss.leetcode.com" is a count-paired domain that indicates that
 * discuss.leetcode.com was visited 9001 times.
 *
 * Given an array of count-paired domains cpdomains, return an array of the count-paired domains of
 * each subdomain in the input. You may return the answer in any order.
 */

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  const domainCount = new Map();

  for (const cpdomain of cpdomains) {
    const [countStr, domain] = cpdomain.split(' ');
    const count = parseInt(countStr);
    const subdomains = getSubdomains(domain);

    for (const subdomain of subdomains) {
      domainCount.set(subdomain, (domainCount.get(subdomain) || 0) + count);
    }
  }

  const result = [];
  for (const [domain, count] of domainCount) {
    result.push(`${count} ${domain}`);
  }

  return result;
};

function getSubdomains(domain) {
  const parts = domain.split('.');
  const subdomains = [];

  for (let i = 0; i < parts.length; i++) {
    subdomains.push(parts.slice(i).join('.'));
  }

  return subdomains;
}
