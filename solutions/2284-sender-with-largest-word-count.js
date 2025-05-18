/**
 * 2284. Sender With Largest Word Count
 * https://leetcode.com/problems/sender-with-largest-word-count/
 * Difficulty: Medium
 *
 * You have a chat log of n messages. You are given two string arrays messages and senders
 * where messages[i] is a message sent by senders[i].
 *
 * A message is list of words that are separated by a single space with no leading or trailing
 * spaces. The word count of a sender is the total number of words sent by the sender. Note
 * that a sender may send more than one message.
 *
 * Return the sender with the largest word count. If there is more than one sender with the
 * largest word count, return the one with the lexicographically largest name.
 *
 * Note:
 * - Uppercase letters come before lowercase letters in lexicographical order.
 * - "Alice" and "alice" are distinct.
 */

/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
  const map = new Map();
  let maxWords = 0;
  let result = '';

  for (let i = 0; i < messages.length; i++) {
    const wordCount = messages[i].split(' ').length;
    const sender = senders[i];
    const totalWords = (map.get(sender) || 0) + wordCount;
    map.set(sender, totalWords);

    if (totalWords > maxWords || (totalWords === maxWords && sender > result)) {
      maxWords = totalWords;
      result = sender;
    }
  }

  return result;
};
