////proto type inheritance
baleno={
    manufacture: "maruti",
    varient: ['automatic','manual'],
    model: 'hatch back'
}

glanza ={
    manufacturer: 'toyota'
}

glanza.__proto__=baleno//inheritance
console.log(glanza.varient);