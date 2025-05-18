/**
 * 2299. Strong Password Checker II
 * https://leetcode.com/problems/strong-password-checker-ii/
 * Difficulty: Easy
 *
 * A password is said to be strong if it satisfies all the following criteria:
 * - It has at least 8 characters.
 * - It contains at least one lowercase letter.
 * - It contains at least one uppercase letter.
 * - It contains at least one digit.
 * - It contains at least one special character. The special characters are the characters
 *   in the following string: "!@#$%^&*()-+".
 * - It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates
 *   this condition, but "aba" does not).
 *
 * Given a string password, return true if it is a strong password. Otherwise, return false.
 */

/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
  if (password.length < 8) return false;

  let hasLower = false;
  let hasUpper = false;
  let hasDigit = false;
  let hasSpecial = false;
  const set = new Set(['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+']);

  for (let i = 0; i < password.length; i++) {
    if (i > 0 && password[i] === password[i - 1]) return false;

    const char = password[i];
    if (/[a-z]/.test(char)) hasLower = true;
    else if (/[A-Z]/.test(char)) hasUpper = true;
    else if (/\d/.test(char)) hasDigit = true;
    else if (set.has(char)) hasSpecial = true;
  }

  return hasLower && hasUpper && hasDigit && hasSpecial;
};
