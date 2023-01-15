// linear search


a =[10, 11, 2, 3, 4, 15]

// check number 2 is present in the array or not

console.log("the given array is:", a);
count = 0
for (let i = 0; i < a.length; i++) {
    if (a[i] == 2) {
       count++
            break   }

} if(count == 1){
    console.log("2 is present");
}
else{
    console.log("2 is not present");
}
//console.log("----------------------------------------");
//console.log("the given array is:", a);
//searchterm = 2
//ispresent = false
//for (const num of a) {
//    if (num == searchterm) {
//        ispresent = true
//        break
//    }
//}
//console.log(ispresent?'number is found':'not found');