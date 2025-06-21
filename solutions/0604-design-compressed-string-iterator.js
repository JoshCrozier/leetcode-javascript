/**
 * 604. Design Compressed String Iterator
 * https://leetcode.com/problems/design-compressed-string-iterator/
 * Difficulty: Easy
 *
 * Design and implement a data structure for a compressed string iterator. The given compressed
 * string will be in the form of each letter followed by a positive integer representing the
 * number of this letter existing in the original uncompressed string.
 *
 * Implement the StringIterator class:
 * - next() Returns the next character if the original string still has uncompressed characters,
 *   otherwise returns a white space.
 * - hasNext() Returns true if there is any letter needs to be uncompressed in the original string,
 *   otherwise returns false.
 */

/**
 * @param {string} compressedString
 */
var StringIterator = function(compressedString) {
  this.segments = [];
  this.currentIndex = 0;
  this.currentCount = 0;

  let i = 0;
  while (i < compressedString.length) {
    const character = compressedString[i];
    i++;
    let count = '';
    while (i < compressedString.length && /\d/.test(compressedString[i])) {
      count += compressedString[i];
      i++;
    }
    this.segments.push([character, parseInt(count)]);
  }
};

/**
 * @return {character}
 */
StringIterator.prototype.next = function() {
  if (!this.hasNext()) {
    return ' ';
  }

  if (this.currentCount === 0) {
    this.currentCount = this.segments[this.currentIndex][1];
  }

  const character = this.segments[this.currentIndex][0];
  this.currentCount--;

  if (this.currentCount === 0) {
    this.currentIndex++;
  }

  return character;
};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function() {
  return this.currentIndex < this.segments.length;
};
