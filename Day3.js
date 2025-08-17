function findDuplicate(arr) {
    let slow = arr[0];
    let fast = arr[0];
    do {
        slow = arr[slow];         
        fast = arr[arr[fast]];    
    } while (slow !== fast);
    fast = arr[0];
    while (slow !== fast) {
        slow = arr[slow];
        fast = arr[fast];
    }
    return slow; 
}

// Test Cases
// Test Case 1
console.log(findDuplicate([1, 3, 4, 2, 2]));  
// Test Case 2
console.log(findDuplicate([3, 1, 3, 4, 2]));  
// Test Case 3
console.log(findDuplicate([1, 1]));     
// Test Case 4
console.log(findDuplicate([1, 4, 4, 2, 3]));   
// Test Case 5
console.log(findDuplicate([...Array(100000).keys()].slice(1).concat(50000))); 

