// input  2       3          4               5 ..........n
//      2+22      3+33+333    4+44+444+4444
//output  24       369        4936
n=4
i=1
str =""
sum =0
while (i<=n) {
    str = str + n // making the number as string
    sum = sum + Number(str)
    console.log(str);
    i++
}
console.log(sum);


//another method

n=3
i=1
temp =0
sum =0
while (i<=n) {
    temp = temp*10 + n
    console.log(temp);
    sum = sum + temp
    i++
}
console.log(sum);
// 3 = 0*10 +3
// 33= 3*10+3
// 333 = 33*10+3