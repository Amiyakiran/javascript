//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]

//1. district having Highest +ve case 
console.log("------------------------------------");
console.log("district having Highest +ve case");
highcase = covid_data.sort((mem1,mem2)=>mem2[2]-mem1[2])
console.log(highcase[0]);
console.log("------------------------------------");

//2. district having Highest 1st dose vaccine
console.log("district having Highest 1st dose vaccine");
highdose = covid_data.sort((mem1,mem2)=>mem2[5]-mem1[5])
console.log(highdose[0]);
console.log("------------------------------------");

//3. district having lowest death rate

console.log("district having lowest death rate");
lowestdeath = covid_data.sort((mem1,mem2)=>mem1[3]-mem2[3])
console.log(lowestdeath[0]);
console.log("------------------------------------");


//4. sort data with +ve case in descending order

console.log("data with +ve case in descending order");
highcase = covid_data.sort((mem1,mem2)=>mem2[2]-mem1[2])
console.log(highcase);
console.log("------------------------------------");
//5. is district with +ve cases > 15000
console.log("district with +ve cases > 15000");
district = covid_data.filter(mem=> mem[2] >15000 )
console.log(district);
console.log("--------------------------------------");


//6. sort data with 1st dose vaccine
console.log("data with 1st dose vaccine in ascending order");
firstdose = covid_data.sort((mem1,mem2)=>mem1[5]-mem2[5])
console.log(firstdose);
console.log("------------------------------------");

//7. Print Thrissur details
console.log("Thrissur details :" );
thri = covid_data.find(mem=> mem[1] == 'Thrissur')
console.log(thri);
console.log("--------------------------------------");

//8. Print total number of positive cases
console.log("total number of positive cases:");
b=[]
for (let mem of covid_data) {
   b1 = mem[2]
   b.push(b1)
   
}
c=0
for (let i = 0; i < b.length; i++) {
    c = c+b[i]
    
}console.log(c);
console.log("--------------------------------------");

//9. Print total number of curred cases
console.log("total number of curred cases:");
d=[]
for (let mem of covid_data) {
   d1 = mem[4]
   d.push(d1)
   
}
cu=0
for (let i = 0; i < d.length; i++) {
    cu = cu+d[i]
    
}console.log(cu);

console.log("--------------------------------------");

//10. Print curred cases in Idukki
console.log("curred cases in Idukki :" );
idukki = covid_data.find(mem=> mem[1] == 'Idukki')
console.log(idukki[4]);
console.log("--------------------------------------");
