//1 
//0 1
//1 0 1
//0 1 0 1

for(row=1; row<=4; row++){
    str =''
    for(col =1; col<= row; col++){
        let n = (row+col)%2
        if (n==0) {
            str = str+"1 "
        }
        else{
            str = str+"0 "
        }
        
    }
    console.log(str);   
} 
console.log("-------------------------------------------------");

console.log("-------------------------------------------------");


// 4 4 4 4
// 3 3 3 3
// 2 2 2 2
// 1 1 1 1

for(row=4; row>=1; row--){
    str =''
    for(col =1; col<= 4; col++){
        
        str = str + row+ " "
       
    }
    console.log(str); 
}

console.log("-------------------------------------------------");

/*      *****
        *****
        *****
        *****
        *****           */
// print the pattern

for(row=1; row<=5; row++){
    str =''
    for(col=1;col<=5; col++)
    {
        str = str+"* "
    }
    console.log(str);
}
console.log("-------------------------------------------------");
/* 
*****
*   *
*   *
*   *
***** 
*/
//print the pattern

for(row=1; row<=5;row++){
    str = ''
    for(col=1;col<=5; col++){
        if(row==1 || row==5){
            str= str+ "*  "
        }
        else if ( col==1 || col== 5) {
            str= str+ "*   "
        }
        else{
            str = str+ '   '
        }
    }
    console.log(str);
}
console.log("-------------------------------------------------");


//Right Triangle Pattern
/*              *
              * *
            * * *
          * * * *
        * * * * *      */

for(row =1; row<=5; row++){
    str = ''
    for(spa =5; spa>row; spa--){
        
        str = str +"  "
    }
    for(col=1;col<=row; col++){
        str = str +  "* "
    }
    console.log(str);

}
console.log("-------------------------------------------------");


//Hollow Triangle Star Pattern
/*  *
    **
    * *
    *  *
    *   *
    ******    */

    for(row =1; row<=5; row++){
        str =''
        for(col=1; col<=row; col++){
            if (row==5 || col== 1) {
                str = str+"* "
            }
            else if (row== col) {
                str = str+"*  "
            }
            else{
                str = str+"  "
            }
        }
        console.log(str);
    }
    console.log("-------------------------------------------------");


    //Pyramid Pattern

    /*   *
        ***
       *****
      *******
     *********     */

      for(row=1; row<=5; row++){
        str =''
        for(spa = 1; spa<= 5 - row; spa++){// number of space on a row is n-row
            str =str+" "
        }
        for ( col = 0; col < 2 * row - 1; col++) {//number of star in a row is 2*row-1
            str += "*";
      }
      console.log(str);
    }
    console.log("-------------------------------------------------");


    //Hollow Triangle Star Pattern

    /*          *
                * *
                *  *
                *   *
                *    *
                ***** *       */

    for(row=0; row<=6; row++){
        str = ''
        for(col=1; col<=row; col++){
            if (row==6 || col==1) {
                str = str+"* "
            }
            else if(row==col) {
                str = str+"* "
            }
            else{
                str = str+"  "   
            }
        }
        console.log(str);
    }
    console.log("-------------------------------------------------");


    //Reversed Pyramid Star Pattern

    /* *********
        *******
         *****
          ***
           *     */

     for(row=0; row<=5; row++){
        str = ''
        for ( spa = 0; spa < row; spa++) {
              str += " ";
            }
            // printing star
            for (let col = 0; col < 2 * (5-row) - 1; col++) {
              str += "*";
            }
            console.log(str);
     }     
     console.log("-------------------------------------------------");


     //Diamond Pattern 

     /*       *
             ***
            *****
           *******
          *********
           *******
            *****
             ***
              *             */

             for(row=1; row<=5; row++){
                str =''
                for(spa = 1; spa<= 5 - row; spa++){// number of space on a row is n-row
                    str =str+" "
                }
                for ( col = 0; col < 2 * row - 1; col++) {//number of star in a row is 2*row-1
                    str += "*";
              }
              console.log(str);
            }
            for(row=0; row<=5; row++){
                str = ''
                for ( spa = 0; spa < row; spa++) {
                      str += " ";
                    }
                    // printing star
                    for (let col = 0; col < 2 * (5-row) - 1; col++) {
                      str += "*";
                    }
                    console.log(str);
             }     
 console.log("-------------------------------------------------");


 //Hollow Diamond Pattern

 for(row=1; row<=5; row++){
    str = ''
    for(col=1; col<=9; col++){
     let n1 = row+col
    let n2 = col-row
    if(n1==6 || n2==4){
        str = str+"*"
    }
   
    else{
        str = str+"  "
    }
 } 
    console.log(str);
 }for(row=1;row<=4;row++){
    str =""
    for(col=1;col<=7; col++){
        let n3 = row+col
        if(col==row || n3==8){
            str = str+" *"
        }
        else{
            str =str+"  "
        }
    }
    console.log(str);
 }
 console.log("-------------------------------------------------");

 //Hourglass Star Pattern

 /*     *********
         *******
          *****
           ***
            *
           ***
          *****
         *******
        *********         */

         for(row=0; row<=5; row++){
            str = ''
            for ( spa = 0; spa < row; spa++) {
                  str += " ";
                }
                // printing star
                for (let col = 0; col < 2 * (5-row) - 1; col++) {
                  str += "*";
                }
                console.log(str);
         }   for(row=1; row<=4; row++){
            str =''
            for(spa = 1; spa<= 4 - row; spa++){// number of space on a row is n-row
                str =str+" "
            }
            for ( col = 0; col < 2 * row+1 ; col++) {//number of star in a row is 2*row-1
                str += "*";
          }
          console.log(str);
        }
console.log("-------------------------------------------------");

//Right Pascal Star Pattern

/*     *
       **
       ***
       ****
       *****
       ****
       ***
       **
       *          */

       for(row=1; row<=5; row++){
        str = ""
        for(col=1; col<=row;col++){
            str +="* "
        }
        console.log(str);
       }
       for(row=4; row>=1;row--){
        str = ""
        for(col =1; col<= row; col++){
        
            str = str +  "* "
           
        }
        console.log(str);
       }
       console.log("-------------------------------------------------");


       //Left Pascal Star Pattern

       /*     *
             **
            ***
           ****
          *****
           ****
            ***
             **
              *       */

             for(row =1; row<=5; row++){
                str = ''
                for(spa =5; spa>row; spa--){
                    
                    str = str +"  "
                }
                for(col=1;col<=row; col++){
                    str = str +  "* "
                }
                console.log(str); 
            
            }

            for (let row = 1; row <=4; row++) {
                str = ''
                for (let spa = 0; spa < row; spa++) {
                  str += "  ";
                }
                for (let col = 0; col < 5 - row; col++) {
                  str += "* ";
                }
                console.log(str);
              }
console.log("---------------------------------------------");

//heart pattern

var n = 6;
var str = "";
for (let i = n / 2; i < n; i += 2) {
  // print first spaces
  for (let j = 1; j < n - i; j += 2) {
    str += " ";
  }
  // print first stars
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  // print second spaces
  for (let j = 1; j < n - i + 1; j++) {
    str += " ";
  }
  // print second stars
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  str += "\n";
}
// lower part
// inverted pyramid
for (let i = n; i > 0; i--) {
  for (let j = 0; j < n - i; j++) {
    str += " ";
  }
  for (let j = 1; j < i * 2; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);

console.log("--------------------------------------");
//my heart

for(row=1; row<=2; row++){
    str = ""
    for(col=1; col<=9; col++){
        if ((row==1 && col==1) || (row==1 &&col==5) || (row==1 &&col==9)|| (row==2 &&col==5)) {
            str = str+ " "
        }
        else{
            str = str+ "*"
        }
    }
    console.log(str);
}
    for(row=0; row<=5; row++){
        str = ''
        for ( spa = 0; spa < row; spa++) {
              str += " ";
            }
            // printing star
            for (let col = 0; col < 2 * (5-row) - 1; col++) {
              str += "*";
            }
            console.log(str);
     }      
