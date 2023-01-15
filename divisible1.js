// print fizz if divisible by 3
// print buzz if divisible by 5
// print fizzbuzz if divisible by 15


num = 12
if (num % 3 == 0 && num% 5 != 0 && num % 15 != 0 ) 
{
    console.log("fizz");
}
 else if (num % 3 != 0 && num% 5 == 0 && num % 15 != 0 ) 
{
    console.log("buzz");
}
else if(num % 3 != 0 && num% 5 != 0 && num % 15 == 0 ) 
{
    console.log("fizzbuzz");
}
else if (num % 3 == 0 && num% 5 == 0 && num % 15 != 0 )
 {
        console.log( "fuzz and buzz");
    }
else if (num % 3 == 0 && num% 5 != 0 && num % 15 == 0 ) 
{
            console.log( "fuzz and fizzbuzz");
        }
else if (num % 3 != 0 && num% 5 == 0 && num % 15 == 0 ) 
        {
                    console.log( "buzz and fizzbuzz");
        }
else if (num % 3 == 0 && num% 5 == 0 && num % 15 == 0 ) {
    console.log(" fizz ,buzz and fizzbuzz");
}
else{
    console.log("not divisible by any of these numbers");
}


//opimized code

num= 30
if (num %15 == 0) {
    console.log("fizz buzz fizzbuzz");
} 
else if(num % 5 == 0){
    console.log( "buzz");
}
else if (num% 3 == 0) {
    console.log("fizz");
}
else {
    console.log("The given number is not divisble by any of these numbers");
}