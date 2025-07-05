/**
 * 1597. Build Binary Expression Tree From Infix Expression
 * https://leetcode.com/problems/build-binary-expression-tree-from-infix-expression/
 * Difficulty: Hard
 *
 * A binary expression tree is a kind of binary tree used to represent arithmetic expressions.
 * Each node of a binary expression tree has either zero or two children. Leaf nodes (nodes
 * with 0 children) correspond to operands (numbers), and internal nodes (nodes with 2 children)
 * correspond to the operators '+' (addition), '-' (subtraction), '*' (multiplication), and
 * '/' (division).
 *
 * For each internal node with operator o, the infix expression it represents is (A o B),
 * where A is the expression the left subtree represents and B is the expression the right
 * subtree represents.
 *
 * You are given a string s, an infix expression containing operands, the operators described
 * above, and parentheses '(' and ')'.
 *
 * Return any valid binary expression tree, whose in-order traversal reproduces s after omitting
 * the parenthesis from it.
 *
 * Please note that order of operations applies in s. That is, expressions in parentheses are
 * evaluated first, and multiplication and division happen before addition and subtraction.
 *
 * Operands must also appear in the same order in both s and the in-order traversal of the tree.
 */

/**
 * Definition for a binary tree node.
 * function Node(val, left, right) {
 *     this.val = (val===undefined ? " " : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {Node}
 */
var expTree = function(s) {
  const operators = new Map([['+', 1], ['-', 1], ['*', 2], ['/', 2]]);
  const operatorStack = [];
  const operandStack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char >= '0' && char <= '9') {
      operandStack.push(createNode(char));
    } else if (char === '(') {
      operatorStack.push(char);
    } else if (char === ')') {
      while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
        processOperator();
      }
      operatorStack.pop();
    } else if (operators.has(char)) {
      while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '('
        && operators.get(operatorStack[operatorStack.length - 1]) >= operators.get(char)) {
        processOperator();
      }
      operatorStack.push(char);
    }
  }

  while (operatorStack.length > 0) {
    processOperator();
  }

  return operandStack[0];

  function processOperator() {
    const operator = operatorStack.pop();
    const right = operandStack.pop();
    const left = operandStack.pop();
    const node = createNode(operator);
    node.left = left;
    node.right = right;
    operandStack.push(node);
  }

  function createNode(val) {
    return new Node(val);
  }
};
