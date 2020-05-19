// ternary operator

var john = "Teacher";
var mark = "Doctor";
var job = (john === "Teacher"? "yes" : "No");
console.log("john is a teacher ?" + job);


/* switch statement condition can be a variable, or an express*/
// a variable
var drinks = "milk";
switch (drinks){
    case "juice": 
        console.log("john drink juice!");
        break;
    case "beer":
        console.log("john drink beer!");
        break;
    default:
        console.log("john drink other kinds of drinks!");

}

// an express
var age = 18
var firstName = 'John'
switch(true){
    case age < 13:
        console.log(firstName + "is a boy.");
        break;
    case age >= 13 && age < 20:
        console.log(firstName + "is a teenager.");
        break;
    case age >= 20 && age < 30:
        console.log(firstName + "is a yong man.");
        break;
    default:
        console.log(firstName + "is a man.");
}