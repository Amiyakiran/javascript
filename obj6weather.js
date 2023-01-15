weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

// create a new object wd{}
wd= {}

//get each item from the array weather data
    for(let data of weatherData){
        // fetch district from item and assign to a variable district
        let district = data.district
        // fetch weather from item and assign to a variable curtemp
        let curtemp = data.weather
        // check district in wd object
        if(district in wd){
            //fetch oldtemp district key of wd object and compare it with curtemp
            oldtemp = wd[district]
        // oldtemp>curtemp add district as key and oldtemp as its value in the dw object
            if(oldtemp>curtemp){
                wd[district] = oldtemp
            }
            else{
            wd[district] = curtemp 
            }

        }// else add district as key and curtemp as its value in the dw object
        else{
            //not present:add district as key and curtemp as its value in the dw object
            wd[district] = curtemp
        }
    }
console.log(wd);




