
let names = ["samir","shubam","sandip"];
console.log(names);

let position = names.indexOf("sandip");
console.log(position)

// it print total values 
let score = [10,20,30,40,50];
for(let num of score){
    console.log(num) //console score than print those line as much no
}

// its show index no 
let score1 = [10,20,30,40,50];
for(let num in score1){
    console.log(num) //console score than print those line as much no
}

let str = "samir shubam sandip"; //string value
console.log([str]) //convert to array
// console.log([...str])  //destruct means break all



var car = ["lamberghini","mercedez","xcent prime","hyundai","bmw","audi"];
console.log(car[3]);
car[1]="swift dezire"; //update car name
console.log(car)
car.push("innova"); //add in last element
console.log(car);
car.pop(); //remove last element
console.log(car);
car.unshift("creta");//add in 1st index
console.log(car)
car.shift();//remove
console.log(car)
delete car[4];
console.log(car);

car = []; //empty array
// car.length=0;//empty array
console.log(car)

//set to remove duplicate
let duplicate = [1,3,5,7,1,3,2,4,4]
let st2 = new Set(duplicate);
console.log([...st2]);

let ar=["a","b","c"]
let ar1=["a","b","d","e"]

let ar2 = ([...ar,...ar1])
let ar3= new Set(ar2)
console.log([...ar3])

//from method
const frm = [1,2,3];
const frm1 = Array.from(frm,val => val * 2)
console.log(frm1);


//find method returns the value of the first element  and it does not change the o array
let finding= [4,2,3,1,5,10,15,50]
let find1 = finding.find((item)=> item < 5 ) //&& item >10
console.log(find1);

//Map method

let arrr2 = [1,3,5];
let arrr3= arrr2.map(function(val){
    return val * 2;
});
console.log(arrr3);

let arrayy= [2,4,6];
let arrayy1= arrayy.map((val) => val*3);
console.log(arrayy1);

let arry = [1,1,1];
let arry1 = arry.map((val) => val*1);
console.log(arry1) 

// square using map
let  sqr = [1,2,3,4,5]
let sqreven = sqr.filter(val => val % 2 == 0)
let sqr1 = sqreven.map((val) => val * val)
console.log(sqr1);


// filter method creates new array from given array 

const even=[1,2,3,4,5,6]
const EvenNumber = even.filter((number) => number % 2 == 0);
console.log("filter",EvenNumber);

const odd=[1,2,3,4,5,6]
const OddNumber = odd.filter((number)=> number % 2 === 1);
console.log("filter",OddNumber);

const int = [1,3,8,5.5,0.4,99.9]
const int1 = int.filter((num)=>
 num % 1 === 0);
 console.log(int1); //integer num.

let arrr= [1,2,3,4,5,6,13,14,15]
let arrr1 = arrr.filter(val => val > 10);
console.log(arrr1);

const users = [
    {name:"sam",age:25},
    {name:"samir",age:26},
    {name:"sam khan",age:30}
];
const users1 = users.filter(user=> user.name == "sam");
// const users1 = users.filter(user=> user.age < 30);
// console.log(users1);
users1.map((u)=>{
    console.log( u.name + " " +  u.age );
//   console.log( ` ${u.name} ${u.age}`);
});

const name = [
    {
        n:"samir",
        work:"frontend"
    },
    {
        n:"sam",
        work:"backend"
    },
    {
        n:"sahil",
        work:"frontend"
    }
];
const name1 = name.filter((x) => x.work == "frontend");
// console.log(name1);
name1.map((u)=>{
    console.log(u.n + " " + u.work);
 });

//Reduce function return single value 

const num=[1,2,3,4,5]
const num1 = num.reduce((total,num) => {
   return total + num;
 },0); //initial value (total) + current value 
console.log("Reduce",num1);   
 
const usercart = [
    {productId: 1, productName:"mobile", price:15000},
    {productId: 2, productName:"laptop", price:25000},
    {productId: 3, productName:"tv", price:30000},
]
  const totalAmount= usercart.reduce((totalprice,currentProduct)=>{
    return totalprice + currentProduct.price;
},0)
console.log(totalAmount);


//foreach does not return new value
const array =[1,2,3,4,5]
let sum = 0;  
array.forEach(n =>  sum += n )
console.log("foreach",sum)
 
let book2 = ["physics","chemistry","bio"];
book2.forEach(function(value){
    console.log(value)
})

let each = [1,1,1];
let each1 = each.forEach((val) => val*1);
console.log(each1)  //undefined

 
//splice

let arr=[1,2,3,4,5]
arr.splice(1,2,"sam") //remove from index no 1,2 and added new items
console.log(arr);

const fruit= ["mango","banana","apple","blueberry"];
fruit.splice(2,0,"cherry")
console.log("splice",fruit);

//slice

let ary=[1,2,3,4,5]
let ary1=ary.slice(0,4);
console.log(ary1);// so it start 0 index to less than index 4 value will show

const fruits= ["mango","banana","apple"];
 const fruits1= fruits.slice(0,2);//mango banana
 console.log("slice",fruits1);

//Rest operator

function sam(name,...args){
   
    let sum = 0;
  for(let i in args){
     sum += args[i];
    }
    // console.log(name);
    console.log(sum);
}
sam("samir",1,2,3);


function sum1(...args){
    console.log(args);
}
sum1("samir", 'sandip',"sam");

//without rest
function sum2(a,b,c){
    console.log(a,b,c);
}
sum2("samir",'sandip',"sam");


//spread operator

let array1 = [1,2,3];
let array2 = [...array1,4,5,6,6];
let array3 = new Set(array2)
// console.log(array2)
console.log([...array3])
// console.log(...array1,...array2);//add and spread out all number like 1,2,3,4,5,6

//concat
const arr1= ["samir"];
const arr2 = arr1.concat("shubam","sandip");
// const arr3= arr1.concat(arr2);
console.log(arr2);

//split
let text = " samir ";

let wordarray =text.split(''); //break all word 
console.log(wordarray);

//toString
var s =["samir"];
var s1 = s.toString(); 
console.log(s1);

//join
let text1 = ["samir","shubam","sandip"];
let wordarray1 = text1.join("");
console.log(wordarray1);


//sort
let book3 = ["physics","chemistry","bio"];
book3.sort();
console.log(book3);

const n = [1,2,4,5,3,9,6] 
const n1 = n.sort(); // default ascending to descending order chota se bada
// const n1 = n.sort((a,b) => a-b); //ascending to descending order chota se bada
// const n1 = n.sort((a,b) => b-a); // descending to ascending order  bada chota se
console.log(n1);

//reverse
let naming = ["sam","samir","sahil"];
naming.reverse();
console.log(naming);



//fill
var s =["sam","samir","sahil"];
s.fill("sam"); 
console.log(s);


// array in array
// let book = ["physics","chemistry","bio"];
let bookpages = [
    ["pysics","300"],
    ["chemistry","400"],
    ["bio","500"],
];
let pages= bookpages[1];
console.log(pages);

let book1 = ["physics","chemistry","bio"];
let booklength = book1.length;

for(i=0; i< booklength; i++){
console.log(`Element ${i} is ${book1[i]} \n`);
}

let rev = "hello samir";
let rev1 = rev.split('').reverse();
console.log(rev1);

