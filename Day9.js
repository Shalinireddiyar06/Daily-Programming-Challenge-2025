function longestCommonPrefix(strs){
  if(!strs || strs.length === 0) return"";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++){
   while (strs[i].indexOf(prefix) !== 0){
     prefix = prefix.slice(0, -1);
     if(prefix === "") return"";
   }
  }
  return prefix;
}

// Test cases
// Test Case 1
console.log(longestCommonPrefix(["flower","flow","flight"]));
// Test Case 2
console.log(longestCommonPrefix(["dog","racecar","car"]));
// Test Case 3
console.log(longestCommonPrefix(["apple","ape","april"]));
// Test Case 4
console.log(longestCommonPrefix([""]));
// Test Case 5
console.log(longestCommonPrefix(["alone"]));


