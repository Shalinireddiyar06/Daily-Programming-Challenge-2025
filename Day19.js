function evaluatePostfix(expression) {
  const stack = [];
  const tokens = expression.trim().split(/\s+/);

  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(parseInt(token, 10));
    } else {
      let b = stack.pop();
      let a = stack.pop();

      switch (token) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          stack.push(Math.trunc(a / b));
          break;
        case '^':
          stack.push(Math.pow(a, b)); 
          break;
        default:
          throw new Error("Invalid operator: " + token);
      }
    }
  }

  return stack.pop();
}

// Test Cases
console.log(evaluatePostfix("2 1 + 3 *")); 
// Test Case 1
console.log(evaluatePostfix("5 6 +")); 
// Test Case 2
console.log(evaluatePostfix("3 4 2 * 1 5 - 2 3 ^ ^ / +"));
// Test Case 3
console.log(evaluatePostfix("-5 6 -")); 
// Test Case 4
console.log(evaluatePostfix("15 7 1 1 + - / 3 * 2 1 1 + + -")); 
// Test Case 5
console.log(evaluatePostfix("5"));                  
