/**
 * 1236. Web Crawler
 * https://leetcode.com/problems/web-crawler/
 * Difficulty: Medium
 *
 * Given a url startUrl and an interface HtmlParser, implement a web crawler to crawl all
 * links that are under the same hostname as startUrl.
 *
 * Return all urls obtained by your web crawler in any order.
 *
 * Your crawler should:
 * - Start from the page: startUrl
 * - Call HtmlParser.getUrls(url) to get all urls from a webpage of given url.
 * - Do not crawl the same link twice.
 * - Explore only the links that are under the same hostname as startUrl.
 *
 * As shown in the example url above, the hostname is example.org. For simplicity sake, you may
 * assume all urls use http protocol without any port specified. For example, the urls
 * http://leetcode.com/problems and http://leetcode.com/contest are under the same hostname,
 * while urls http://example.org/test and http://example.com/abc are not under the same hostname.
 *
 * The HtmlParser interface is defined as such:
 * interface HtmlParser {
 *   // Return a list of all urls from a webpage of given url.
 *   public List<String> getUrls(String url);
 * }
 *
 * Below are two examples explaining the functionality of the problem, for custom testing purposes
 * you'll have three variables urls, edges and startUrl. Notice that you will only have access to
 * startUrl in your code, while urls and edges are not directly accessible to you in code.
 *
 * Note: Consider the same URL with the trailing slash "/" as a different URL. For example,
 * "http://news.yahoo.com", and "http://news.yahoo.com/" are different urls.
 */

/**
 * @param {string} startUrl
 * @param {HtmlParser} htmlParser
 * @return {string[]}
*/
var crawl = function(startUrl, htmlParser) {
  const targetHostname = getHostname(startUrl);
  const visited = new Set();
  const queue = [startUrl];
  const result = [];

  while (queue.length > 0) {
    const currentUrl = queue.shift();

    if (visited.has(currentUrl)) continue;

    visited.add(currentUrl);
    result.push(currentUrl);

    const urls = htmlParser.getUrls(currentUrl);

    for (const url of urls) {
      if (!visited.has(url) && getHostname(url) === targetHostname) {
        queue.push(url);
      }
    }
  }

  return result;

  function getHostname(url) {
    return url.split('/')[2];
  }
};
