/**************************
 * Arrays
 */

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);

names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);


names[5] = 'Mary';
console.log(names);


// Different date types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); // add an element at the end
john.unshift('Mr'); // add an element at the  beginning
console.log(john);

john.pop(); // remove the last element
john.shift(); // remove the first element
console.log(john);

console.log(john.indexOf(1990));
isDesigner = john.indexOf('designer') === -1 ? 'John is a designer' :  'John is not a designer';
console.log(isDesigner);