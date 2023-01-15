var num1 =2
var num2 = 3
if (num1>num2) {
    console.log(num1, 'is greater than', num2);
}
else{
    console.log(num2, 'is greater than', num1);
}
var num1 =10
var num2 = 3
console.log(num1>num2?"num1 is the largest":"num2 is the largest");
//// find the laregest of 3 numbers

num1 = 22
num2 =10
num3 = 50
var temp

if(num1> num2){
        temp = num1
        if(temp> num3){
            temp = temp
            console.log(temp);
        }
        else{
            temp = num3
            console.log(num3);
        }
}
else{
    temp = num2
    
    if(temp> num3){
        temp = temp
        console.log(temp);
    }
    else{
        temp = num3
        console.log(num3);
    }
}