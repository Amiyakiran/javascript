
// check whether a number is prime or not

n =13
count = 0
for (let i = 0; i <=n; i++) {
    temp = n%i
      if (temp == 0) {
        count++
      }
        
    }
    console.log("number:" ,n);
   if(count == 2){
        console.log("it is prime");
   } 
   else{
    console.log("its not prime");
   }


   // another way
   num =17
   isprime = true
   for (let i = 2; i <num; i++)
   {
    if (num%i == 0) {
        isprime = false
        break
    }
   }
   console.log(isprime?'prime':'not prime');