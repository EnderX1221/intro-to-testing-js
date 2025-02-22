// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
//Test 1
describe("sayHello", function () {
it("should be a defined function", function () {
    expect(typeof sayHello).toBe("function");
});
});
//Test 2
describe("sayHello", function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when', function () {
        expect(typeof sayHello()).toBe("string")
    });
});
//Test 3
describe("sayHello", function () {
it("should return Hello, Jane!", function () {
expect(sayHello ("Jane")).toBe(("Hello, Jane!"))
    });
});
//Test 4
describe("sayHello", function () {
    it("should return Hello, Alex!", function () {
        expect(sayHello ("Alex")).toBe(("Hello, Alex!"))
    });
});
//Test 5
describe("sayHello",function () {
    it('should return Hello, Pat!', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
});