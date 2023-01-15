// array method---- MAP----create an array with same number of elements as that of existing array after
// applying a mapping function

a = [10, 11, 12, 13, 14, 15]
// print a new array having square of the given array
console.log(a);
sq = a.map(num=>num**2)
console.log(sq);
console.log("----------------------------------");
//console.log("-----------------------");
// old method
//b= []
//console.log(a);
// for (let i = 0; i < a.length; i++) {
//     b1 = a[i]**2
//    b.push(b1)
// }console.log(b);
//console.log("---------------");
// for (let num of a) {
//    console.log(num**2);
// }



//print a new array having cube of the given array
console.log(a);
cube = a.map(num=>num**3)
console.log(cube);
console.log("----------------------------------")

// create a new array with number <= 13 the increment number or
// number>13 the decrement the number
//output : [11, 12, 13, 14, 13, 14]

console.log(a);
b = a.map(num=> num<=13? num+1:num-1)
console.log(b);
