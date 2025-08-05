/**
 * 2353. Design a Food Rating System
 * https://leetcode.com/problems/design-a-food-rating-system/
 * Difficulty: Medium
 *
 * Design a food rating system that can do the following:
 * - Modify the rating of a food item listed in the system.
 * - Return the highest-rated food item for a type of cuisine in the system.
 *
 * Implement the FoodRatings class:
 * - FoodRatings(String[] foods, String[] cuisines, int[] ratings) Initializes the system.
 *   The food items are described by foods, cuisines and ratings, all of which have a length
 *   of n.
 * - foods[i] is the name of the ith food,
 * - cuisines[i] is the type of cuisine of the ith food, and
 * - ratings[i] is the initial rating of the ith food.
 * - void changeRating(String food, int newRating) Changes the rating of the food item with
 *   the name food.
 * - String highestRated(String cuisine) Returns the name of the food item that has the
 *   highest rating for the given type of cuisine. If there is a tie, return the item with
 *   the lexicographically smaller name.
 *
 * Note that a string x is lexicographically smaller than string y if x comes before y in
 * dictionary order, that is, either x is a prefix of y, or if i is the first position such
 * that x[i] != y[i], then x[i] comes before y[i] in alphabetic order.
 */

/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function(foods, cuisines, ratings) {
  this.foodToCuisine = new Map();
  this.foodToRating = new Map();
  this.cuisineToFoods = new Map();

  for (let i = 0; i < foods.length; i++) {
    const food = foods[i];
    const cuisine = cuisines[i];
    const rating = ratings[i];

    this.foodToCuisine.set(food, cuisine);
    this.foodToRating.set(food, rating);

    if (!this.cuisineToFoods.has(cuisine)) {
      this.cuisineToFoods.set(cuisine, new PriorityQueue((a, b) => {
        if (a.rating !== b.rating) return b.rating - a.rating;
        return a.food.localeCompare(b.food);
      }));
    }

    this.cuisineToFoods.get(cuisine).enqueue({ food, rating });
  }
};

/**
 * @param {string} food
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
  const cuisine = this.foodToCuisine.get(food);
  this.foodToRating.set(food, newRating);
  this.cuisineToFoods.get(cuisine).enqueue({ food, rating: newRating });
};

/**
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
  const heap = this.cuisineToFoods.get(cuisine);

  while (!heap.isEmpty()) {
    const top = heap.front();
    if (this.foodToRating.get(top.food) === top.rating) {
      return top.food;
    }
    heap.dequeue();
  }
};
