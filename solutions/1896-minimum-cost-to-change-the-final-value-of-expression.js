/**
 * 1896. Minimum Cost to Change the Final Value of Expression
 * https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/
 * Difficulty: Hard
 *
 * You are given a valid boolean expression as a string expression consisting of the
 * characters '1','0','&' (bitwise AND operator),'|' (bitwise OR operator),'(', and ')'.
 * - For example, "()1|1" and "(1)&()" are not valid while "1", "(((1))|(0))", and "1|(0&(1))"
 *   are valid expressions.
 *
 * Return the minimum cost to change the final value of the expression.
 * - For example, if expression = "1|1|(0&0)&1", its value is
 *   1|1|(0&0)&1 = 1|1|0&1 = 1|0&1 = 1&1 = 1. We want to apply operations so that the new
 *   expression evaluates to 0.
 *
 * The cost of changing the final value of an expression is the number of operations performed
 * on the expression. The types of operations are described as follows:
 * - Turn a '1' into a '0'.
 * - Turn a '0' into a '1'.
 * - Turn a '&' into a '|'.
 * - Turn a '|' into a '&'.
 *
 * Note: '&' does not take precedence over '|' in the order of calculation. Evaluate parentheses
 * first, then in left-to-right order.
 */

/**
 * @param {string} expression
 * @return {number}
 */
var minOperationsToFlip = function(expression) {
  const stack = [];
  for (const char of expression) {
    if (char === ')') {
      const values = [];
      while (stack.length && stack[stack.length - 1][0] !== '(') {
        values.push(stack.pop());
      }
      stack.pop();
      let [val1, cost1] = values.pop();
      while (values.length) {
        const [op] = values.pop();
        const [val2, cost2] = values.pop();
        if (op === '&') {
          if (val1 === 1 && val2 === 1) {
            val1 = 1;
            cost1 = Math.min(cost1, cost2);
          } else if (val1 === 0 && val2 === 0) {
            val1 = 0;
            cost1 = Math.min(cost1 + 1, cost2 + 1);
          } else {
            val1 = 0;
            cost1 = Math.min(cost1 + cost2, 1);
          }
        } else {
          if (val1 === 1 && val2 === 1) {
            val1 = 1;
            cost1 = Math.min(cost1 + 1, cost2 + 1);
          } else if (val1 === 0 && val2 === 0) {
            val1 = 0;
            cost1 = Math.min(cost1, cost2);
          } else {
            val1 = 1;
            cost1 = Math.min(cost1 + cost2, 1);
          }
        }
      }
      stack.push([val1, cost1]);
    } else if (char === '1') {
      stack.push([1, 1]);
    } else if (char === '0') {
      stack.push([0, 1]);
    } else {
      stack.push([char]);
    }
  }

  const values = [];
  while (stack.length) {
    values.push(stack.pop());
  }

  let [val1, cost1] = values.pop();
  while (values.length) {
    const [op] = values.pop();
    const [val2, cost2] = values.pop();
    if (op === '&') {
      if (val1 === 1 && val2 === 1) {
        val1 = 1;
        cost1 = Math.min(cost1, cost2);
      } else if (val1 === 0 && val2 === 0) {
        val1 = 0;
        cost1 = Math.min(cost1 + 1, cost2 + 1);
      } else {
        val1 = 0;
        cost1 = Math.min(cost1 + cost2, 1);
      }
    } else {
      if (val1 === 1 && val2 === 1) {
        val1 = 1;
        cost1 = Math.min(cost1 + 1, cost2 + 1);
      } else if (val1 === 0 && val2 === 0) {
        val1 = 0;
        cost1 = Math.min(cost1, cost2);
      } else {
        val1 = 1;
        cost1 = Math.min(cost1 + cost2, 1);
      }
    }
  }

  return cost1;
};
