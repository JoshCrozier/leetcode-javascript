/**
 * 721. Accounts Merge
 * https://leetcode.com/problems/accounts-merge/
 * Difficulty: Medium
 *
 * Given a list of accounts where each element accounts[i] is a list of strings, where the first
 * element accounts[i][0] is a name, and the rest of the elements are emails representing emails
 * of the account.
 *
 * Now, we would like to merge these accounts. Two accounts definitely belong to the same person
 * if there is some common email to both accounts. Note that even if two accounts have the same
 * name, they may belong to different people as people could have the same name. A person can
 * have any number of accounts initially, but all of their accounts definitely have the same name.
 *
 * After merging the accounts, return the accounts in the following format: the first element of
 * each account is the name, and the rest of the elements are emails in sorted order. The accounts
 * themselves can be returned in any order.
 */

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  const parent = new Map();
  const names = new Map();
  const groups = new Map();

  const find = node => {
    if (!parent.has(node)) parent.set(node, node);
    return parent.get(node) === node ? node : parent.set(node, find(parent.get(node))).get(node);
  };

  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      names.set(email, name);
      find(email);
      parent.set(find(email), find(emails[0]));
    }
  }

  for (const email of parent.keys()) {
    const root = find(email);
    if (!groups.has(root)) groups.set(root, new Set());
    groups.get(root).add(email);
  }

  return Array.from(groups, ([root, emails]) => [names.get(root), ...[...emails].sort()]);
};
