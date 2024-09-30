/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  const stack = [];
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (!bracketMap[char]) {
      stack.push(char);
    } else if (stack.pop() !== bracketMap[char]) {
      return false;
    }
  }

  return stack.length === 0;
};

module.exports = { isValid };
