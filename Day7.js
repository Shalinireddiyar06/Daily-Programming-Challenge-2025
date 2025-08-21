function trap(height){
  let n=height.length;
  if(n < 3) return 0;
  
  let leftMax=new Array(n);
    let rightMax=new Array(n);

  leftMax[0]=height[0];
  for(let i=1; i < n; i++){
    leftMax[i]=Math.max(leftMax[i-1],height[i]);
  }
  rightMax[n-1]=height[n-1];
  for(let i=n-2; i >= 0; i--){
    rightMax[i]=Math.max(rightMax[i+1],height[i]);
  }
  let water=0;
  for(let i=0; i<n; i++){
    water += Math.min(leftMax[i],rightMax[i]) - height[i];
  }
  return water;
}
// Test Cases
// Testcase 1
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// Testcase 2
console.log(trap([4, 2, 0, 3, 2, 5]));
// Testcase 3
console.log(trap([1, 1, 1]));
// Testcase 4
console.log(trap([5]));
// Testcase 5
console.log(trap([2, 0, 2]));



  

  
