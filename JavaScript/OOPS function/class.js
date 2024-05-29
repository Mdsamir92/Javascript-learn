class product{
    constructor(itemName,price){
        this.itemName = itemName;
        this.price =  price;
    }
} 

let pencil = new product("pencil","rs 5");
// let pencil1 = new product("pencil","rs 10");
console.log(pencil);
// console.log(pencil1);


class bankAccount{
    constructor(customerName,balance=0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }
    
    deposit(amount){
        this.balance += amount;
    
    }
    withdraw(amount){
        this.balance -= amount;
    
    }
} 
const samirAccount = new bankAccount('samir',1000);
samirAccount.deposit(5000); ///total6000
samirAccount.withdraw(2000);
console.log(samirAccount);

//Private method

// class person{
//     #name ="";
//     constructor(name){
//         this.#name = name;
//     }
//     getName(){
//         console.log(this.#name);
//     }
// }
// let person1= new person ("samir");
// console.log(person1.getName());


class user {
    constructor(){
        this.name = "samir"
    }
}
let user1 = new user();
console.log(user1);

//Inheritence

class emp{
    constructor(name){
        this.name = name;
     
    }
    msg(){
        console.log("hi......");
    }
}
class  manager extends emp{
    constructor(p,d){
        super(p);
        this.department = d;
    }
    info(){
        super.msg();
        console.log(this.name + " is manager and  department of " + this.department);
    }
}
let mng1 = new manager("samir","web development");
(mng1.info());


class sam{
    constructor(n,a){
        this.name = n;
        this.age= a;
    }
    sayHi(){
        console.log("Hello,,,"+this.name + " your age is " + this.age);
    }
}
let sam1 = new sam("samir",23);
(sam1).sayHi();


let useufulMethod = {
    sayhii(){
        console.log("Hii..");
    },
    saybye(){
        console.log("Bye..");
    },
}
class usr{
    constructor(){
        this.name = "samir";
    }
}
Object.assign(usr.prototype,useufulMethod);
let usr1 = new usr ();
console.log(usr1);