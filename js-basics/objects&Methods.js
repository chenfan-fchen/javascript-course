/*************** 
 * Objects and methods
*/

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(currentYear) {
        return currentYear - this.birthYear;
    }
}
john.age = john.calcAge(2018);


//or

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(currentYear) {
        this.age = currentYear - this.birthYear;
    }
}
john.calcAge(2020);
console.log(john);