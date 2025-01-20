function foo(a, b) {
  //Type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Invalid input: Both parameters must be numbers';
  }
  return a + b;
}

console.log(foo(1, '1')); // Output: Invalid input: Both parameters must be numbers
console.log(foo(1, 1)); // Output: 2

//Or type conversion
function foo2(a, b) {
  return Number(a) + Number(b);
}

console.log(foo2(1, '1')); // Output: 2