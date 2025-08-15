function sortarray(arr){
  let low=0, mid=0, high=arr.length-1;
  while(mid<=high){
    if(arr[mid]===0){
      [arr[low],arr[mid]]=[arr[mid],arr[low]];
      low++;
      mid++;
    }
    else if (arr[mid]===1){
      mid++;
    }else{
      [arr[mid],arr[high]]=[arr[high],arr[mid]];
      high--;
    }
  }
  return arr;
}

// Test Cases:
// Test Case 1
console.log(sortarray([0,1,2,1,0,2,1,0]));
// Test Case 2
console.log(sortarray([2,2,2,2]));
// Test Case 3
console.log(sortarray([0,0,0,0]));
// Test Case 4
console.log(sortarray([1,1,1,1]));
// Test Case 5
console.log(sortarray([2,0,1]));
// Test Case 6
console.log(sortarray([]));





  
