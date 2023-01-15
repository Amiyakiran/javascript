// find gcd of a number
// greatest common divisor-highest common factor
// gcd (12, 36) = 12
// gcd will be <= the smaller number

n1 = 12
n2 = 36
 for (let i = 0; i <= n1 && i<= n2;  i++)
  {
    if (n1%i == 0 && n2%i == 0) 
    {
        gcd = i
        
    }
    
 }
 console.log('GCD for the number',n1,'and',n2,'is :',gcd);

 // to find least common factor other than 1

 n1 = 12
n2 = 36
 for (let i = 2; i <= n1 && i<= n2;  i++)
  {
    if (n1%i == 0 && n2%i == 0) 
    {
        lcd = i
        break   
    }
    
 }
 console.log('LCD other 1 for the numbers',n1,'and',n2,'is :',lcd);
