// //OBJECT 

let person = {name:"samir"}
let person1 = person
person1.name="sam";
console.log(person)//sam

shallow copy means  only  the first level of the object is copied.
it achieved by spread operator and object.assign 

let per = {name:"samir"};
let per1 = {...per}
per1.name= "sam"
console.log(per)//samir
console.log(per1)//sam

let person = {name:"samir"}
let person1 = {...person,name:"samkhan"};
console.log(person1)//samkhan
console.log(person)//samir

let person = {name:"samir"}
 let person1 = Object.assign({},person);
person1.name= "sam";
console.log(person1)

Deep copy   means that  all  levels (nested) of the object is copied.
it achieved by jSON.parse and JSON.stringyfy

let user = {
  name:"sam",
  address:{
  city:"kolkata",
}
};
let user1 = JSON.parse(JSON.stringify(user));
user1.name="samkhan"
user1.address ="noida";
console.log(user);
console.log(user1); 


........ array destructuring.......

const data2 = {name:"samir",age:25,add:"kolkata"};
const {name,age} = data2 ;
console.log([name,age])//samir 25

const data = ["samir","sam"]
const [s,m] = data;
console.log(s,m)


//spread operator (merge)

let a=[1,2,3,4]
let b=[5,6]
let c= [...a,...b]
console.log(c)
[1, 2, 3, 4, 5, 6]

let data={name:"samir",age:25,skill:'js'}
let info={city:"kolkata", skill:"reactjs"}
 data = {...data,...info}
console.log(data)
{name: 'samir', age: 25, skill: 'reactjs', city: 'kolkata'}

//SET

only remove duplicate value
let arr = ["a","b","c","a"]
let arr1 = new Set(arr);
console.log(...arr1)//abc

add and than remove duplicate value
let arr = ["a","b","c"];
let arr1 = [...arr,"a","b","d"];
let arr2 = new Set(arr1)
 console.log(...arr2)


SORT

const n = [1,2,4,5,3,9,6] 
const n1 = n.sort(); // default ascending to descending order chota se bada
const n1 = n.sort((a,b) => a-b); //ascending to descending order chota se bada
const n1 = n.sort((a,b) => b-a); // descending to ascending order  bada chota se
console.log(n1);

var student = [
    {id:1,name:"sam",add:"kol"},
    {id:2,name:"samir",add:"mum"},
]
var student1  = [
    {id:1,comName:"tcs"},
    {id:2,comName:"wipro"},
]

var result = [];
student.map((a) => {
  student1.map((b) =>{
    if(a.id == b.id){
      result.push({...a,...b});
    }
  })
})

console.log(...result);

nested array 
let arr = [
    [1,2],
    [3,4,5],
    [6,[7,[8,9],10]]

];
console.log(arr.flat(3)) // use for mutiple []
console.log(arr.flat(Infinity))// use for mutiple []
console.log([].concat(...arr))// [[]]  use concat

let kam = [1,5,8]
let min1 = Math.min.apply(Math,kam)
console.log(min1); //1


let jyeda = [1,5,8]
let max1 = Math.max.apply(Math,jyeda)
console.log(max1); //8

//filter find max min
let fil = [1,2,3,4,5]
let fil1 = fil.filter((val) => val < 2)
console.log(fil1)

// let fil = [1,2,3,4,5]
// let fil1 = fil.filter((f) => f > 4 )
// console.log(fil1)

//filter

let arr = [1,2,3,4,5,8,10]
let arr1 = arr.filter((val)=> val < 10)
console.log(arr1)


odd
let odd = [1,2,3,4,5,8,10]
let odd1 = odd.filter(val => val % 2 ==1)
console.log("Odd",odd1)

even
let even = [1,2,3,4,5,8,10]
let even1 = even.filter(val => val % 2 == 0)
console.log("even", even1)

const data = [
  {
    n: "samir",
    work: "frontend",
    salary: 30
  },
  {
    n: "sam",
    work: "backend",
    salary: 25
  },
  {
    n: "shubham",
    work: "backend",
    salary: 20
  },
  {
    n: "sandip",
    work: "frontend",
    salary: 30
  },
];
// const data1= data.filter((val) => val.work == "frontend")
const data1 = data.filter((val) => val.salary < 30)
console.log(...data1);

// //map
let arr = [1,2,3]
let arr1 = arr.map(mul => mul * 3 )
console.log(arr1)  

reduce
let arr = [1,2,3]
let arr1 = arr.reduce((total,num) => {
    return total + num ;
},0 )
console.log(arr1)

for loop 
for(let i = 1; i<=10; i++){
    console.log(i,"hello sam...")
}

for (let i = 5; i<=50; i= i+5){
  console.log(i)
}

for (let i=1; i<=10; i++){
  console.log(` 5 x ${i} = ${5 * i} `)

}

odd
for(let i=1; i<=10; i++)
  if( i % 2 === 1){
    console.log("odd", i)
}
 even
for(let i=1; i<= 10; i++){
  if(i % 2 === 0)
  console.log("even", i);
}

while
let i=1;
while(i<=10){
  console.log(i,"hello sam")
  i++
}

do while
let j=1;
do{
  console.log(j,"hello samir")
  j++
}
while(j<=10)

//class
class sam{
  constructor(name){
    this.name = name;
  }
}
let name1 = new sam("md samir")                         
let name2 = new sam("md sam")
console.log(name1)
console.log(name2)

class samir{
  constructor(){
    this.name = "sam";
  }
}
let name1 = new samir()
console.log(name1)

class car {
  constructor() {
      this.make = "tata";
      return { make: 'swift dezire' };
  }
}
const mycar = new car();
console.log(mycar.make)
swift dezire

 inheritence
class student{
  constructor(name){
    this.name=name;
  }
}
class parent extends student{
  constructor(p,rollNo,age){
    super(p);
    this.rollNo=rollNo;
    this.age=age;

  }
  msg(){
    return "hii " +  this.name + ' your roll no is ' + this.rollNo + " and age is " + this.age;
  }
}
let stdnt= new parent("md samir",92,25);
console.log(stdnt.msg())

splice 
let arr=[1,2,3,4,5]
arr.splice(1,3,"sam") //remove from index no 1,2,3 and added new items 
console.log(arr); [1, 'sam', 5]

let arr=[1,2,3,4,5]
arr.splice(1,0,"sam") //start from index no 1 and added new items 
console.log(arr);  [1, 'sam', 2, 3, 4, 5]

slice 
let arr = ["mango","grapes","apple","cherry"]
let arr1 = arr.slice(1,3)  its display from given starting index and less than last index
console.log(arr1) ['grapes', 'apple']


callback function
function sayhello(){
  console.log("hii sam...")
}

function add(a,b,callback){
  console.log(a+b)
  callback()

}
// sayhello();
(add(5,10,sayhello))


let firstName ="md"
let lastName = "samir";
function fullname(){
     console.log(firstName,lastName)
}
fullname()

function fullname(firstName,lastName){ 
  console.log(firstName,lastName)
}

fullname("md","samir")

Arrow function
const mul = (a,b,c) => (a*b*c)
console.log(mul(1,2,3))


immediately invoked function

(function (){
  console.log("hello sam");
})();

const person = {
  firstname:"md",
  lastname:" samir",
  fullname:sayhello
}
const person1 = {
  firstname:"md",
  lastname:" sam",
  fullname:sayhello
}

function sayhello(){
 console.log("hello i am " + this.firstname  +  this.lastname )
}

person.fullname()
person1.fullname()



let user1 = {
  name:"samkhan",
  greet(){
      return `hello! ${this.name}`
  },
  greeting:function (){
      return `hello goodbye! ${this.name}`
  },
      say:() => {
          return `hello not find! ${this.name}`
      }

}
console.log(user1.greet());
console.log(user1.greeting());
console.log(user1.say()); //its called  window object


const obj = {
  course:"btech",
  id:"instagram",
  age: 25,
}
console.log(obj);

const obj1 = {
   name:"md samir",
   about(){
      return this.name + " course is " +  this.course + " age is " + this.age + " "+ this.id ;
  },

  __proto__:obj 
}
console.log(obj1.about())



closure
function sum(a){
  console.log("closure " + a);
  let b = 10;
  return function sum1(c){
       return a + b + c;
  }
}
let sum1 = sum(5);
console.log(sum1(15))

function clsr(){
  let a= 10;
  return function child(b){
     return a + b;
  }
}
let child = clsr()
console.log(child(10))


let arr =[
    [1,2],
    [3,4],
    [5,6,[7,8,9],10] 
];

console.log(arr.flat(Infinity))


function sayHi(){
  console.log("Hii")
}

let a= 10;
let b = 20;


function sam(){
  console.log("1st sam")
}

function samkhan(callback){
  console.log("hello samir")
  callback();

}
samkhan(sam)  //here samkhan is higher order function and sam is callback function


function sayHi(msg){
  console.log(msg);
} 
function add(num1,num2,callback){
  console.log(num1 + num2);
  callback();
}

add(1,3,() => sayHi("hiii"));


console.log("1st apps call");

function  login(){
  console.log("login end");
}

 function email(callback){
    setTimeout(()=>{
        console.log("email end");
        callback();
    },2000);

}

email(login);
console.log("last call")

// currying using normal function 
let cur = function(a){
  return function(b){
    return function(c){
      return a + b + c ;
    }
  } 
}
let curry = cur(1)(3)(3)
console.log(curry)  //7

// currying using  arrow function 
const curr = (a) => (b) => (c) => (d) =>
 a + b + c + d;

let carry = curr(3)(3)(3)(3)
console.log(carry); //12

     //infinite curry
     function add(a) {
      return function (b) {
          if (b) return add(a + b);
          return a;
      }
  }
  console.log(add(1)(2)(3)(4)(4)()) //14


//  Logical (&&)and operator if one value is incorrect than both value is show incorrect

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


or|| operator if one value is correct and another value is incorrect
 still its give true value

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

reverse string value 
const reverse = (str) => {
  for (let char= str.length -1; char >= 0; char--) {
    console.log(str[char]);
  }
}
reverse("hello samir");

let n = "hello samir";
let n1 = [...n].reverse();
console.log([...n1]);

let n = "hello samir";
let n1 = n.split('').reverse();
console.log([...n1]);

reverse array 
let arr = [1,2,3]
let arr2 = arr.reverse();
console.log(arr2);

let rev = ["samir","roht","tahzeeb", "SAM" ];
rev.reverse()
console.log(rev);

let finding= [2,1,3]
let find1 = finding.find((item)=> item < 3 ) //&& item >10
console.log(find1);

63 swap two no
let x = 10, y = 20;
[x,y]=[y,x];
console.log(x,y) //20 10

 let data = [1,2,3,4]
data.pop();
data[3]="samir";
 let [x,y,z,] = data
 console.log(x,y,z) //123
console.log(data)//1 2 3 samir

const array = [1,3,5,"samir"];
const arry = array.map((val)=> val)
console.log(arry)



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


covert  object to array 
const obj = { name: "samir", age: 22, country: "india" };
const arr = Object.entries(obj);
console.log(arr.flat());

covert  array to object
const newObj =  Object.fromEntries(arr)
console.log(newObj);

const obj = { name: "samir", age: 22, country: "india" };
const { name, age,country } = obj;
console.log(["name:", name, "age:", age, "country:",country]);

// Trim remove extra space from start or end position
const space = "    small samir";
console.log(space.trim());

//ReplaceAll remove extra space from  middle position
const extraSpace = "extra      samir";
console.log(extraSpace.replaceAll(/\s+/g, " "));

// for star pattern 
for (var i = 1; i <= 5; i++) {
  var pattern = "";
  for (var j = 1; j <= i; j++) {
    pattern = pattern + " * ";
  }
  console.log(pattern);
}

// for leap year 
var year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year, "it is  a leap year");
} else {
  console.log("it is  not a leap year");
}

second method 
var year = 2026;
if ((year % 4 === 0)) {
  console.log(year, "leap year");
} else {
  console.log("not leap year");
}

find largest word 
const words = "hii i am mohammad samir";
const words2 = words.split(" ");
console.log(words2);

const words3 = words2.sort((a, b) => a.length - b.length);
console.log(words3.at(-1));

check  factorial number 
const factorial = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(5));


find Average 
const Avg = (avg) => {

  let total = avg.reduce((acc,current) => acc + current, 0)
  console.log(total);
  return total /avg.length;
}
console.log(Avg([3,5,2]));

// let average = [3,5,2] ;
// let average1 = average.reduce((acc,current) => acc + current, 0)
// console.log(average1);
// let final = average1 / average.length;
// console.log(final);

const equalValue = (arr1, arr2) => {
  return arr1.every((curVal, index) => curVal === arr2[index])
}
console.log(equalValue([1, 2, 3], [1, 2, 3])); //true
console.log(equalValue([1, 2, 3], [1, 2, 4])); //false


let num = [1234];
let num1 = Array.from(String(num), Number).reduce((acc, cur) => acc + cur)
console.log(num1);

const sumSqr = (arr) => {
  let sum = 0;
  for (let elem of arr) {
    sum = sum + elem * elem;
  }
  return sum;
}
console.log(sumSqr([1, 2, 3]));


const startwith = (str, substr) => {
  return str.toLowerCase().startsWith(substr.toLowerCase())
}
console.log(startwith("hello", "Hello"))


check how many time same numbers repeat  
const numbers = [1, 2, 3, 4, 3];
let counts = {};
for (let elements of numbers) {
  counts[elements] = (counts[elements] || 0) + 1
}
console.log(counts);


const repeatString = (str,num) => {
 return num > 0 ? str.repeat(num) : str; //  if num value is 0 than  still string value we get
  return str.repeat(num)
  }
console.log(repeatString(" samir",3));


const truncateString = (str,num) =>{
return num <=0 ? str : str.substring(0, num).concat("...")
}
console.log(truncateString("mohammad samir software engineer",15));


find number between them 0 to 5..
const numRange = (a,b, arr = [] ) => {
while (a <= b){
  arr.push(a);
  a++;
}
return arr;
}
console.log(numRange(0,5));


calculate simple interest 
const simpleInterest = (principal, rate, time) => {
  return principal * rate * time / 100;
}
console.log(simpleInterest(1000, 5, 3)); // output 100


find days between two date 

let findDays = (d1,d2) =>{
let date1 = new Date(d1)
let date2 = new Date(d2)

let diff = Math.abs(date2 - date1);
return diff / (1000 * 60 * 60 * 24);

}
console.log(findDays("01-01-2024", "02-01-2024"));// 1st one is month 2nd one is day 

// find age using date of birth

function findAge(birthDate) {
  let todayDate = new Date();
  birthDate = new Date(birthDate);

  let age = todayDate.getFullYear() - birthDate.getFullYear();
  let monthDiff = todayDate.getMonth() - birthDate.getMonth();
  // (current month may and birth month is june than we get -1 this is < 0) (month is equal) (current date 10 < birth date 11)
  if (monthDiff < 0 || (monthDiff === 0 && todayDate.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
console.log("samir yor age is ", findAge("1985-05-14"));


const numberStar = (arr) => {
  return arr.map((val, index) => {
    return ` ${index + 1}: ${"*".repeat(val)}`;
  })

}
console.log(numberStar([1, 2, 3, 5, 8]));


const validCredit = (num) =>{
  num = num.replace(/\s/g, "");
  // step1
 let revNum = "";
 for(let i= num.length -1; i >=0; i--){
 revNum = revNum + num[i];

 }

console.log(revNum);

let double = num.split("").map((val,index) =>{
  if(index % 2 === 0){
    return val * 2;
  }
  return val;
})
console.log(double);
}
console.log(validCredit("3912 3674 9492"));


// Regular expression for validate email using regex

const validEmail = (email) => {
  return /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(email)

}
console.log(validEmail("mdsamir13968@gmail.com"));

