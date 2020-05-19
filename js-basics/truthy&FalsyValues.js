/***************************************
 * Truthy and Falsy values and operators
 */

// falsy values: undefined, null, 0, '', NaN(not a number)
// truthy values: NOT falsy values

var height;
height = '23';

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has not been defined');
}

/*
== will convert a integer to string
=== straightly compare, data type and data value both should be equal then return true
 */
// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
}
if (height === '23') {
    console.log('The === operator it\'s a string');
}