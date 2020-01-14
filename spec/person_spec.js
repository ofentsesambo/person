let person = require("../src/person");

let myPerson = new person('Ryan', 30, 'male',['being a hardarse','agile','ssd hard drives']);

//console.log(greeting);

describe('hello funtion', function(){

    it('outputs a message', function(){
        let greeting = myPerson.hello();
        expect(myPerson.name).toBe('Ryan');
    });

    it('outputs a message', function(){
        let greeting = myPerson.hello();
        expect(myPerson.age).toBe(30);
    });

    it('outputs a message', function(){
        let greeting = myPerson.hello();
        expect(myPerson.gender).toBe('male');
    });

    it('outputs a message', function(){
        let greeting = myPerson.hello();
        expect(greeting).toBe('Hello my name is Ryan and i am 30 years old, my interest are being a hardarse, agile and ssd hard drives');
    });
});