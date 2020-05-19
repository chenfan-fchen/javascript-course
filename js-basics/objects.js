/****************
 * Objects and properties
 */

// object {}, contains key-value pair, like 'firstName' is the properties of 'john'
// Object literal
var  john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
}
console.log(john.firstName);
console.log(john['firstName']);
var x = 'birthYear';
console.log(john[x]);
console.log(john['family'][1]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1991;
jane['lastName'] = 'Smith'
console.log(jane);