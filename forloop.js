
for (let i = 0; i <= 5; i++) {
    console.log("luminar");
    
}
n =5
var f=1
for( let i=1; i<=n; i++)
{
    f= f*i
    
}
console.log(f);


//use of break
 for (let i = 0; i <= 10; i++) {
    console.log(i);
    if (i>=5) {
        break
    }
    
 }

 //continue

 for (let i = 0; i <= 10; i++) {
    if (i==5) {
        continue
    }// since there is a use of continue at 5 it will not show 5
    
    console.log(i);
   
    
 }
