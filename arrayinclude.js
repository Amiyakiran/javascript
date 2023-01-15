// is max present in array or not

a = ['max', 'miller', 'mini', 'manu']
//console.log(a.some(item=>item=='max')); 
// another method is to use include

console.log(a.includes('max')? 'yes':'no');

// splice method

a.splice(2,1, 'maxwell', 'manuel')
console.log(a);
//indexof

a = ['max', 'miller', 'mini', 'manu']
mini = a.indexOf('mini')
console.log(mini); // to find the index of the item
a.splice(mini, 2)// delete the item from the index and number of item to be removed.
console.log(a);