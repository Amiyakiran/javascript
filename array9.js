// print the common numbers in two arrays.


a1 =[10, 11, 20, 23, 30, 34]
a2 = [11, 23, 30, 40, 45, 50]


count = 0
console.log(a1);
console.log(a2);
o = []
for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) 
    {
        count ++
        if (a1[i] == a2[j]) 
        {
            o.push(a1[i])
        }
        
    }
}
console.log(o);
console.log('execution time :', count);


//using binarysearch

console.log("-------------------------------");

a1 =[10, 11, 20, 23, 30, 34]
a2 = [11, 23, 30, 40, 45, 50]


count = 0
console.log(a1);
console.log(a2);
p =0
q =0
o = []
// repeat untill p<a1.length and q<a2.length
while (p<a1.length && q< a2.length) {
     count ++
    //compare first element of first arrary and first eement of second array
    // two elements a equal, the print the number, p++, q++
    if (a1[p] == a2[q]) {
        o.push(a1[p])
        p++
        q++
    }
    //first array value < second array value--- p++
    else if (a1[p]< a2[q]) {
        p++
    }
    //first array value > second array value--- q++
    else if (a1[p]< a2[q]) {
        q++
    }
}
console.log(o);
console.log("execution time =", count);
