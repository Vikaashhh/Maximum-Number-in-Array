function findMax(arr) {
    // Use the spread operator (...) to pass array elements individually to Math.max
    return Math.max(...arr);
  }
  
  // Test the function
  console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
  