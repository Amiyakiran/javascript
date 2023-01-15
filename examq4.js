//Q4. Write a function to check if milk exists in your array var items = ['milk', 'bread', 'sugar'];

var items = ['milk', 'bread', 'sugar'];

//console.log("milk is present or not? :",items.includes('milk')?'present':'Not present');


function check(item) {
        count = 0
         data1 = item
    for (let index = 0; index < items.length; index++) {
        data = items[index]
        if (data == data1 ) {
            count++
        }
        }
    if (count==1) {
            console.log(item,"is present");
    } else {
            console.log("not present");
        }
    
}

check ("milk")
console.log("----------------------------");

//5. Now you've found milk exists add some code to find the index of milk and remove that item.


//console.log("index of milk is:",items.indexOf('milk'));

 
function del(item) {
       dt= item
     index = items.indexOf(dt)
     console.log("index of",dt,"is",index);
     items.splice(index,1)
     console.log("array items after deletion:",items);
}

del ("milk")