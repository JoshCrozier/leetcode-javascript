/**
 * 1628. Design an Expression Tree With Evaluate Function
 * https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/
 * Difficulty: Medium
 *
 * Given the postfix tokens of an arithmetic expression, build and return the binary expression
 * tree that represents this expression.
 *
 * Postfix notation is a notation for writing arithmetic expressions in which the operands
 * (numbers) appear before their operators. For example, the postfix tokens of the expression
 * 4*(5-(7+2)) are represented in the array postfix = ["4","5","7","2","+","-","*"].
 *
 * The class Node is an interface you should use to implement the binary expression tree.
 * The returned tree will be tested using the evaluate function, which is supposed to evaluate
 * the tree's value. You should not remove the Node class; however, you can modify it as you
 * wish, and you can define other classes to implement it if needed.
 *
 * A binary expression tree is a kind of binary tree used to represent arithmetic expressions.
 * Each node of a binary expression tree has either zero or two children. Leaf nodes (nodes
 * with 0 children) correspond to operands (numbers), and internal nodes (nodes with two
 * children) correspond to the operators '+' (addition), '-' (subtraction), '*'
 * (multiplication), and '/' (division).
 *
 * It's guaranteed that no subtree will yield a value that exceeds 109 in absolute value,
 * and all the operations are valid (i.e., no division by zero).
 *
 * Follow up: Could you design the expression tree such that it is more modular? For example,
 * is your design able to support additional operators without making changes to your existing
 * evaluate implementation?
 */

/**
 * This is the interface for the expression tree Node.
 * You should not remove it, and you can define some classes to implement it.
 */
var Node = function() {
  if (this.constructor === Node) {
    throw new Error('Cannot instanciate abstract class');
  }
};

Node.prototype.evaluate = function() {
  throw new Error('Cannot call abstract method');
};

class NumberNode extends Node {
  constructor(value) {
    super();
    this.value = parseInt(value);
  }

  evaluate() {
    return this.value;
  }
}

class OperatorNode extends Node {
  constructor(operator, left, right) {
    super();
    this.operator = operator;
    this.left = left;
    this.right = right;
  }

  evaluate() {
    const leftValue = this.left.evaluate();
    const rightValue = this.right.evaluate();

    switch (this.operator) {
      case '+':
        return leftValue + rightValue;
      case '-':
        return leftValue - rightValue;
      case '*':
        return leftValue * rightValue;
      case '/':
        return Math.floor(leftValue / rightValue);
      default:
        throw new Error('Unknown operator');
    }
  }
}

/**
 * This is the TreeBuilder class.
 * You can treat it as the driver code that takes the postinfix input
 * and returns the expression tree representing it as a Node.
 */
class TreeBuilder {
  buildTree(postfix) {
    const stack = [];
    const operators = new Set(['+', '-', '*', '/']);

    for (const token of postfix) {
      if (operators.has(token)) {
        const right = stack.pop();
        const left = stack.pop();
        stack.push(new OperatorNode(token, left, right));
      } else {
        stack.push(new NumberNode(token));
      }
    }

    return stack[0];
  }
}
