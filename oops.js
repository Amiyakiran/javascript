//object oriented programming ---OOPS
// class:eg: laptops
// object: different type of laptop
// reference: relation between object and class

// how to create a class
 class Employee{
    //properties/variables
    id = 0;
    username = "";
    designation = "";

    //functions
    //to initialise the class properties-setEmployee or can use constructor
    setEmployee(id, uname,desg){
        this.id = id
        this.username = uname
        this.designation = desg
        this.printEmployee()
    }
    printEmployee(){
        console.log(`user id: ${this.id}`);
        console.log(`user username: ${this.username}`);
        console.log(`user designation: ${this.designation}`);
    }
 }

 //object creation: to access properties of class outside class

 var emp1 = new Employee()
 emp1.setEmployee(1,"max","developer")

 var emp2 = new Employee()
 emp2.setEmployee(2,"mini","manager")