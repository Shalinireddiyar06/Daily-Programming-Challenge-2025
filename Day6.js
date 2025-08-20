function Subarrays(arr) {
    let n = arr.length;
    let result = [];
    let map = new Map();
    let prefixSum = 0;

    for (let i = 0; i < n; i++) {
        prefixSum += arr[i];

        if (prefixSum === 0) {
            result.push([0, i]);
        }

        if (map.has(prefixSum)) {
            let list = map.get(prefixSum);
            for (let start of list) {
                result.push([start + 1, i]);
            }
        }

        // Store prefix sum in map
        if (!map.has(prefixSum)) {
            map.set(prefixSum, []);
        }
        map.get(prefixSum).push(i);
    }

    return result;
}
console.log(Subarrays([1, 2, -3, 3, -1, 2])); 


//Test Cases
//Test Case 1
console.log(Subarrays([4, -1, -3, 1, 2, -1])); 
//Test Case 2
console.log(Subarrays([1, 2, 3, 4])); 
//Test Case 3
console.log(Subarrays([0, 0, 0])); 
//Test Case 4
console.log(Subarrays([-3, 1, 2, -3, 4, 0])); 
