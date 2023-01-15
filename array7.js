// print duplicated numbers
// a = [10, 20, 23, 30,45,10, 34, 23]


a = [10, 20, 23, 30, 45, 10, 34, 23]
console.log(a);
o = []
for (let i = 0; i < a.length; i++) {
    for (let j = i+1; j < a.length; j++) {
        if (a[i]== a[j]) {
            o.push(a[i])
        }
        
    }
}
console.log(o);