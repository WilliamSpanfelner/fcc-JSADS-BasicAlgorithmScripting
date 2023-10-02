/*
Where do I Belong

Return the lowest index at which a value (second argument) 
should be inserted into an array (first argument) once it has 
been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should 
return 1 because it is greater than 1 (index 0), but less 
than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 
2 because once the array has been sorted it will look like 
[3,5,20] and 19 is less than 20 (index 2) and greater 
than 5 (index 1).
*/
function getIndexToIns(arr, num) {
    // First test if the array is empty and return zero if so.
    if (arr.length > 0) {
        // Now that there are some elements to sort lets sort them
        const sortedArr = arr.sort((a, b) => a - b);

        // Loop over array to find largest element smaller than num
        for (let index = 0; index < sortedArr.length; index++) {
            const element = sortedArr[index];
            if (num <= element) {
                return index;
            }
        }

        /* If the last element is reached and there is still no result,
        num must take the place at the end of the array.*/
        return arr.length
    }
    return arr.length;
}

getIndexToIns([20, 3, 5], 19);

const testData = [
    [[1,2,3,4], 1.5],  // 1
    [[2,5,10], 15],  // 3
    [[20,3,5], 19],  // 2
    [[10, 20, 30, 40, 50], 30],  // 2
    [[10, 20, 30, 40, 50], 35],  // 3
    [[3, 10, 5], 3],  // 0
    [[5, 3, 20, 3], 5],  // 2
    [[2, 20, 10], 19],  // 2
    [[70, 40, 60], 50],  // 1
    [[], 1]  // 0
]
for (const i in testData) {
    console.log(getIndexToIns(testData[i][0], testData[i][1]));
}
// console.log(getIndexToIns(testData[6][0], testData[6][1]));