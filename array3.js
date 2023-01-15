//display array using for loop

var weekdays = ['sun', 'mon', 'tue','wed', 'thur', 'fri','sat']
 for (let i = 0; i < weekdays.length; i++) {
    
    console.log(weekdays[i]);
 }

 console.log("----------------------------");

 //display array using for loop and of keyword

 var weekdays = ['sun', 'mon', 'tue','wed', 'thur', 'fri','sat']
for (const day of weekdays) {
    console.log(day);   
}// day is a variable--- directly accessing the values stored in the array

console.log("----------------------------------------");

//display array using for loop and in keyword


var weekdays = ['sun', 'mon', 'tue','wed', 'thur', 'fri','sat']
for (const index in weekdays) {
    console.log(index);
}

console.log("----------------------------------------");






var weekdays = ['sun', 'mon', 'tue','wed', 'thur', 'fri','sat']
for (const index in weekdays) {
    console.log(weekdays[index]);
}
console.log("----------------------------------------");
