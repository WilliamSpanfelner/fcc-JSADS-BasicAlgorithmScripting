/*
Mutations

Return true if the string in the first element of the array contains all of 
the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all 
of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the 
string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the 
letters in line are present in Alien.
*/
function mutation(arr) {
    for (let index = 0; index < arr[0].length; index++) {
        const element = arr[0][index].toLowerCase();
        if (!arr[1].toLowerCase().includes(element)) {
            return false
        }
        console.log(element, arr[1].toLowerCase().includes(element));
    }
}

console.log(mutation(["hello", "hey"]));