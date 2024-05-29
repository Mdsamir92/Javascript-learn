//VAR Global scope are access anywhere through the webpage 
// and also issue is that its very hard to debug
var v; //we can decalre without any value
var v="mohammad"
var v="samir" //redeclare same vaiable name 
v="var"; //reasign value
console.log(v);//var (over write 1st one)

if(1==1){
    var s="samir"
}
console.log(s);


//LET Block scope
// let a;//we can decalre without any value
let a="mohammad"
// let a="samir" //cannot redeclare
 a="let"; //reasign value 
console.log(a);

if(1==1){
    let b="sam";
    console.log(b);
}
// console.log(b);//error

//CONST 
// const c;//we cannot decalre without any value
const c="samir"
// const c="samir" //cannot redeclare
//  c="samir"; //cannot reasign value
console.log(c);

if(1==1){
    const c ="sam";
    console.log(c);
}