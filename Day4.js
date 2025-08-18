function merge(arr1,arr2){
  let a =arr1.length, b =arr2.length;
  
  for(let i = 0; i < a; i++){
    if(arr1[i] > arr2[0]) {
      let temp = arr1[i];
      arr1[i] = arr2;
      arr2 = temp;
      
      let first =arr2;
      let x = 1;
      while(x < b && arr2[x] < first){
        arr2[x-1] = arr2[x];
        x++;
      }
      arr2[x-1]=first;
    }
  }
}

// Test Cases

// Test Case 1
arr1 = [1,3,5], arr2=[2,4,6];
merge(arr1,arr2);
console.log("Test Case 1:", arr1, arr2);

// Test Case 2
arr1 = [10,12,14], arr2=[1,3,5];
merge(arr1,arr2);
console.log("Test Case 2:", arr1, arr2);

// Test Case 3
arr1 = [2,3,8], arr2=[4,6,10];
merge(arr1,arr2);
console.log("Test Case 3:", arr1, arr2);

// Test Case 4
arr1 = [1], arr2=[2];
merge(arr1,arr2);
console.log("Test Case 4:", arr1, arr2);

//Test Case 5

arr1 = Array.from({length: 100000}, (_, i) => i + 1);      
arr2 = Array.from({length: 50000}, (_, i) =>50001 + i); 

merge(arr1, arr2);
console.log("Test Case 5:", arr1,arr2);

         



