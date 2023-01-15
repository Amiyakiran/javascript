var car={
    name: 'boleno',
    model:'hatch back',
    manufacturer:'maruti',
    price:'10 lakh'
}

// display the manufacturer of this car
console.log("manufacturer name:",car["manufacturer"]);
console.log("-----------------------------------------------");
//check price key is in car object, then display its value
if ("price" in car) {
    console.log('is present');
    console.log("price of the car is:", car["price"]);
}
else{
    console.log('not present');
}
console.log("-----------------------------------------------");


//check varient is present in car object then display yes otherwise
//add key as varient and value as an array
if ("varient" in car) {
    console.log('present');
}
else{
   car.varient = ["manuel"]
   console.log(car);
}

// add one more value to varient key
car.varient.push("automatic")
console.log(car);
