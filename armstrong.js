
//print the number is armstrong

n= 153
var sum=0
var r
temp = n
while (n>0) {
    
    r = n % 10
    sum = sum+ (r*r*r)
    n = parseInt(n / 10)// parseint take the value before decimal

    
} 
console.log("the number is:",temp);
console.log("the sum is:",sum);
 
if (sum == temp) {
    console.log("hence a armstrong");
} else {
console.log("hence not a armstrong");
} 