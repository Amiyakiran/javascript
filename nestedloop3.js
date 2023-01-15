// alphabet pattern

/* A
   A B
   A B C
   A B C D
   A B C D E */

   for(row=1; row<=5; row++){
    str = ''
    for(col=0; col<row; col++){
        str += String.fromCharCode(col + 65);
    }
    console.log(str);
   }
   console.log("------------------------------------------");

   /* A
      B B
      C C C
      D D D D
      E E E E E */

      for(row=1; row<=5; row++){
        str = ''
        for(col=0; col<row; col++){
            str += String.fromCharCode((row-1) + 65);
        }
        console.log(str);
       }
       console.log("------------------------------------------");
    
       /* A
          B C
          D E F
          G H I J
          K L M N O */

          /* for(row=1; row<=5; row++){
            str = ''
            let count =0
            for(col=0; col<row; col++){
                
                str += String.fromCharCode(count + 65);
                count++;
                
            }
            
           }console.log(str);
           console.log("------------------------------------------"); */

           /* # # # #
              # # #
              # #
              #      */

            for(row=4; row>=1; row--){
                str = ''
                for(col=1; col<=row; col++){
                    str+="# "
                }
                console.log(str);
            }
            console.log("--------------------------------------");

            /*      1
                    2 3
                    4 5 6
                    7 8 9 10         */
let vari= 1;    
for(row=1; row<=4;row++){
    str = ''
    for(col=1; col<=row; col++){
         str += vari+" ";
        vari++;

    }
    console.log(str);
}                    
console.log("--------------------------------------");
/*          11
        12 13 14
    15 16 17 18 19
   20 21 22 23 24 25 26
 27 28 29 30 31 32 33 34 35           */
let vari1 = 1;
for(let row=1; row<=5; row++){
    str =''
    for(let spa = 1; spa<= 5 - row; spa++){// number of space on a row is n-row
        str =str+" "
    }
    for (let col = 0; col < 2 * row - 1; col++) {//number of star in a row is 2*row-1
        str += vari+" ";
        vari++;

  }
  console.log(str);
}
console.log("-------------------------------------------------");


/*              1
              2 3 4
            5 6 7 8 9
        10 11 12 13 14 15 16
     17 18 19 20 21 22 23 24 25     */

let variable = 1;
// outer loop runs for `rows` no. of times
for (let row = 1; row <= 5; row++) {
    str = " "
   // Inner Loop - I -> for the spaces
   for (let space = 1; space <= 5 - row; space++) {
      str += " ";
   }

   // Inner Loop - II -> for the series of numbers
   for (let col = 1; col <= 2 * row - 1; col++) {
      str += variable+" ";
      variable++;
   }

   console.log(str);
}
