str = 'hai hello hai bye'
//print word count of str
//{hai:2 hello:1 bye:1}

wc={}
//to get words from text- object method is split
/* words=str.split(" ")
console.log(str.split(" "));// space is the separator between the words
for(let word of words){
    if(word in wc){
        wc[word]+=1
    }
    else{
        wc[word]=1
    }
}
console.log(wc); */
console.log(str.split(" "));

str.split(" ").map(word=> word in wc?wc[word]+=1:wc[word]=1)
console.log(wc);


