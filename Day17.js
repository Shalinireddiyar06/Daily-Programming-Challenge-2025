function primeFactorization(N) {
  const factors = [];

  while (N % 2 === 0) {
    factors.push(2);
    N = N / 2;
  }

  for (let i = 3; i * i <= N; i += 2) {
    while (N % i === 0) {
      factors.push(i);
      N = N / i;
    }
  }
  if (N > 2) {
    factors.push(N);
  }
  return factors;
}
console.log(primeFactorization(18));     

// Test Cases
// Test Case 1
console.log(primeFactorization(30));
// Test Case  2
console.log(primeFactorization(49));      
// Test Case 3
console.log(primeFactorization(19));      
// Test Case 4
console.log(primeFactorization(64));      
// Test Case 5
console.log(primeFactorization(123456));

