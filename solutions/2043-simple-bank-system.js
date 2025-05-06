/**
 * 2043. Simple Bank System
 * https://leetcode.com/problems/simple-bank-system/
 * Difficulty: Medium
 *
 * You have been tasked with writing a program for a popular bank that will automate all its
 * incoming transactions (transfer, deposit, and withdraw). The bank has n accounts numbered
 * from 1 to n. The initial balance of each account is stored in a 0-indexed integer array
 * balance, with the (i + 1)th account having an initial balance of balance[i].
 *
 * Execute all the valid transactions. A transaction is valid if:
 * - The given account number(s) are between 1 and n, and
 * - The amount of money withdrawn or transferred from is less than or equal to the balance
 *   of the account.
 *
 * Implement the Bank class:
 * - Bank(long[] balance) Initializes the object with the 0-indexed integer array balance.
 * - boolean transfer(int account1, int account2, long money) Transfers money dollars from the
 *   account numbered account1 to the account numbered account2. Return true if the transaction
 *   was successful, false otherwise.
 * - boolean deposit(int account, long money) Deposit money dollars into the account numbered
 *   account. Return true if the transaction was successful, false otherwise.
 * - boolean withdraw(int account, long money) Withdraw money dollars from the account numbered
 *   account. Return true if the transaction was successful, false otherwise.
 */

/**
 * @param {number[]} balance
 */
var Bank = function(balance) {
  this.accounts = balance;
};

/**
 * @param {number} account1
 * @param {number} account2
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
  if (account1 > this.accounts.length || account2 > this.accounts.length) return false;
  if (this.accounts[account1 - 1] < money) return false;

  this.accounts[account1 - 1] -= money;
  this.accounts[account2 - 1] += money;
  return true;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
  if (account > this.accounts.length) return false;

  this.accounts[account - 1] += money;
  return true;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
  if (account > this.accounts.length || this.accounts[account - 1] < money) return false;

  this.accounts[account - 1] -= money;
  return true;
};
