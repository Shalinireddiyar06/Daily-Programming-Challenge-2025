function fibonacci(n) {
    if (n === 0) return 0; 
    if (n === 1) return 1; 
    let dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// Test cases
// Test cas 1
console.log(fibonacci(5));    
// Test case 2
console.log(fibonacci(10));   
// Test case 3
console.log(fibonacci(0));    
// Test case 4
console.log(fibonacci(1000)); 

