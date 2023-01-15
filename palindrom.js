n= 12821
var sum=0
var r
temp = n
while (n>0) {
    
    r = n % 10
    sum = (sum * 10)+ r
    n = parseInt(n / 10)// parseint take the value before decimal

    
} 
console.log("the number is:",temp);
console.log("the reverse is:",sum);
 
if (sum == temp) {
    console.log("hence a palindrom");
} else {
console.log("hence not a palindrom");
} 

///

//s =parseInt(2435.4574)
//console.log(s);
// NaN - indicate not a number
// math.floor(233.76) can be used to remove decimals.