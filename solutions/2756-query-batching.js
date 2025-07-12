/**
 * 2756. Query Batching
 * https://leetcode.com/problems/query-batching/
 * Difficulty: Hard
 *
 * Batching multiple small queries into a single large query can be a useful optimization.
 * Write a class QueryBatcher that implements this functionality.
 *
 * The constructor should accept two parameters:
 * - An asynchronous function queryMultiple which accepts an array of string keys input. It will
 *   resolve with an array of values that is the same length as the input array. Each index
 *   corresponds to the value associated with input[i]. You can assume the promise will never
 *   reject.
 * - A throttle time in milliseconds t.
 *
 * The class has a single method.
 * - async getValue(key). Accepts a single string key and resolves with a single string value.
 *   The keys passed to this function should eventually get passed to the queryMultiple function.
 *   queryMultiple should never be called consecutively within t milliseconds. The first time
 *   getValue is called, queryMultiple should immediately be called with that single key.
 *   If after t milliseconds, getValue had been called again, all the passed keys should be
 *   passed to queryMultiple and ultimately returned. You can assume every key passed to this
 *   method is unique.
 *
 * The following diagram illustrates how the throttling algorithm works. Each rectangle represents
 * 100ms. The throttle time is 400ms.
 */

/**
 * @param {Function} queryMultiple
 * @param {number} t
 * @return {void}
 */
var QueryBatcher = function(queryMultiple, t) {
  this.queryMultiple = queryMultiple;
  this.throttleTime = t;
  this.pendingRequests = [];
  this.batchTimer = null;
  this.lastExecutionTime = 0;
};

/**
 * @param {string} key
 * @return {Promise<string>}
 */
QueryBatcher.prototype.getValue = function(key) {
  return new Promise((resolve) => {
    const currentTime = Date.now();
    const timeSinceLastExecution = currentTime - this.lastExecutionTime;
    const remainingDelay = Math.max(0, this.throttleTime - timeSinceLastExecution);

    this.lastExecutionTime = currentTime + remainingDelay;

    this.pendingRequests.push({ key, resolve });

    if (!this.batchTimer) {
      clearTimeout(this.batchTimer);
      this.batchTimer = setTimeout(() => this.executeBatch(), remainingDelay);
    }
  });
};

/**
 * @return {Promise<void>}
 */
QueryBatcher.prototype.executeBatch = async function() {
  const currentBatch = this.pendingRequests.slice();
  this.pendingRequests = [];
  this.batchTimer = null;

  const keys = currentBatch.map((request) => request.key);
  const resolvers = currentBatch.map((request) => request.resolve);

  this.lastExecutionTime = Date.now();
  const results = await this.queryMultiple(keys);

  for (let i = 0; i < keys.length; i++) {
    resolvers[i](results[i]);
  }
};
