const obj = {
    name:"sam",
    id:"instagram",
    age: 25,
}
// console.log(obj);

const obj1 = {
    name:"md samir",
     about(){
        return this.name + " age is " + this.age + " "+ this.id ;
    },
    __proto__:obj 
}
console.log(obj1.about())

// function BankAccount(customerName,balance = 0){
//     this.customerName = customerName;
//     this.AccountNumber = Date.now();
//     this.balance = balance;

// }
// const samirAccount= new BankAccount('samir');
// const samAccount = new BankAccount('sam khan',1000);

// BankAccount.prototype.deposit = function(amount){
//     this.balance += amount;
// };

// BankAccount.prototype.withdraw = function(amount){
//     this.balance -= amount;
// };
// samirAccount.deposit(5000);
// samirAccount.withdraw(500);

// console.log(samirAccount);

// function person(){
//  this.firstName= "md";
//  this.lastName = "samir";
//  this.age= 25;
// }
//  person.prototype.fullName = function(){
//     console.log(this.firstName + " " + this.lastName + " "+ this.age);

//    }
 
// let person1= new person();
// person1.fullName();


