function findMissingNumber(arr){
  const n=arr.length + 1;
  const expectedSum=(n*(n+1)) / 2;
  let actualSum=0;
  for(let num of arr){
    actualSum += num;
  }
  return expectedSum - actualSum;
}

// Test cases
// test Case 1
console.log(findMissingNumber([1,2,4,5]));
// test Case 2
console.log(findMissingNumber([2,3,4,5]));
// test Case 3
console.log(findMissingNumber([1,2,3,4]));
// test Case 4
console.log(findMissingNumber([1]));
// test Case 5
let bigArr=Array.from({length:999999},(_, i) => i + 1);
console.log(findMissingNumber(bigArr));
