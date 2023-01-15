//error handling
//using try and catch block

exp ="%10+20*2"


try{
    console.log('try block');
    result = eval(exp)
}
catch{
    console.log("catch block0");
    console.log("invalid expression");
    exp = "10+20*2"
    result = eval(exp)
}
finally{
    console.log('finally');
    console.log("result: "+result);
}

console.log('exception handling');