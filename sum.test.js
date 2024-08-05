// Import the function from the sum file 
const { sum, subtract, multiply, divide } = require('./sum');


// Test the function sum
test('adds 3 + 4 to equal 7', () => {
    expect(sum(3, 4)).toBe(7);
});


// Test the function subtract
test('subtracts 4 - 3 to equal 1', () => {
    expect(subtract(4, 3)).toBe(1);
})


// Test the function multiply
test('multiplies 3 * 4 to equal 12', () => {
    expect(multiply(3, 4)).toBe(12);
})


// Test the function divide
test('divides 12 / 3 to equal 4', () => {
    expect(divide(12, 3)).toBe(4);
})