// Import the function from the sum file 
const sum = require('./sum');


// Test the function sum
test('adds 3 + 4 to equal 7', () => {
    expect(sum(3, 4)).toBe(7);
});