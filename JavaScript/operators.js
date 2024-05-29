// assigment operators

let x;
x = 10;
// let z;
z = x ** 3;
console.log(z)
z = x % 4;
console.log(z)
x= x+3;
console.log(x) //13
x += 3
console.log(x)//16
x++
console.log(x)//17

let a = 5;
let b = '5';
console.log(a+b);

let c = 5;
let d = c + 5 / 5; //6
let e = (c + 5) / 5; //2
console.log(e);


// //comparison operator
// let sam = 5 == 5;
// let sam1 = 5 == 10;
// let sam2 = "5" == 5;
// let sam3 = 5 === "5"; === checks equal value and also its data type
// console.log(sam);//true
// console.log(sam1);//false
// console.log(sam2);//true
// console.log(sam3);//false 

console.log("5" - 3);
console.log("5" + 3 + 3);

// let n = 8!= 5;//true
// let n1 = 5!= 5;//false
// let n2 = 5!== 5;//false

// console.log(n2);


// let g = 5>8;//false
// let g1 = 5<8;//true
// console.log(g1);

// // Logical and(&&) operator if one value is incorrect than both value is show incorrect

if ((4 == 4 && 6 == 6)) {
    console.log("Correct");
} else {
    console.log("Incorrect");
}//correct


if ((4 == 4 && 6 == 10)) {
    console.log("Correct");
} else {
    console.log("Incorrect");
}//incorrect


// or|| operator if one value is correct and another value is incorrect
//  still its give true value

if ((5==5||10==20)){
    console.log("true")
}
else{
    console.log("false")
} //true

if  ((20==10||10==20)){
console.log("true")
} else{
    console.log("false")
}//false



var age = prompt("Enter your age gentleman")
if(age>=18){
    alert ("you can give  vote");
}
else if (age<18){
    alert ("you cannot vote");
}



//ternary operator
let ages =18;
let drink = ages>18 ? "chai" : "milk";
console.log(drink)


let a1= 18;
let a2= a1 > 17 ?  "yes you are right" : "wrong";
console.log(a2);

