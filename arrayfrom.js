str ='hello hai'
//print all vowels present in the array
b = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U']
for(let char of str){
    if (b.includes(char)){
        console.log(char)
    }
    
}
console.log("----------------------------------------");
// Array.from is used to convert a str to an array
// char is the element of str array
// item is the matched elements
console.log("the vowels in the array is:");
Array.from(str).filter(char=>b.includes(char)).forEach(item => console.log(item));
console.log("-----------------------------------------");