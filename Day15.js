function lengthOfLongestSubstring(s) {
    let maxLen = 0;
    let start = 0;
    let seen = {};

    for (let end = 0; end < s.length; end++) {
        let char = s[end];
        if (seen.hasOwnProperty(char) && seen[char] >= start) {
            start = seen[char] + 1;
        }
        seen[char] = end;
        maxLen = Math.max(maxLen, end - start + 1);
    }
    return maxLen;
}

// Test cases
// test case 1
console.log(lengthOfLongestSubstring("abcabcbb")); 
// test case 2
console.log(lengthOfLongestSubstring("bbbbb"));    
// test case 3
console.log(lengthOfLongestSubstring("pwwkew"));   
// test case 4
console.log(lengthOfLongestSubstring("abcdefgh")); 
// test case 5
console.log(lengthOfLongestSubstring("a"));        
