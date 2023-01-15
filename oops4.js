//inheritance---- classical inheritance----inheritance between two classes

class parent{
    bike(){
        console.log('bullet');
    }
}

class child extends parent{//to inherit parent class to child the keyword extend is used

}

var obj = new child()//obj is the object create for child but it can inherit functions from parent since extend is used
obj.bike()
console.log("-----------------------------------");

class parent1{
    bike(){
        console.log('bullet');
    }
}

class child1 extends parent1{//to inherit parent class to child the keyword extend is used
    bike(){
        console.log('duke');
    }
}

var obj = new child1()//here duke will be printed since child already have bike function so no inheritance from parent
obj.bike()
console.log("-----------------------------------");
