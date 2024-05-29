// **Primitive Data Types**:  
var a = 10;
console.log(typeof (a)); //number : Represents both integer and floating-point numbers. 

var b = "samir";
console.log(typeof (b)); //string  Represents a sequence of characters. 

var user = "samir";
console.log("hello " + user);

var c = true;
console.log(typeof (c)); //boolean  Represents true or false values. 

var d; // variable that has been declared but has not assigned any value
console.log(typeof (d)); //undefined

var e = null;
console.log(typeof (e));//object  Null  Represents an intentional absence of any object value. 

Symbol :  
// Represents a unique and immutable value that may be used as an object property. 

console.log(null == undefined);//true
console.log(null === undefined);//false because its data types are different



// **Non Primitive Data Types**:  

// -  Object : Represents a collection of key-value pairs. 
var person = { firstName: "md", lastName: "samir", age: 25 };
console.log(typeof(person)); //object 

// -  Array : Represents a list of elements. 
const Array = [1, 2, 3, 4, 5];
console.log(typeof (Array)); //object

// -  Function : Represents a reusable block of code. 
function myFunction() {
    return "Hello World";
}
console.log(typeof (myFunction)); //function

// convert string to a number

var str = "10";
console.log(typeof + (str));

// alternative 
var str1 = "10";
console.log(typeof Number(str1));

// convert  number to a string 
var num = 10;
console.log(typeof String(num));

var num1 = 10;
console.log(typeof toString (num1));

var num2 = 10;
console.log(typeof (num2 + ""));


// difference between parseInt and parseFloat 
// its basically convert string to number 
// parseFloat can show decimal value on the otherhand  parseInt cannot show decimal value 

// parseInt 
const string = "92";
const number = parseInt(string);
console.log(number);

// parseFloat 
const string1 = "92.5";
const number1 = parseFloat(string1);
console.log(number1);
