products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
console.log("Name of the products are: ");
products.map(item=>item['pName']).forEach(item=>console.log(item))
/* for(let data of products){
    let productname = data.pName
    console.log(productname );
} */
console.log("--------------------------------");
//2. print all mobile details whose display is lcd
console.log("details of the mobiles whose display is lcd");
products.filter(item=>item.display=='lcd').forEach(item=>console.log(item))
/* for(let data of products){
    let display = data.display
    if(display == 'lcd'){
        console.log(data);
    }
} */
console.log("-----------------------------------");
//3. print 5g mobile phone name
console.log("5g mobile phone name");
products.filter(item=>item.band=='5g').forEach(item=>console.log(item.pName))

/* for(let data of products){
    let band = data.band
    if (band =="5g") {
        product = data.pName
        console.log(product);
    }
} */
console.log("-----------------------------------");

//4. sort mobile based on price
console.log("sort mobile based on price");
products.sort((item1,item2)=> item2.price - item1.price).forEach(item=>console.log(item.pName))

console.log("-----------------------------------");

//5. print costly mobile
console.log("costly mobile");
costlymobile = products.reduce((item1, item2)=> item1.price > item2.price? item1: item2)
console.log(costlymobile.pName );
console.log("--------------------------------------");
//6. print low cost mobile
console.log("cheapest mobile");
cheapestmobile = products.reduce((item1, item2)=> item1.price < item2.price? item1: item2)
console.log(cheapestmobile.pName );
console.log("--------------------------------------");