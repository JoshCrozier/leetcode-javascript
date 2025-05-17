/**
 * 2241. Design an ATM Machine
 * https://leetcode.com/problems/design-an-atm-machine/
 * Difficulty: Medium
 *
 * There is an ATM machine that stores banknotes of 5 denominations: 20, 50, 100, 200, and
 * 500 dollars. Initially the ATM is empty. The user can use the machine to deposit or
 * withdraw any amount of money.
 *
 * When withdrawing, the machine prioritizes using banknotes of larger values.
 * - For example, if you want to withdraw $300 and there are 2 $50 banknotes, 1 $100 banknote,
 *   and 1 $200 banknote, then the machine will use the $100 and $200 banknotes.
 * - However, if you try to withdraw $600 and there are 3 $200 banknotes and 1 $500 banknote,
 *   then the withdraw request will be rejected because the machine will first try to use the
 *   $500 banknote and then be unable to use banknotes to complete the remaining $100. Note
 *   that the machine is not allowed to use the $200 banknotes instead of the $500 banknote.
 *
 * Implement the ATM class:
 * - ATM() Initializes the ATM object.
 * - void deposit(int[] banknotesCount) Deposits new banknotes in the order $20, $50, $100,
 *   $200, and $500.
 * - int[] withdraw(int amount) Returns an array of length 5 of the number of banknotes that
 *   will be handed to the user in the order $20, $50, $100, $200, and $500, and update the
 *   number of banknotes in the ATM after withdrawing. Returns [-1] if it is not possible (do
 *   not withdraw any banknotes in this case).
 */

var ATM = function() {
  this.denominations = [20, 50, 100, 200, 500];
  this.notes = [0, 0, 0, 0, 0];
};

/**
 * @param {number[]} banknotesCount
 * @return {void}
 */
ATM.prototype.deposit = function(banknotesCount) {
  for (let i = 0; i < 5; i++) {
    this.notes[i] += banknotesCount[i];
  }
};

/**
 * @param {number} amount
 * @return {number[]}
 */
ATM.prototype.withdraw = function(amount) {
  const result = [0, 0, 0, 0, 0];
  let remaining = amount;

  for (let i = 4; i >= 0; i--) {
    const count = Math.min(Math.floor(remaining / this.denominations[i]), this.notes[i]);
    result[i] = count;
    remaining -= count * this.denominations[i];
  }

  if (remaining !== 0) return [-1];

  for (let i = 0; i < 5; i++) {
    this.notes[i] -= result[i];
  }

  return result;
};
