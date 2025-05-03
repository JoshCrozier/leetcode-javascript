/**
 * 1912. Design Movie Rental System
 * https://leetcode.com/problems/design-movie-rental-system/
 * Difficulty: Hard
 *
 * You have a movie renting company consisting of n shops. You want to implement a renting system
 * that supports searching for, booking, and returning movies. The system should also support
 * generating a report of the currently rented movies.
 *
 * Each movie is given as a 2D integer array entries where entries[i] = [shopi, moviei, pricei]
 * indicates that there is a copy of movie moviei at shop shopi with a rental price of pricei.
 * Each shop carries at most one copy of a movie moviei.
 *
 * The system should support the following functions:
 * - Search: Finds the cheapest 5 shops that have an unrented copy of a given movie. The shops
 *   should be sorted by price in ascending order, and in case of a tie, the one with the smaller
 *   shopi should appear first. If there are less than 5 matching shops, then all of them should be
 *   returned. If no shop has an unrented copy, then an empty list should be returned.
 * - Rent: Rents an unrented copy of a given movie from a given shop.
 * - Drop: Drops off a previously rented copy of a given movie at a given shop.
 * - Report: Returns the cheapest 5 rented movies (possibly of the same movie ID) as a 2D list res
 *   where res[j] = [shopj, moviej] describes that the jth cheapest rented movie moviej was rented
 *   from the shop shopj. The movies in res should be sorted by price in ascending order, and in
 *   case of a tie, the one with the smaller shopj should appear first, and if there is still tie,
 *   the one with the smaller moviej should appear first. If there are fewer than 5 rented movies,
 *   then all of them should be returned. If no movies are currently being rented, then an empty
 *   list should be returned.
 *
 * Implement the MovieRentingSystem class:
 * - MovieRentingSystem(int n, int[][] entries) Initializes the MovieRentingSystem object with n
 *   shops and the movies in entries.
 * - List<Integer> search(int movie) Returns a list of shops that have an unrented copy of the
 *   given movie as described above.
 * - void rent(int shop, int movie) Rents the given movie from the given shop.
 * - void drop(int shop, int movie) Drops off a previously rented movie at the given shop.
 * - List<List<Integer>> report() Returns a list of cheapest rented movies as described above.
 *
 * Note: The test cases will be generated such that rent will only be called if the shop has an
 * unrented copy of the movie, and drop will only be called if the shop had previously rented out
 * the movie.
 */

/**
 * @param {number} n
 * @param {number[][]} entries
 */
var MovieRentingSystem = function(n, entries) {
  this.shopMovies = new Map();
  this.movieShops = new Map();
  this.rented = new PriorityQueue((a, b) => {
    if (a[2] !== b[2]) return a[2] - b[2];
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });
  this.rentedLookup = new Map();

  for (const [shop, movie, price] of entries) {
    if (!this.shopMovies.has(shop)) {
      this.shopMovies.set(shop, new Map());
    }
    this.shopMovies.get(shop).set(movie, price);

    if (!this.movieShops.has(movie)) {
      this.movieShops.set(movie, new PriorityQueue((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1];
        return a[0] - b[0];
      }));
    }
    this.movieShops.get(movie).enqueue([shop, price]);
  }
};

/**
 * @param {number} movie
 * @return {number[]}
 */
MovieRentingSystem.prototype.search = function(movie) {
  if (!this.movieShops.has(movie)) return [];

  const queue = this.movieShops.get(movie);
  const result = [];
  const seen = new Set();

  while (!queue.isEmpty() && result.length < 5) {
    const [shop, price] = queue.dequeue();
    if (this.shopMovies.get(shop)?.has(movie) && !seen.has(shop)) {
      result.push(shop);
      seen.add(shop);
    }
  }

  for (const shop of result) {
    queue.enqueue([shop, this.shopMovies.get(shop).get(movie)]);
  }

  return result;
};

/**
 * @param {number} shop
 * @param {number} movie
 * @return {void}
 */
MovieRentingSystem.prototype.rent = function(shop, movie) {
  const price = this.shopMovies.get(shop).get(movie);
  this.shopMovies.get(shop).delete(movie);
  this.rented.enqueue([shop, movie, price]);
  this.rentedLookup.set(`${shop}:${movie}`, price);
};

/**
 * @param {number} shop
 * @param {number} movie
 * @return {void}
 */
MovieRentingSystem.prototype.drop = function(shop, movie) {
  const price = this.rentedLookup.get(`${shop}:${movie}`);
  this.rentedLookup.delete(`${shop}:${movie}`);
  if (!this.shopMovies.get(shop).has(movie)) {
    this.shopMovies.get(shop).set(movie, price);
    this.movieShops.get(movie).enqueue([shop, price]);
  }
};

/**
 * @return {number[][]}
 */
MovieRentingSystem.prototype.report = function() {
  const result = [];
  const seen = new Set();

  while (!this.rented.isEmpty() && result.length < 5) {
    const [shop, movie, price] = this.rented.dequeue();
    const key = `${shop}:${movie}`;
    if (this.rentedLookup.has(key) && !seen.has(key)) {
      result.push([shop, movie]);
      seen.add(key);
    }
  }

  for (const [shop, movie] of result) {
    const price = this.rentedLookup.get(`${shop}:${movie}`);
    this.rented.enqueue([shop, movie, price]);
  }

  return result;
};
