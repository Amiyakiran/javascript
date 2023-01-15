num1 = 220
num2 =100
num3 = 150
var t
var l 
var h
var m

if(num1> num2)
    {
        t = num1
        l = num2
            if(t> num3)
                {
                    h = t
                    if (l > num3) 
                        {
                            h = t
                            m = l
                            l = num3
                            console.log("largest number is:", h);
                            console.log("numbers sorted in ascending order:",l,m,h);
                        }
                    else
                        {
                          h = t
                          m = num3
                          l = l
                          console.log("largest number is:", h);
                          console.log("numbers sorted in ascending order:",l,m,h);
                        }
                }        
            else
                {
                     h = num3
                     m = t
                     l = l
                     console.log("largest number is:", h);
                     console.log("numbers sorted in ascending order:",l,m,h);
                    }            
    } 
 else
    {
        t = num2
        l = num1
        if (t > num3) 
            {
                h = t
                if (l > num3) 
                {
                  h = t
                  m = l
                  l = num3  
                  console.log("largest number is:", h);
                  console.log("numbers sorted in ascending order:",l,m,h);
                } 
                else 
                {
                  h  = t
                  m = num3
                  l = l
                  console.log("largest number is:", h);
                  console.log("numbers sorted in ascending order:",l,m,h);
                }
            }
        else{
            h = num3
            m = t
            l = l
            console.log("largest number is:", h);
            console.log("numbers sorted in ascending order:",l,m,h);
        }    
    }        