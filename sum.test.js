const { getNumberInput, getOperatorInput, calculate, main } = require("./sum");


describe("calculate", () => {
    test("should add two numbers correctly", () => {
      expect(calculate(2, 3, "+")).toBe(5);
    });
  
    test("should subtract two numbers correctly", () => {
      expect(calculate(5, 2, "-")).toBe(3);
    });
  
    test("should multiply two numbers correctly", () => {
      expect(calculate(4, 3, "*")).toBe(12);
    });
  
    test("should divide two numbers correctly", () => {
      expect(calculate(10, 2, "/")).toBe(5);
    });
  
    test("should throw an error for division by zero", () => {
      expect(() => calculate(10, 0, "/")).toThrow(
        "Division by zero is not allowed."
      );
    });
  
    test("should throw an error for invalid operator", () => {
      expect(() => calculate(10, 2, "^")).toThrow(
        "Invalid operator."
      );
    });
  });
  
  describe("main", () => {
    test("should perform addition correctly", () => {
      const spy = jest.spyOn(console, "log");
      global.process.stdin.push("5\n");
      global.process.stdin.push("3\n");
      global.process.stdin.push("+\n");
      main();
      expect(spy).toHaveBeenCalledWith("The result of 5 + 3 is 8");
      spy.mockRestore();
    });
  
    test("should perform subtraction correctly", () => {
      const spy = jest.spyOn(console, "log");
      global.process.stdin.push("7\n");
      global.process.stdin.push("2\n");
      global.process.stdin.push("-\n");
      main();
      expect(spy).toHaveBeenCalledWith("The result of 7 - 2 is 5");
      spy.mockRestore();
    });
  
    test("should handle invalid input", () => {
      const spy = jest.spyOn(console, "log");
      global.process.stdin.push("invalid\n");
      global.process.stdin.push("2\n");
      global.process.stdin.push("+\n");
      main();
      expect(spy).toHaveBeenCalledWith("Invalid input. Please enter a number.");
      spy.mockRestore();
    });
  
    test("should handle division by zero", () => {
      const spy = jest.spyOn(console, "error");
      global.process.stdin.push("10\n");
      global.process.stdin.push("0\n");
      global.process.stdin.push("/\n");
      main();
      expect(spy).toHaveBeenCalledWith("Division by zero is not allowed.");
      spy.mockRestore();
    });
  
    test("should handle invalid operator", () => {
      const spy = jest.spyOn(console, "error");
      global.process.stdin.push("5\n");
      global.process.stdin.push("3\n");
      global.process.stdin.push("^\n");
      main();
      expect(spy).toHaveBeenCalledWith("Invalid operator.");
      spy.mockRestore();
    });
  });
  main();