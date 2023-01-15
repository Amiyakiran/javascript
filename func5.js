const mail = email =>{
    if (email.endsWith('@gmail.com')) {
        console.log("its a email id");
    }
    else{
        console.log("its not  a email id");
    }
}
 mail('amiya.susy@gmail.com')

// print whether a word starts with q 

 const str = str1 =>{
    if (str1.startsWith('q')) {
        console.log("its starts with q");
    }
    else{
        console.log("no, it doesnt starts with q");
    }
 }
 str('qhdffygur')

 // another way

 let word = w=> {
    if (w[0]=='q'|| w[0]==Q) {
        return 'starts with q/Q'
    }
    else{
        return 'not starts with q/Q'
    }
 }
console.log( word('qwert'));

// eval- predefined method

console.log(eval("10*3"));