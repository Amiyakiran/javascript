//  Q6
var animals = [
    { name: "Jason", species:"rabbit"},
    { name: "Jessica", species:"dog"},
    { name: "Jacky", species:"owl"},
    { name: "Luke", species:"fish"},
    { name: "Junior", species:"rat"},
    { name: "Thomas", species:"cat"}
   ]

   //a. Display the details of Dog species from the given array
   console.log("Display the details of Dog species from the given array");
   animals.filter(item=>item.species=='dog').forEach(item=>console.log(item))
 console.log("---------------------------------------");
  // b. Display all the species name
  console.log(" Display all the species name");
   animals.map(item=>item.name).forEach(item=>console.log(item))
   console.log("---------------------------------------");
 
   