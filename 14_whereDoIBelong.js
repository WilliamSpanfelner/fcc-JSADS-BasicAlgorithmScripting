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