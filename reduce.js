a = [1, 2, 3, 4, 5, 6, 7]
//highest number
highest = a.reduce((n1, n2)=>n1>n2? n1:n2)
console.log("highest number:",highest);
//lowest number
lowest = a.reduce((n1, n2)=>n1<n2? n1:n2)
console.log("lowest number:",lowest);
//total sum

totalsum = a.reduce((n1,n2)=>n1+n2)
console.log("total sum is:", totalsum);