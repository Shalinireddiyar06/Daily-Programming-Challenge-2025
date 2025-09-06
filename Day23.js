function slidingWindowMaximum(arr, k) {
    const n = arr.length;
    const deque = [];
    const result = [];
    
    for (let i = 0; i < n; i++) {
        if (deque.length && deque[0] === i - k)
            deque.shift();
            while (deque.length && arr[deque[deque.length - 1]] < arr[i])
            deque.pop();
            deque.push(i);
        if (i >= k - 1)
            result.push(arr[deque[0]]);
    }
    return result;
}


// Test Cases
// Test Case 1
console.log(slidingWindowMaximum([1, 5, 3, 2, 4, 6], 3)); 
// Test Case 2
console.log(slidingWindowMaximum([1, 2, 3, 4], 2)); 
// Test Case 3
console.log(slidingWindowMaximum([7, 7, 7, 7], 1)); 

