//function overloading-----same functio ith diiferent arguments ---javascript doesnot use function overload----eg:ecommerce---wishlist sum
//in javascript -----spread opeartor is used


/* function overloading
 function add(a, b) {
    console.log('2 arguments');
}
function add(a, b, c) {
    console.log('3 arguments');
}
function add(a, b, c, d) {
    console.log('4 arguments');
}


add(10,20, 30, 49) print =='4 arguments */ 

//spread opeartor-- (...args)

function add(...args) {//spread operator make the given argumnts into arrays
    console.log(' arguments method');
    console.log(args);
   return args.reduce((n1, n2)=>n1+n2)//array method to find the sum
}

console.log("sum : ",add(10,20, 60));