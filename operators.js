//arithematic operators//
//modulus operator//
//remainder of two numbers//
console.log("12% 5 is equal to:",12%5);
console.log("12/ 5 is equal to:",12/5);// gives quotient// 
console.log("12* 5 is equal to:",12*5);
console.log("12+ 5 is equal to:",12+5);
console.log("12- 5 is equal to:",12-5);
//power of number//
console.log("square of 10", 10**2);
console.log("cube of 10", 10**3);

//assignment operators//
//left value = right value: assign the value of right to left//

//relational operators//

var num =10;
console.log("num<15", num<15);
console.log("num>15", num>15);
console.log("num==15", num==15);
console.log("num<=15", num<=15);
console.log("num>=15", num>=15);
//difference between == and ===//
//== check whether the value assign is same where as === check the type assign is same- !important!//
n= 43
n1= "43"
console.log(n==n1);
console.log(n===n1);

//logical operators//
// AND(&&) | OR(||)  | NOT(!)//
// AND : T && T = T  T && F = F   F && T = F     F && F = F//
// OR  : T || T = T  T || F = T   F || T = T     F || F = F//
// NOT : T! = F   F! = T//

// 10<= num <30//
num =15
console.log( num>=10 && num<30);
console.log( num>=10 && num<15);
console.log( num>=10 || num<15);      
// difference between single & and double &&//
// & give answer 1 for true and 0 for false//
// & check both statement even if the first statement is false but in case of && if the first statement is false it automatically give false without checking the second statement//

num =15
console.log( num>=10 & num<30);
console.log( num>=10 & num<15);

// increment(++) and decrement(--) operators//

num=45
console.log(++num); // console is done after increment
num=45
console.log(num++);// console is before increment so the same value is printed

num=45
console.log(--num); // console is done after decrement
num=45
console.log(num--);// console is before decrement so the same value is printed
//shorthand operators
// num = num + 10 can be written as num+=10
num =10
console.log(num+=10);
num =10
console.log(num= num+10);
