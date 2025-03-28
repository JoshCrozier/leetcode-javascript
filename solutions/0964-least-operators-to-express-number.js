/**
 * 964. Least Operators to Express Number
 * https://leetcode.com/problems/least-operators-to-express-number/
 * Difficulty: Hard
 *
 * Given a single positive integer x, we will write an expression of the form
 * x (op1) x (op2) x (op3) x ... where each operator op1, op2, etc. is either addition,
 * subtraction, multiplication, or division (+, -, *, or /). For example, with x = 3,
 * we might write 3 * 3 / 3 + 3 - 3 which is a value of 3.
 *
 * When writing such an expression, we adhere to the following conventions:
 * - The division operator (/) returns rational numbers.
 * - There are no parentheses placed anywhere.
 * - We use the usual order of operations: multiplication and division happen before
 *   addition and subtraction.
 * - It is not allowed to use the unary negation operator (-). For example, "x - x" is
 *   a valid expression as it only uses subtraction, but "-x + x" is not because it uses
 *   negation.
 *
 * We would like to write an expression with the least number of operators such that the
 * expression equals the given target. Return the least number of operators used.
 */

/**
 * @param {number} x
 * @param {number} target
 * @return {number}
 */
var leastOpsExpressTarget = function(x, target) {
  let costP = 0;
  let costN = 0;
  let power = 0;
  let minP;
  let minN;

  while (target > 0) {
    const digit = target % x;
    target = Math.floor(target / x);

    if (power > 0) {
      const nextPositive = Math.min(digit * power + costP, (digit + 1) * power + costN);
      const nextNegative = Math.min((x - digit) * power + costP, (x - digit - 1) * power + costN);
      costP = nextPositive;
      costN = nextNegative;
    } else {
      costP = digit * 2;
      costN = (x - digit) * 2;
    }

    minP = costP;
    minN = costN;
    power++;
  }

  return Math.min(minP, power + minN) - 1;
};
