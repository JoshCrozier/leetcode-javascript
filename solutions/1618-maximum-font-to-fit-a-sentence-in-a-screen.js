/**
 * 1618. Maximum Font to Fit a Sentence in a Screen
 * https://leetcode.com/problems/maximum-font-to-fit-a-sentence-in-a-screen/
 * Difficulty: Medium
 *
 * You are given a string text. We want to display text on a screen of width w and height h.
 * You can choose any font size from array fonts, which contains the available font sizes in
 * ascending order.
 *
 * You can use the FontInfo interface to get the width and height of any character at any
 * available font size.
 *
 * The FontInfo interface is defined as such:
 * interface FontInfo {
 *   // Returns the width of character ch on the screen using font size fontSize.
 *   // O(1) per call
 *   public int getWidth(int fontSize, char ch);
 *
 *   // Returns the height of any character on the screen using font size fontSize.
 *   // O(1) per call
 *   public int getHeight(int fontSize);
 * }
 *
 * The calculated width of text for some fontSize is the sum of every
 * getWidth(fontSize, text[i]) call for each 0 <= i < text.length (0-indexed).
 * The calculated height of text for some fontSize is getHeight(fontSize). Note
 * that text is displayed on a single line.
 *
 * It is guaranteed that FontInfo will return the same value if you call getHeight
 * or getWidth with the same parameters.
 *
 * It is also guaranteed that for any font size fontSize and any character ch:
 * - getHeight(fontSize) <= getHeight(fontSize+1)
 * - getWidth(fontSize, ch) <= getWidth(fontSize+1, ch)
 *
 * Return the maximum font size you can use to display text on the screen. If text cannot
 * fit on the display with any font size, return -1.
 */

/**
 * // This is the FontInfo's API interface.
 * // You should not implement it, or speculate about its implementation
 * function FontInfo() {
 *
 *  @param {number} fontSize
 *  @param {char} ch
 *      @return {number}
 *      this.getWidth = function(fontSize, ch) {
 *       ...
 *      };
 *
 *  @param {number} fontSize
 *      @return {number}
 *      this.getHeight = function(fontSize) {
 *       ...
 *      };
 * };
 */
/**
 * @param {string} text
 * @param {number} w
 * @param {number} h
 * @param {number[]} fonts
 * @param {FontInfo} fontInfo
 * @return {number}
 */
var maxFont = function(text, w, h, fonts, fontInfo) {
  let left = 0;
  let right = fonts.length - 1;
  let maxFontSize = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const fontSize = fonts[mid];

    if (canFit(fontSize)) {
      maxFontSize = fontSize;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return maxFontSize;

  function canFit(fontSize) {
    if (fontInfo.getHeight(fontSize) > h) return false;

    let totalWidth = 0;
    for (const char of text) {
      totalWidth += fontInfo.getWidth(fontSize, char);
      if (totalWidth > w) return false;
    }
    return true;
  }
};
