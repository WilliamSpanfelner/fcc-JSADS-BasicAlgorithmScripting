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
        // console.log(index, arr2D);
    }
    
    return arr2D;
}

const testData = [
    [[0, 1, 2, 3, 4, 5, 6, 7, 8], 2],
    [[0, 1, 2, 3, 4, 5, 6, 7, 8], 4],
    [[0, 1, 2, 3, 4, 5, 6], 3],
    [[0, 1, 2, 3, 4, 5], 4],
    [[0, 1, 2, 3, 4, 5], 2],
    [[0, 1, 2, 3, 4, 5], 3],
    [["a", "b", "c", "d"], 2],
];
for (let i = 0; i < testData.length; i++) {
    console.log(chunkArrayInGroups(testData[i][0], testData[i][1]));
}
