// changing html
// var a = document.querySelector("h1").innerHTML= "changed"
var a = document.querySelector("h1");
a.innerHTML= "changed"
// changing css
a.style.color= "red"
a.style.backgroundColor = "yellow"

a.addEventListener("click",(()=>{
    a.innerHTML = "now i am totally chaned"
    a.style.color= "blue"
}))

var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
var light = 0

btn.addEventListener("click",(()=>{
    if(light == 0){
        bulb.style.backgroundColor= "yellow"
        light = 1
        console.log("bulb chalu")
    } else{
        bulb.style.backgroundColor= "transparent"
        light= 0;
        console.log("bulb band")
    }

}))