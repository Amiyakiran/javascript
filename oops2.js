//to ceate a student class


class Student{
    rollno = 0;
    name = "";
    classname = "";

    constructor(rollno, name, classname){//when a program runs first constructor will be executed
        this.rollno = rollno
        this.name = name
        this.classname = classname
        this.printStudent()
    }
    printStudent(){
        console.log(`rollno: ${this.rollno}`);
        console.log(`name: ${this.name}`);
        console.log(`class: ${this.classname}`);
    }
}

var st1 = new Student(1, "aneesh","10")
//st1.setStudent(1, "aneesh","10")- not need to use this since constructor is used

var st2 = new Student(2, "annu","10")
//st1.setStudent(2, "annu","10")