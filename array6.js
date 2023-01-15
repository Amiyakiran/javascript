// input [4, 5, 6]
// output [11, 10, 9]

a = [4, 5, 6]
o = []
console.log(a);
sum = 0
for (let i = 0; i < a.length; i++) {
    sum = sum + a[i]
}
for (let i = 0; i < a.length; i++) {
    b = sum - a[i]
    o.push(b)
}
console.log(o);
