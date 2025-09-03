function sortStack(stack) {
    if (stack.length === 0) {
        return;
    }
    let top = stack.pop();
    sortStack(stack);
    insertInSortedOrder(stack, top);
}

function insertInSortedOrder(stack, value) {
    if (stack.length === 0 || stack[stack.length - 1] <= value) {
        stack.push(value);
        return;
    }
    let temp = stack.pop();
    insertInSortedOrder(stack, value);
    stack.push(temp);
}

// Example 
let stack = [3, 1, 4, 2];
sortStack(stack);
console.log(stack); 

// Test Cases
// Test Case 1
let stack1 = [7, 1, 5];
sortStack(stack1);
console.log(stack1); 

// Test Case 2
let stack2 = [5];
sortStack(stack2);
console.log(stack2); 

// Test Case 3
let stack3 = [-3, 14, 8, 2];
sortStack(stack3);
console.log(stack3); 

// Test Case 4
let stack4 = [];
sortStack(stack4);
console.log(stack4); 

// Test Case 5
let stack5 = [3, 3, 3];
sortStack(stack5);
console.log(stack5); 
