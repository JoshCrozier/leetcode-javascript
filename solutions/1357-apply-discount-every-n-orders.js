/**
 * 1357. Apply Discount Every n Orders
 * https://leetcode.com/problems/apply-discount-every-n-orders/
 * Difficulty: Medium
 *
 * There is a supermarket that is frequented by many customers. The products sold at the supermarket
 * are represented as two parallel integer arrays products and prices, where the ith product has an
 * ID of products[i] and a price of prices[i].
 *
 * When a customer is paying, their bill is represented as two parallel integer arrays product and
 * amount, where the jth product they purchased has an ID of product[j], and amount[j] is how much
 * of the product they bought. Their subtotal is calculated as the sum of each amount[j] * (price
 * of the jth product).
 *
 * The supermarket decided to have a sale. Every nth customer paying for their groceries will be
 * given a percentage discount. The discount amount is given by discount, where they will be given
 * discount percent off their subtotal. More formally, if their subtotal is bill, then they would
 * actually pay bill * ((100 - discount) / 100).
 *
 * Implement the Cashier class:
 * - Cashier(int n, int discount, int[] products, int[] prices) Initializes the object with n,
 *   the discount, and the products and their prices.
 * - double getBill(int[] product, int[] amount) Returns the final total of the bill with the
 *   discount applied (if any). Answers within 10-5 of the actual value will be accepted.
 */

/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function(n, discount, products, prices) {
  this.customerCount = 0;
  this.discountPercent = discount;
  this.nthCustomer = n;
  this.priceMap = new Map();
  for (let i = 0; i < products.length; i++) {
    this.priceMap.set(products[i], prices[i]);
  }
};

/**
 * @param {number[]} product
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function(product, amount) {
  this.customerCount++;
  let total = 0;
  for (let i = 0; i < product.length; i++) {
    total += this.priceMap.get(product[i]) * amount[i];
  }
  if (this.customerCount % this.nthCustomer === 0) {
    return total * (100 - this.discountPercent) / 100;
  }
  return total;
};
