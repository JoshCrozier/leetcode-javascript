/**
 * 1801. Number of Orders in the Backlog
 * https://leetcode.com/problems/number-of-orders-in-the-backlog/
 * Difficulty: Medium
 *
 * You are given a 2D integer array orders, where each orders[i] = [pricei, amounti, orderTypei]
 * denotes that amounti orders have been placed of type orderTypei at the price pricei.
 * The orderTypei is:
 * - 0 if it is a batch of buy orders, or
 * - 1 if it is a batch of sell orders.
 *
 * Note that orders[i] represents a batch of amounti independent orders with the same price and
 * order type. All orders represented by orders[i] will be placed before all orders represented
 * by orders[i+1] for all valid i.
 *
 * There is a backlog that consists of orders that have not been executed. The backlog is initially
 * empty. When an order is placed, the following happens:
 * - If the order is a buy order, you look at the sell order with the smallest price in the backlog.
 *   If that sell order's price is smaller than or equal to the current buy order's price, they will
 *   match and be executed, and that sell order will be removed from the backlog. Else, the buy
 *   order is added to the backlog.
 * - Vice versa, if the order is a sell order, you look at the buy order with the largest price in
 *   the backlog. If that buy order's price is larger than or equal to the current sell order's
 *   price, they will match and be executed, and that buy order will be removed from the backlog.
 *   Else, the sell order is added to the backlog.
 *
 * Return the total amount of orders in the backlog after placing all the orders from the input.
 * Since this number can be large, return it modulo 109 + 7.
 */

/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function(orders) {
  const MOD = 1e9 + 7;
  const buyOrders = new MinPriorityQueue();
  const sellOrders = new MinPriorityQueue();

  for (let [price, amount, type] of orders) {
    if (type === 0) {
      const order = { price: -price, amount, originalPrice: price, valueOf: () => -price };
      while (amount > 0 && !sellOrders.isEmpty() && sellOrders.front().price <= price) {
        const sellOrder = sellOrders.dequeue();
        const matchAmount = Math.min(amount, sellOrder.amount);
        amount -= matchAmount;
        sellOrder.amount -= matchAmount;
        if (sellOrder.amount > 0) sellOrders.enqueue(sellOrder);
      }
      if (amount > 0) buyOrders.enqueue({ ...order, amount });
    } else {
      const order = { price, amount, valueOf: () => price };
      while (amount > 0 && !buyOrders.isEmpty() && buyOrders.front().originalPrice >= price) {
        const buyOrder = buyOrders.dequeue();
        const matchAmount = Math.min(amount, buyOrder.amount);
        amount -= matchAmount;
        buyOrder.amount -= matchAmount;
        if (buyOrder.amount > 0) buyOrders.enqueue(buyOrder);
      }
      if (amount > 0) sellOrders.enqueue({ ...order, amount });
    }
  }

  let total = 0;
  while (!buyOrders.isEmpty()) {
    total = (total + buyOrders.dequeue().amount) % MOD;
  }
  while (!sellOrders.isEmpty()) {
    total = (total + sellOrders.dequeue().amount) % MOD;
  }

  return total;
};
