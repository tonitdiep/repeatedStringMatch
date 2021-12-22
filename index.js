Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

 Example 1:
  Input: s = "abab"
  Output: true
  Explanation: It is the substring "ab" twice.

  Constraints:
    1 <= s.length <= 104
    s consists of lowercase English letters.

    /**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let subStringChecker = "";
    for (let i = 0; i < Math.floor(s.length/2); i++){
        subStringChecker += s[i];
        if (subStringChecker.repeat(s.length/subStringChecker.length) === s) return true;
    }
    return false;
       
};