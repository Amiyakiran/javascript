//nested loop
// eg #    #    #    #
//    #    #    #    #
//    #    #    #    #
//    #    #    #    #

for(row=1; row<=4; row++){
    str =''
    for(col =1; col<= 4; col++){
        str = str+"# "
        
    }
    console.log(str);
} 
console.log("-------------------------------------------------");
//different pattern
//#
//# #
//# # #
//# # # #
for(row=1; row<=4; row++){
    str =''
    for(col =1; col<= row; col++){
        str = str+"# "
        
    }
    console.log(str);   
} 
console.log("-------------------------------------------------");

//# # # #
//# # #
//# #
//#
for(row=4; row>=1; row--){
    str =''
    for(col =1; col<= row; col++){
        
        str = str +  "# "
       
    }
    console.log(str);
}
console.log("-------------------------------------------------");


// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4

for(row=1; row<=4; row++){
    str =''
    for(col =1; col<= 4; col++){
        
        str = str + row+ " "
       
    }
    console.log(str); 
}

console.log("-------------------------------------------------");


//left triangle
// *

// *  *

// *  *  *

// *  *   *   *


for(row=1; row<=4; row++){
    str =''
    for(col =1; col<= row; col++){
        
        str = str +  "* "
       
    }
    console.log(str);
}
console.log("-------------------------------------------------");



//downward triangle
// *  *   *   *
// *  *  *
// *  *
// *
for(row=4; row>=1; row--){
    str =''
    for(col =1; col<= row; col++){
        
        str = str +  "* "
       
    }
    console.log(str);
}
console.log("-------------------------------------------------");


//half pyramid
// 1  

// 1  2  

// 1  2  3  

// 1  2  3  4


for(row=1; row<=4; row++){
    str =''
    for(col =1; col<= row; col++){
        
        str = str + col+ " "
       
    }
    console.log(str);
}
console.log("-------------------------------------------------");

 //inverted half pyramid
// 1  2  3  4
// 1  2  3 
// 1  2   
// 1  

for(row=4; row>=1; row--){
    str =''
    for(col =1; col<= row; col++){
        
        str = str + col+ " "
       
    }
    console.log(str);
} 
console.log("-------------------------------------------------");

//         *
//      *     *
//    *    *     *
// *    *      *    *


for(row=1; row<=4; row++){
    str =''
    for(spa =4; spa>row; spa--){
        
        str = str +" "
       
    }
    for(col =1; col<= row; col++){
        
        str = str +  " * "
       
    }
    console.log(str);
    
}
console.log("-------------------------------------------------");

//Hollow Pyramid Star Pattern

//          *
//       *    *  
//     *       *
//   * * * * * * *


for(row=1; row<=4; row++){
    str =""
   for ( col = 1; col<=7; col++) {
    
    if (row+col ==5 || col-row == 3 || row==4) {
        str = str+ "*"
        } 
    else {
            str = str + " "
         }
    
   }
   console.log(str);
}
console.log("-------------------------------------------------");
