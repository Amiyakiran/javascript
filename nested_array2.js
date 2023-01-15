//nested array using map, filter, sort, length and find --- most optimized way
//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
console.log("--------------------------------------");

console.log("Name of employees are:");
empname = employee.map(emp=>emp[1])
console.log(empname);
console.log("--------------------------------------");


//print total numbers of employee
console.log("the total number of employee: ");
console.log(employee.length);
console.log("--------------------------------------");

//print developer employee details
console.log(" developer employee details: ");
empdet = employee.filter(emp=> emp[2] =="developer")
console.log(empdet);
console.log("--------------------------------------");

//print employee whose salary > 30000
console.log("employee whose salary > 30000 are:");
empsal = employee.filter(emp=> emp[4] >30000 )
console.log(empsal);
console.log("--------------------------------------");


// print details of employee laisha----- used find method of array---- to find a single item/element
console.log(" details of employee laisha:" );
emplai = employee.find(emp=> emp[1] == "Laisha")
console.log(emplai);
console.log("--------------------------------------");

//sort employee based on their salary in descending order
 console.log("sort employee based on their salary in descending order");
 employee.sort((emp1,emp2)=> emp2[4]-emp1[4])
 console.log(employee);
 console.log("--------------------------------------");


//sort employee based on their experience in ascending order

console.log("sort employee based on their experience in ascending order");
employee.sort((emp1,emp2)=> emp1[5]-emp2[5])
console.log(employee);

console.log("--------------------------------------");

// print the employee with lowest salary

// print the employ name whose have the least salary
// using reduce- give the last one item that satisfy the condition and reduce right will give the first item that satisfy the condition
console.log("employee with least salary:");
emplsal = employee.reduce((emp1, emp2)=> emp1[4]<emp2[4]? emp1: emp2)
console.log( emplsal);
console.log("--------------------------------------");

//print employee with highest salary
console.log("employee with highest salary:");
emphsal = employee.reduce((emp1, emp2)=> emp1[4]>emp2[4]? emp1: emp2)
console.log( emphsal);
console.log("--------------------------------------");

//total salary

console.log("total salary:");
//emp1 = employee.map(emp=>emp[4])
//console.log(emp1);
//emptsal = emp1.reduce((emp1,emp2)=> emp1+ emp2)//we cannot use the reduce directly because reduce can only used 
//in the case of array having only numbers not in nested array that is why first a number only array is created 
//and the used reduce.
//console.log(emptsal);
//console.log("--------------------------------------");
total = employee.map(emp=>emp[4]).reduce((emp1,emp2)=> emp1+ emp2)
console.log(total);
console.log("--------------------------------------");