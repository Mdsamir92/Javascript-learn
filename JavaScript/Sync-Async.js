//Synchronous method

console.log('1st start');
console.log('2nd start');
console.log('3rd start');


// const func2 = () => {
//     console.log("function2 start ");
// }

// const func1 = () => {
//     console.log("function1 start");
//     func2();
//     console.log("function1 end");
// }

// func1();

//Asynchronous method

const func2 = () => {
    
    setTimeout(()=>{
        console.log("function2 start ");
    },2000);

    console.log("function2 end ");
}

const func1 = () => {
    console.log("function1 start");
    func2();
    console.log("function1 end");
}

func1();



    function register(){
        setTimeout(()=>{
        console.log("register end");
    },1000);
    }
    
    function email(callback){
        setTimeout(()=>{
            console.log("email end");
            callback();
        },3000);
 
    }
    
    function  login(){
        setTimeout(()=>{
        console.log("login end");
    },1000);
    }

    register();
    email(login);
 
    console.log("last appliaction  work");
    
    
    for(let i=0; i<5; i++){
       
           setTimeout(() => {
               console.log(i);
           },2000);
        
    }
       //output 0 1 2 3 4
       
    for(var i=0; i<5; i++){
       
        setTimeout(() => {
            console.log(i);
        },2000);
     
 }
   //output 5 5 5 5 5 

    for(var i=0; i<5; i++){
        ((i) => {
           setTimeout(() => {
               console.log(i);
           },3000);
        })(i);
        
    }
    //output 0 1 2 3 4
    
  //sync 
//       console.log("start");
//       console.log("second");
//       console.log("end");

//Async method

//     console.log("start");
//     setTimeout(() => {
//         console.log("set time out")
//     },1000);
//     console.log("end");