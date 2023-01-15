// nested array

a = [[1,2],[11,22],[4,5],[34,27],[8,10]]

// question: print numbers less than 10

for (let subArray of a) {
    for (let num of subArray) {
        if (num<10) {
            console.log(num); 
        }
    }
}