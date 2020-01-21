let person = require("../src/person");

let myPerson = new person("Ryan", 30, "male", [
  "being a hardarse",
  "agile",
  "ssd hard drives"
]);

describe("hello funtion", function() {
  let greeting = myPerson.hello();
  it("should return Ryan", function() {
    expect(myPerson.name).toBe("Ryan");
  });

  it("should return the age", function() {
    expect(myPerson.age).toBe(30);
  });

  it("should return the gender", function() {
    expect(myPerson.gender).toBe("male");
  });

  it("should return hello messege", function() {
    expect(greeting).toBe(
      "Hello my name is Ryan and i am 30 years old, my interest are being a hardarse, agile and ssd hard drives"
    );
  });
});
