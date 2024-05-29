var fruittype= prompt("konsa fruit chaiye?");
switch(fruittype) {
  case 'orange':
      console.log('orange hai 50 rs kilo.');
      break;
  case 'apple':
      console.log('apple hai 100 rs kilo.');
      break;
  case 'banana':
      console.log('banana hai 40 rs dozen.');
      break;
  default: 
      console.log('${fruittype} aaj khatam hogya.');
      break;
}


let usr;
usr=3;

switch (usr) {
    case 1:
        document.write("ONE");
        break;
    case 2:
        document.write("TWO");
        break;
    case 3:
        document.write("THREE");
        break;
    
    default: 
      document.write("invalid input");
      break;
}