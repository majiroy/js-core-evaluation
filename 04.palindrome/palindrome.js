/**
 * A function that takes a word and decides if it is a palindrome or not
 * A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward, such as madam or racecar.
 *
 * Hint: Think how you would do this on paper, is there a JavaScript string method to help you do the same?
 */
var isPalindrome = function(word) {
  var re = /[\W_]/g;
  var lowRegStr = word.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr
    .split("")
    .reverse()
    .join("");
  return reverseStr === lowRegStr;
};

module.exports = isPalindrome;
