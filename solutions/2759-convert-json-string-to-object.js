/**
 * 2759. Convert JSON String to Object
 * https://leetcode.com/problems/convert-json-string-to-object/
 * Difficulty: Hard
 *
 * Given a string str, return parsed JSON parsedStr. You may assume the str is a valid JSON
 * string hence it only includes strings, numbers, arrays, objects, booleans, and null. str
 * will not include invisible characters and escape characters.
 *
 * Please solve it without using the built-in JSON.parse method.
 */

/**
 * @param {string} str
 * @return {null|boolean|number|string|Array|Object}
 */
var jsonParse = function(str) {
  const length = str.length;
  const stack = [];
  let currentValue = null;
  let pendingKey = null;

  for (let index = 0; index < length; index++) {
    if (str[index] === ',') continue;

    if (str[index] === '[' || str[index] === '{') {
      stack.push(currentValue);
      let newContainer = null;
      if (str[index] === '[') newContainer = [];
      else newContainer = {};

      if (Array.isArray(currentValue)) currentValue.push(newContainer);
      else if (pendingKey !== null) {
        currentValue[pendingKey] = newContainer;
        pendingKey = null;
      }
      currentValue = newContainer;
    } else if (str[index] === ']' || str[index] === '}') {
      const previousValue = stack.pop();
      if (index !== length - 1) currentValue = previousValue;
    } else {
      let parsedValue = null;

      if (str[index] === '"') {
        const startIndex = index + 1;
        while (index + 1 < length && str[index + 1] !== '"') index++;
        parsedValue = str.substring(startIndex, index + 1);
        index++;
      } else if (str[index] === '-' || ('0' <= str[index] && str[index] <= '9')) {
        const startIndex = index;
        while (index + 1 < length && (str[index + 1] === '-'
              || ('0' <= str[index + 1] && str[index + 1] <= '9') || str[index + 1] === '.')) {
          index++;
        }
        parsedValue = Number(str.substring(startIndex, index + 1));
      } else {
        if (index + 4 <= length && str.substring(index, index + 4) === 'true') {
          parsedValue = true;
        } else if (index + 5 <= length && str.substring(index, index + 5) === 'false') {
          parsedValue = false;
        } else {
          parsedValue = null;
        }
        index += parsedValue || parsedValue === null ? 3 : 4;
      }

      if (str[index + 1] === ':') {
        pendingKey = parsedValue;
        index++;
      } else if (Array.isArray(currentValue)) {
        currentValue.push(parsedValue);
      } else if (pendingKey !== null) {
        currentValue[pendingKey] = parsedValue;
        pendingKey = null;
      } else {
        currentValue = parsedValue;
      }
    }
  }

  return currentValue;
};
