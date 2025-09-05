function firstElementKTimes(arr, k) {
    let freq = new Map();
    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (let num of arr) {
        if (freq.get(num) === k) {
            return num;
        }
    }
    return -1;
}
console.log(firstElementKTimes([3, 1, 4, 4, 5, 2, 6, 1, 4], 2)); 

// Test Cases
// Test Case 1
console.log(firstElementKTimes([2, 3, 4, 2, 2, 5, 5], 2));   
// Test Case 2
console.log(firstElementKTimes([1, 1, 1, 1], 1)); 
// Test Case 3
console.log(firstElementKTimes([10], 1));  
// Test Case 4
console.log(firstElementKTimes([6, 6, 6, 6, 7, 7, 8, 8, 8], 3)); 
