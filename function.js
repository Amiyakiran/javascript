// function
// function definition
// function  function-name(arg1, arg2,....,argn){
//    function body
//   }
// function call

// function name(arg1, arg2,.....,argn)


// adding two numbers using function

function add(num1, num2) {
    sum = num1 +num2
    console.log(sum);
}

console.log("function for adding two numbers");

add(5,9)


// print the cube of a number using function


function cube(num) {
    cu = num**3
    console.log(cu);
    
}

console.log("cube of the given number is:");

cube(8)


// another way

function cube(n) {
    c = n**3
    console.log("the cube of the number", n, " is", c);
    return c
    
}

console.log("result is",cube(6));