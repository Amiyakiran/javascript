// binary search

a = [10, 11, 2, 3, 4, 15]
console.log(a);
//console.log('before sort', a);

//a.sort((a,b) =>a-b)// ascending
//console.log(' sorted in ascending order', a);

//a.sort((a,b) =>b-a)// descending
//console.log('sorted in descending order', a);
 
low = 0
up = a.length - 1
searchterm = 4
ispresent = false
count = 0

// sort the array
a.sort((a,b) =>a-b)
console.log(a);
//repeat untill low<=up
while (low<=up) {
    count ++
    //fing the mid element in array
    mid = Math.floor((low+up)/2)// math.floor to remove decimal
    //check the mid and search item is same
                if (a[mid]== searchterm) {
                    ispresent = true
                    break
                }
                else if (a[mid]> searchterm) {
                    up = mid
                }
                else if (a[mid]< searchterm) {
                    low = mid+1
                }
}
console.log('execution time', count);
console.log(ispresent?'number found':'number not found');
console.log('at the position', mid+1,'of the sorted array');