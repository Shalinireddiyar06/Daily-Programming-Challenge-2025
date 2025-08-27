function longestPalindrome(s) {
    if (s.length <= 1) return s;

    let start = 0, maxLength = 1;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);
        expandAroundCenter(i, i + 1);
    }
    return s.substring(start, start + maxLength);
}


// Test Cases
// Test Case 1
console.log(longestPalindrome("babad")); 
// Test Case 2
console.log(longestPalindrome("cbbd")); 
// Test Case 3
console.log(longestPalindrome("a")); 
// Test Case 4
console.log(longestPalindrome("aaaa")); 
// Test Case 5 
console.log(longestPalindrome("abc"));   
