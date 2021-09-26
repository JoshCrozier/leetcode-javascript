/**
 * 273. Integer to English Words
 * https://leetcode.com/problems/integer-to-english-words/
 * Difficulty: Hard
 *
 * Convert a non-negative integer `num` to its English words representation.
 */

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  if (num === 0) {
    return 'Zero';
  }

  return convert(num).replace(/\s+/g, ' ').trim();
};

const belowTen = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const belowTwenty = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const belowHundred = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

function convert(num) {
  if (num < 10) return belowTen[num];
  else if (num < 20) return belowTwenty[num - 10];
  else if (num < 100) return belowHundred[Math.floor(num / 10)] + ' ' + convert(num % 10);
  else if (num < 1000) return convert(Math.floor(num / 100)) + ' Hundred ' +  convert(num % 100);
  else if (num < 1000000) return convert(Math.floor(num / 1000)) + ' Thousand ' +  convert(num % 1000);
  else if (num < 1000000000) return convert(Math.floor(num / 1000000)) + ' Million ' +  convert(num % 1000000);
  else return convert(Math.floor(num / 1000000000)) + ' Billion ' +  convert(num % 1000000000);
}
