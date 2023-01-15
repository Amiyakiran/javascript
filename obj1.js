//object creation


var employee = {
    id: 1,// {key: value}
    username: "max",
    desg : "Developer",
    salary : 34000
}
console.log(employee);

// both array and oject are stored as object in javascript
// in javascript array is stored as
//a =[i,'max','developer',34000]==> a[01: 1,02:'max',03:'developer',04: 34000]==> that is [index,value]



// to get a value from object - object_name["key"] or use object_name.key
console.log("employee name:",employee["username"]);
console.log("employee designation:",employee.desg);//dot operation is only possible when the key is present on the object
//to check whether there is experience key in employee obj
//syntax: "key" in object_name- return true or false
if ("experience" in employee) {
    console.log('present');
}
else{
   employee.experience = 3
   console.log(employee);
}
console.log("----------------------------------");

if ("experience" in employee) {
    console.log('present');
}
else{
   employee.experience = 3
   console.log(employee);
}
console.log("----------------------------------");

if ("dept" in employee) {
    console.log('present');
}
else{
   employee.dept = 'software'
   console.log(employee);
}
console.log("----------------------------------");

// update a particular value
//increase th a salary
employee.salary+=6000
console.log(employee);

console.log("----------------------------------");

//display key value pair one by one
// display only key
for(let key in employee){
    console.log(key);
}
console.log("----------------------------------");
// display only key_value
for(let key in employee){
    console.log(employee[key]);
}
console.log("----------------------------------");

// display only key and key_value
for(let key in employee){
    console.log(key+":"+employee[key]);
}
console.log("----------------------------------");


// to convert object to array-nested array
console.log(Object.entries(employee));
console.log("----------------------------------");



//creating a object for student

//var student = {
    //rollno: 1,
    //name:"Amiya",
    //coarse : "btech",
    //mark : 84
//}
//console.log(student);