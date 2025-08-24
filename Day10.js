function groupAnagrams(strs) {
  let map = new Map();
  for (let str of strs){
    let key = str.split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  return Array.from(map.values());
}

// Test Cases 
// Test Case 1
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Test Case 2
console.log(groupAnagrams([""]));
// Test Case 3
console.log(groupAnagrams(["a"]));
// Test Case 4
console.log(groupAnagrams(["abc","bca","cab","xyz","zyx","yxz"]));
// Test Case 5
console.log(groupAnagrams(["abc","def","ghi"]));
