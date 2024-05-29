//table
for(let i=1;i<=10;i++){
    document.write(`2 x ${i}=${2*i}`);
    document.write("<br>")
}
//forloop
for(let i=0;i<10;i++){
    console.log("hello world");
}

for(let i=5 ;i<51; i= i+5){
    console.log(i)
}

for(let i=50 ;i>4; i= i-5){
    console.log(i)
}

for(let i=0;i<10;i++){  //odd
    if(i % 2 == 1) //!==0
    console.log(i)
}

for(let i=0;i<10;i++){  //even
    if(i % 2 == 0)
    console.log(i)
}

//while loop
let counter = 1; //odd
while(counter <=10){
    console.log(counter)
    counter=counter+2;
}
let counter1 = 0; //even
while(counter1 <=10){
    console.log(counter1)
    counter1=counter1 +2;
}


let i = 0;
while(i<10){
    console.log("namaste world")   
    i++
}


//do while loop
let j=0;
do{
    console.log("namaste world")
    j++

}
while(j<20)

//for in loop
let animal={
    name: "zebra",
    leg:4
};
for(let key in animal){
     console.log(key,animal[key]);      
    
}

let names = ["samir","shubam","sandip"];
for(let index in names){
    console.log(index,names[index])
}

//for of loops
for(let name of names){
    console.log(name)
}


