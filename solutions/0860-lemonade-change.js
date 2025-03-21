/**
 * 860. Lemonade Change
 * https://leetcode.com/problems/lemonade-change/
 * Difficulty: Easy
 *
 * At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you
 * and order one at a time (in the order specified by bills). Each customer will only buy one
 * lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to
 * each customer so that the net transaction is that the customer pays $5.
 *
 * Note that you do not have any change in hand at first.
 *
 * Given an integer array bills where bills[i] is the bill the ith customer pays, return true if
 * you can provide every customer with the correct change, or false otherwise.
 */

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let fives = 0;
  let tens = 0;

  for (const bill of bills) {
    if (bill === 5) {
      fives++;
    } else if (bill === 10) {
      if (fives === 0) return false;
      fives--;
      tens++;
    } else {
      if (tens > 0 && fives > 0) {
        tens--;
        fives--;
      } else if (fives >= 3) {
        fives -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};
