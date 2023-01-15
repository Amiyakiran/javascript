num = 5
if (num<0) 
{
    console.log("number is negative");
    
}
else{
    console.log("number is positive");
}
num = -5
if (num<0) 
{
    console.log("number is negative");
    
}
else{
    console.log("number is positive");
}

num = 0
if (num<0) 
{
    console.log("number is negative");
    
}
else if(num==0){
    console.log("number is neither positive nor negative");
}
else{
    console.log("number is positive");
}

num=17
console.log(num>0?"number is positive":"number is negative");
num=0
console.log(num>0?"number is positive": num<0?"number is negative":"neither positive nor negative");