function permuteUnique(s) {
  let result = [];
  let chars = s.split('').sort(); 
  let used = new Array(chars.length).fill(false);

  function backtrack(path) {
    if (path.length === chars.length) {
      result.push(path.join(''));
      return;
    }

    for (let i = 0; i < chars.length; i++) {
      if (used[i]) continue;
      if (i > 0 && chars[i] === chars[i - 1] && !used[i - 1]) continue;
      used[i] = true;
      path.push(chars[i]);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }
  backtrack([]);
  return result;
}

// Test Cases
// Test Case 1
console.log(permuteUnique("abc")); 
// Test Case 2
console.log(permuteUnique("aab"));  
// Test Case 3
console.log(permuteUnique("aaa")); 
// Test Case 4
console.log(permuteUnique("a")); 
// Test Case 5
console.log(permuteUnique("abcd")); 

