/**
 * 420. Strong Password Checker
 * https://leetcode.com/problems/strong-password-checker/
 * Difficulty: Hard
 *
 * A password is considered strong if the below conditions are all met:
 * - It has at least 6 characters and at most 20 characters.
 * - It contains at least one lowercase letter, at least one uppercase letter, and at
 *   least one digit.
 * - It does not contain three repeating characters in a row (i.e., "Baaabb0" is weak,
 *   but "Baaba0" is strong).
 *
 * Given a string password, return the minimum number of steps required to make password
 * strong. if password is already strong, return 0.
 *
 * In one step, you can:
 * - Insert one character to password,
 * - Delete one character from password, or
 * - Replace one character of password with another character.
 */

/**
 * @param {string} password
 * @return {number}
 */
var strongPasswordChecker = function(password) {
  const types = 3 - (/[a-z]/.test(password) + /[A-Z]/.test(password) + /[0-9]/.test(password));
  let replacements = 0;
  let modOneCount = 0;
  let modTwoCount = 0;

  if (password.length < 6) {
    return Math.max(6 - password.length, types);
  }

  for (let i = 0; i < password.length;) {
    let j = i;
    while (j < password.length && password[j] === password[i]) {
      j++;
    }
    const repeatLength = j - i;
    if (repeatLength >= 3) {
      replacements += Math.floor(repeatLength / 3);
      if (repeatLength % 3 === 0) modOneCount++;
      if (repeatLength % 3 === 1) modTwoCount++;
    }
    i = j;
  }

  if (password.length <= 20) {
    return Math.max(types, replacements);
  }

  const deletions = password.length - 20;
  replacements -= Math.min(deletions, modOneCount);
  replacements -= Math.min(Math.max(deletions - modOneCount, 0), modTwoCount * 2) / 2;
  replacements -= Math.max(deletions - modOneCount - modTwoCount * 2, 0) / 3;

  return deletions + Math.max(types, Math.max(0, Math.ceil(replacements)));
};
