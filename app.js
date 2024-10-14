//! JavaScript Functions:


//! Code-Driven Invocation
function myFunction(fullName, age, dateOfBirth = 2000){
    console.log('Hello ' + fullName + ' I am ' + age + ' My Date of Birth ' + dateOfBirth);
};

myFunction('Ibrahim,', '20.', '2004.');
myFunction('Shipon,', '25.', '2000.');

//! fullName => Parameter
//! Ibrahim, Shipon => Argument


//! Event-Driven Invocation
function notNow() {
    console.log('Not now');
};

document.getElementById('btn').addEventListener('click', notNow);


//! Autometic (Self-Invocked) Invocation
(function(message){
    console.log(message, 'I am self-Invocking Function.');
})('Hello,');

/*
*যেহেতু এটা নিজে থেকেই রান করবে তাই এর নাম দেওয়ার দরকার নাই, যে কারনে কোনো Function name ব্যবহার করা হয়নি ।
*/


//! Function Expression
let maths = function(x, y) {
    return x * y;
};
console.log(maths(3,4));
console.log(maths(4,4));


function newFunc() {
    let firstName = 'Shipon';
    console.log(firstName);
};

newFunc();


//_____________________






let numbers = [4, 5, 6, 7, 8];
let sqNumbers = numbers.map(function(number) {
   return number * number
});

console.log(sqNumbers);





//! Arrow Function
/*
let add = function(x,y) {
    return x + y;
};

console.log(add(5,6));
*/

let add = (x,y) => x + y;

console.log(add(5,6));




//! Nested Function
function greet(firstName) {
    function sayHello() {
        alert('Hello ' + firstName);
    }
    return sayHello()
}
greet('Shipon');