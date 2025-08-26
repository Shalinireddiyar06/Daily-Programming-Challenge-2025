function isValid(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (map[char]) {
            let top = stack.length ? stack.pop() : '#'; 
            if (top !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    } 
    return stack.length === 0;
}

// Test Cases
// Test Case 1
console.log(isValid("()"));       
// Test Case 2
console.log(isValid("([)]"));     
// Test Case 3
console.log(isValid("[{()}]"));  
// Test Case 4
console.log(isValid(""));         
// Test Case 5
console.log(isValid("{[}"));     
