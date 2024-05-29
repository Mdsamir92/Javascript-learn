
//object
// var mycar = { brand: "Maruti", Model: "Swift", Variant: "VXI Optional", Year: 2022 };
// document.write(typeof (mycar));
// alert("I purchased Swift 2024a and its variant is " + mycar.Variant);

let a= "age";
let person = {
    firstName: "md",
    lastName: "samir",
    [a]: 25
};
console.log(person);


const  person1 = new Object();
  person1.name= "md samir";
  person1.age = 25;
  
  console.log(person1);

  //object constructor

  function student(name,age){
    this.name = name;
    this.age = age;
  }

var student1 = new student("samir",24);
console.log(student1)


// normal object in this we can get updated value
// pass by reference means it chnaged or updated the original value
let man = { name:"sam"};
 let man1 = man;
 man1.name ="samir"
 console.log(man); //samir

//  pass by value means it original value does not chnage 
  let user = { name:"sam"};
 let user1 = {...user};
user1.name="samkhan";
console.log(user);//sam
console.log(user1);//samkhan


// shallow copy means  only  the first level of the object is copied.
// it achieved by spread operator and object.assign 

  // let user = { name:"sam"};
 //  let user1 = Object.assign({},user); //method1
 // let user1 = {...user};//method2
// user1.name="samkhan";
// let user1 = {...user,name:"samkhan"};

// console.log(user);//sam
// console.log(user1);//samkhan

//Deep copy   means that  all  levels (nested) of the object is copied.
//it achieved by jSON.parse and JSON.stringyfy
//but if they have function in object than cannot get function value

// let user = {
//   name:"sam",
//   address:{
//   city:"kolkata",
// }
// };
// let user1 = JSON.parse(JSON.stringify(user));
// user1.name="samkhan"
// user1.address ="noida";
// console.log(user);
// console.log(user1); 