/*
Chunky Monkey

Write a function that splits an array (first argument) into groups the 
length of size (second argument) and returns them as a two-
dimensional array.
*/
function chunkArrayInGroups(arr, size) {
    let arr2D = [];
    for (let index = 0; index < arr.length; index += size) {
        arr2D.push(arr.slice(index, index + size));
        console.log(index, arr2D);
    }
    
    return arr2D;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));