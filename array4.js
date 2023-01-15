expense =[23000, 34000, 12000, 5000, 50000, 30000]

// find the total expense
// find the highest expene
// find the lowest expene


console.log("given array:",expense);
exp = expense.sort((a, b) => a - b);
console.log("sorted array:",exp);
console.log("the higest expense is:", exp[exp.length-1]);
console.log("the lowest expense is:", exp[0]);
sum = 0
for (let i = 0; i < exp.length; i++) {
    sum = sum + exp[i]
    }
    console.log("the total expense is:", sum);



 //----------- another method------------
 
 //------ higest expense-------
 //  maxexpense = 0
// for(let amount of expense){
//    if (amount> maxexpense) {
//        maxexpense = amount
//       }
//  }
//   console.log("the higest expense=", maxexpense);



// lowest expense

//  minexpense = expense[0]
// for(let amount of expense){
//    if (amount< minexpense) {
//        minexpense = amount
//       }
//  }
//   console.log("the lowest expense=", minexpense);


//total expense

// total =0
// for(let amount of expense){
//    total = total+amount
//  }
// console.log(total);
