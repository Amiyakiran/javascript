// print pairs whose sum = 6


a= [2, 3, 4, 5]
o = []
count = 0
console.log(a);
for (let i = 0; i < a.length; i++) {
    for (let j = i+1; j < a.length; j++) {
        count ++
        if (a[i]+ a[j]== 6) {
           o.push(a[i], a[j]) 
        }
        
    }
    
}
console.log(o);
console.log('execution time', count);

//using binarysearch
console.log("-----------------------------------");
a= [2, 3, 4, 5]
low = 0
up = a.length - 1
pairsum =6
ispresent = false
count = 0
a.sort((a,b) =>a-b)
console.log(a);
while (low < up) {
    count++
    
    currsum = a[low] + a[up]
    
    if (currsum == pairsum) {
      console.log(a[low], a[up]); 
      low++ 
    }

    else if (currsum > pairsum) {
       up--
    }
    else if (currsum < pairsum) {
        low++
    }
}
console.log('excution time',count);
