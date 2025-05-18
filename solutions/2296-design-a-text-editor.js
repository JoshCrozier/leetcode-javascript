/**
 * 2296. Design a Text Editor
 * https://leetcode.com/problems/design-a-text-editor/
 * Difficulty: Hard
 *
 * Design a text editor with a cursor that can do the following:
 * - Add text to where the cursor is.
 * - Delete text from where the cursor is (simulating the backspace key).
 * - Move the cursor either left or right.
 *
 * When deleting text, only characters to the left of the cursor will be deleted. The cursor
 * will also remain within the actual text and cannot be moved beyond it. More formally,
 * we have that 0 <= cursor.position <= currentText.length always holds.
 *
 * Implement the TextEditor class:
 * - TextEditor() Initializes the object with empty text.
 * - void addText(string text) Appends text to where the cursor is. The cursor ends to the
 *   right of text.
 * - int deleteText(int k) Deletes k characters to the left of the cursor. Returns the number
 *   of characters actually deleted.
 * - string cursorLeft(int k) Moves the cursor to the left k times. Returns the last
 *   min(10, len) characters to the left of the cursor, where len is the number of characters
 *   to the left of the cursor.
 * - string cursorRight(int k) Moves the cursor to the right k times. Returns the last
 *   min(10, len) characters to the left of the cursor, where len is the number of characters
 *   to the left of the cursor.
 */

var TextEditor = function() {
  this.left = [];
  this.right = [];
};

/**
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function(text) {
  for (const char of text) {
    this.left.push(char);
  }
};

/**
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function(k) {
  const deleteCount = Math.min(k, this.left.length);
  for (let i = 0; i < deleteCount; i++) {
    this.left.pop();
  }
  return deleteCount;
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function(k) {
  for (let i = 0; i < k && this.left.length; i++) {
    this.right.push(this.left.pop());
  }
  const start = Math.max(0, this.left.length - 10);
  return this.left.slice(start).join('');
};

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function(k) {
  for (let i = 0; i < k && this.right.length; i++) {
    this.left.push(this.right.pop());
  }
  const start = Math.max(0, this.left.length - 10);
  return this.left.slice(start).join('');
};
