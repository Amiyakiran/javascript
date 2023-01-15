pattern = "ABBABABBA"
//Display first recursive character :A
pa ={}
for(let word of pattern){
    if(word in pa){
        console.log("FIRST recursive character is:",word);
        break
    }
    else{
        pa[word]=1
    }
}
