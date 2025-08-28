function countSubstringsWithKDistinct(s, k) {
    function atMostK(s, k) {
        let left = 0, right = 0, count = 0;
        const freq = {};
        let distinct = 0;

        while (right < s.length) {
            if (!freq[s[right]]) {
                distinct++;
            }
            freq[s[right]] = (freq[s[right]] || 0) + 1;

            while (distinct > k) {
                freq[s[left]]--;
                if (freq[s[left]] === 0) {
                    distinct--;
                }
                left++;
            }
            count += right - left + 1;
            right++;
        }
        return count;
    }

    if (k > s.length || k === 0) return 0;
    return atMostK(s, k) - atMostK(s, k - 1);
}


// Test cases
// Test case 1
console.log(countSubstringsWithKDistinct("pqpqs", 2)); 
// Test case 2
console.log(countSubstringsWithKDistinct("aabacbebebe", 3));
// Test case 3
console.log(countSubstringsWithKDistinct("a", 1));
// Test case 4
console.log(countSubstringsWithKDistinct("abc", 3)); 
// Test case 5
console.log(countSubstringsWithKDistinct("abc", 2));         
