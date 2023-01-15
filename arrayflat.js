// flat is used to make one dimensional array from two dimensial array
a =  [
    [10, 20],
    [30, 40],
    [50, 60],
    [70, 80],
    [90, 100]
]

// print numbers less than 50
console.log("numbers less than 50");
a.flat().filter(num=> num<50).forEach(num => {console.log(num);});
console.log("-----------------------------");
// find square of each items
console.log("square of each items");
a.flat().map(num=> num**2).forEach(num => {console.log(num);});

console.log("-----------------------------");

//display total sum
console.log("total sum");
console.log(a.flat().reduce((num1, num2)=> num1+num2));
console.log("-----------------------------");

//display highest value
console.log("highest value");
console.log(a.flat().reduce((num1,num2)=> num1>num2? num1:num2));
console.log("-----------------------------");
