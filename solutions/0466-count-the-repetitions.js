/**
 * 466. Count The Repetitions
 * https://leetcode.com/problems/count-the-repetitions/
 * Difficulty: Hard
 *
 * We define str = [s, n] as the string str which consists of the string s concatenated n times.
 *
 * - For example, str == ["abc", 3] =="abcabcabc".
 *
 * We define that string s1 can be obtained from string s2 if we can remove some characters from
 * s2 such that it becomes s1.
 *
 * - For example, s1 = "abc" can be obtained from s2 = "abdbec" based on our definition by
 *   removing the bolded underlined characters.
 *
 * You are given two strings s1 and s2 and two integers n1 and n2. You have the two strings
 * str1 = [s1, n1] and str2 = [s2, n2].
 *
 * Return the maximum integer m such that str = [str2, m] can be obtained from str1.
 */

/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
  const pattern = {};
  let s2Count = 0;
  let s2Index = 0;

  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < s1.length; j++) {
      if (s1[j] === s2[s2Index]) {
        s2Index++;
        if (s2Index === s2.length) {
          s2Index = 0;
          s2Count++;
        }
      }
    }

    if (pattern[s2Index]) {
      const [prevIndex, prevCount] = pattern[s2Index];
      const remainingCycles = Math.floor((n1 - i - 1) / (i - prevIndex));
      i += remainingCycles * (i - prevIndex);
      s2Count += remainingCycles * (s2Count - prevCount);
    } else {
      pattern[s2Index] = [i, s2Count];
    }
  }

  return Math.floor(s2Count / n2);
};
