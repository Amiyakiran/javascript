n1 =2010
n2 = 300
n3 = 40

if (n1> n2 && n1> n3)
     {
        console.log("laredest number is:", n1);
         if (n2>n3) 
            {
                console.log("numbers sorted in ascending order is:", n1, n2, n3);
            } 
        else 
            {
                 console.log("numbers sorted in ascending order is:", n1, n3, n2);

            }
    
    } 
else if (n2>n1 && n2>n3 ) 
    {
        console.log("the largest number is:", n2);
        if (n1> n3) 
            {
                 console.log("numbers sorted in ascending order is:", n2, n1, n3);

            } 
            else 
            {
                console.log("numbers sorted in ascending order is:", n2, n3, n1);

            }
    }
else 
    {
        console.log("the largest number is :", n3);
        if (n1> n2) 
            {
                console.log("numbers sorted in ascending order is:", n3, n1, n2);

            } 
        else 
            {
                 console.log("numbers sorted in ascending order is:", n3, n2, n1);
 
            }
    }