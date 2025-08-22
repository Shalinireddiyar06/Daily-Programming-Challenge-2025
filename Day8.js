function reverseWords(s){
  let words = s.trim().split(/\s+/);
  return words.reverse().join(" ");
}

// Test cases
// Test case 1
console.log(reverseWords("the sky is blue"));
// Test case 2
console.log(reverseWords("  hello world  "));
// Test case 3
console.log(reverseWords("a good   example"));
// Test case 4
console.log(reverseWords(" "));
// Test case 5
console.log(reverseWords("word"));
