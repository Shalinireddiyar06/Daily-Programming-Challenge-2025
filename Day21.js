function testReverse(input, expected) {
    let stack = input.slice();
    reverseStack(stack);
    console.log("Input:", input, "Output:", stack, "Expected:", expected, "Pass:", JSON.stringify(stack) === JSON.stringify(expected));
}
function insertAtBottom(stack, item) {
    if (stack.length === 0) {
        stack.push(item);
    } else {
        let top = stack.pop();
        insertAtBottom(stack, item);
        stack.push(top);
    }
}
function reverseStack(stack) {
    if (stack.length <= 1) return;
    let top = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, top);
}

// Test cases:

console.log(testReverse([1, 2, 3, 4], [4, 3, 2, 1]));      
// Test case 1
console.log(testReverse([3, 2, 1], [1, 2, 3]));            
// Test case 2
console.log(testReverse([5], [5])); 
// Test case 3
console.log(testReverse([-5, -10, -15], [-15, -10, -5]));  
// Test case 4
console.log(testReverse([], []));  
// Test case 5
console.log(testReverse([3, 3, 3], [3, 3, 3]));            
