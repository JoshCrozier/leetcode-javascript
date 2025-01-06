/**
 * 2650. Design Cancellable Function
 * https://leetcode.com/problems/design-cancellable-function/
 * Difficulty: Hard
 *
 * Sometimes you have a long running task, and you may wish to cancel it before it completes.
 * To help with this goal, write a function cancellable that accepts a generator object and
 * returns an array of two values: a cancel function and a promise.
 *
 * You may assume the generator function will only yield promises. It is your function's
 * responsibility to pass the values resolved by the promise back to the generator. If the
 * promise rejects, your function should throw that error back to the generator.
 *
 * If the cancel callback is called before the generator is done, your function should throw
 * an error back to the generator. That error should be the string "Cancelled" (Not an Error
 * object). If the error was caught, the returned promise should resolve with the next value
 * that was yielded or returned. Otherwise, the promise should reject with the thrown error.
 * No more code should be executed.
 *
 * When the generator is done, the promise your function returned should resolve the value
 * the generator returned. If, however, the generator throws an error, the returned promise
 * should reject with the error.
 */

/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function(generator) {
  let cancel;
  const cancelPromise = new Promise((_, reject) => {
    cancel = () => reject("Cancelled");
  });
  cancelPromise.catch(() => {});
  const promise = (async () => {
    let next = generator.next();
    while (!next.done) {
      try {
        next = generator.next(await Promise.race([next.value, cancelPromise]));
      } catch (e) {
        next = generator.throw(e);
      }
    }
    return next.value;
  })();
  return [cancel, promise];
};
