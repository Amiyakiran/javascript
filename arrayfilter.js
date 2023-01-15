// array method filter --  create a new array with elements satisfying the conditions applying to the existing array.
a = [10, 11, 12, 13, 14, 15]

// display all even numbers

evenarray = a.filter(num=>num%2==0)
console.log(evenarray);

//print number>13

newarray = a.filter(num=> num>13)
console.log(newarray);