function findLeaders(arr){
  let n = arr.length;
  let leaders=[];
  let maxFromRight = arr[n-1];

  leaders.push(maxFromRight);
  for(let i = n-2; i >= 0; i--){
    if(arr[i]>maxFromRight){
    leaders.push(arr[i]);
    maxFromRight = arr[i];
  }
}
return leaders.reverse();
}
console.log(findLeaders([16,17,4,3,5,2]));

// Test Cases
// Test case 1
console.log(findLeaders([1,2,3,4,0]));
// Test case 2
console.log(findLeaders([7,10,4,10,6,5,2]));
// Test case 3
console.log(findLeaders([5]));
// Test case 4
console.log(findLeaders([100,50,20,10]));
// Test case 5
console.log(findLeaders([1,2,3,1000000]));




