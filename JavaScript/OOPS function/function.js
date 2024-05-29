//its is reuseable
//Function is executed when somethings invokes it(calls it)
//its defined by function keyword, and followed by name and paranthesis its includes (parameter)
//when call function we pass arguments and parameters will received.

//table
function multable(num) {
    for (let i = 1; i <= 10; i++) {
        document.write(`${num}=${num * i}`);
        document.write("<br>")
    }
}-

multable(5);
document.write("<br>")
multable(15);

function sayhelo() {
    console.log("hello samir");
}
function add(a, b) { //parameters()
    console.log(a + b); // 
}

sayhelo();
add(20, 30); //call argument(20,30 ) and(a,b) parameter received

function sum2(a, b) {
    return a + b;
}
console.log(sum2(10, 10));


function fullname(firstName, lastName) {
    return firstName + lastName
}
let firstName = "md";
let lastName = " samir";
console.log(fullname(firstName, lastName));



// this keyword refers to an object

const person = {
    firstname: "mohammad",
    lastname: " samir",
    fullName: sayhello
    //  sayhello(){
    //     console.log("hello! i am " + this.firstname + this.lastname )
    //  }
};
const person1 = {
    firstname: " md",
    lastname: " sam",
    fullName: sayhello

};
function sayhello() {
    console.log("hello! i am " + this.firstname + this.lastname)
}

person.fullName();
person1.fullName();



const person3 = {
    firstname: "mohammad",
    lastname: " samir",
    sayhello() {
        console.log("hello! i am " + this.firstname + this.lastname)

        const firstname = "sam";
        return firstname;//sam 
        // return this.firstname;//mohammad this refers to its parent object

    }
};
console.log(person3.sayhello());


const user = {
    name: "sandy",
    Message() {
        console.log(this.name);
    }
}
setTimeout(() => {
    user.Message();
}, 1000); //sandy
// setTimeout(user.Message,1000) //undefined


let user1 = {
    name: "samkhan",
    greet() {
        return `hello! ${this.name}`
    },
    greeting: function () {
        return `hello goodbye! ${this.name}`
    },
    say: () => {
        return `hello not find! ${this.name}`
    }

}
console.log(user1.greet());
console.log(user1.greeting());
console.log(user1.say()); //its called is window object


// let calculator = {
//     read(){
//         this.a = +prompt ("a enter number ");
//         this.b = +prompt ("b  enter number");
//     },
//     sum(){
//         return this.a + this.b;
//     }
// }
// calculator.read()
// console.log(calculator.sum());

//Arrow function vs normal(regular) function  

function sum(c, d) {
    return c + d;
}
console.log(sum(3, 3));

//Arrow function

let sum1 = (c, d) => c + d;
console.log(sum1(3, 3));

let mul = (a, b, c) => a * b * c;
console.log(mul(2, 3, 4));


//example 2

function random() {
    return Math.random();
}
console.log(random());

//Arrow function
let randomA = () => Math.random();
console.log(randomA());

document.addEventListener('click', function () {
    console.log("clicked..");
});

document.addEventListener('click', () => console.log("clicked"));

//Arrow function

let wel = (name, age) => `hello & welcome ${name} and your age is ${age}`;

console.log(wel("md samir", 25));

// immediately invoked function

(function () {
    console.log("hello sam");
})();

// function expression is a function that asigned in vaiable
var result = function add(a, b) {
    console.log(a + b);
};
result(1, 3)

// anonymous function is a function wihout name  it can be created using function expression 
var result = function (a, b) {
    console.log(a + b);
};
result(1, 3)


function calculator(num1, num2, operator) {

    let result;

    switch (operator) {
        case "+":
            return num1 + num2;

        case "-":
            result = num1 - num2;
            return result;

        case "/":
            return num1 / num2;

        default:
            return "could not find";
    }
}
console.log(calculator(8, 2, "/")); 

const reverse = (str) => {
    for(let char = str.length -1; char >=0; char--){
        console.log(str[char]);
    }
   
}
reverse("hello samir");