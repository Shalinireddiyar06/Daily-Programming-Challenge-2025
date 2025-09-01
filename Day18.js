function countDivisors(N) {
    let count = 0;
    for (let i = 1; i * i <= N; i++) {
        if (N % i === 0) {
            if (i * i === N) {
                count++;
            } else {
                count += 2; 
            }
        }
    }
    return count;
}
console.log(countDivisors(12)); 


// Test cases
// Test case 1
console.log(countDivisors(18));  
// Test case 2
console.log(countDivisors(29));  
// Test case 3
console.log(countDivisors(100)); 
// Test case 4
console.log(countDivisors(1));   
// Test case 5
console.log(countDivisors(997)); 
// Test case 6
console.log(countDivisors(36));  
