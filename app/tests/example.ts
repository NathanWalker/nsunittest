// A sample Jasmine test
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("nsstring should be hello", function() {
    const str = NSString.stringWithString('Hello');
    expect(str).toBe(<any>'Hello');
  });
});
