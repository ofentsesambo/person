class Person {
  constructor(userName, userAge, userGender, userInterests) {
    this.name = userName;
    this.age = userAge;
    this.gender = userGender;
    this.interests = userInterests;
  }

  hello() {
    return (
      "Hello my name is " +
      person.name +
      " and i am " +
      person.age +
      " years old, my interest are " +
      person.interests[0] +
      ", " +
      person.interests[1] +
      " and " +
      person.interests[2]
    );
  }
}
let person = new Person("Ryan", 30, "male", [
  "being a hardarse",
  "agile",
  "ssd hard drives"
]);
let greeting = person.hello();
console.log(greeting);

module.exports = Person;
