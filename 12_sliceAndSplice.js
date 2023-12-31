/*
Slice and Splice

You are given two arrays and an index.

Copy each element of the first array into the second array, in 
order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain 
the same after the function runs.
*/
function frankenSplice(arr1, arr2, n) {
    /* Splice takes a starting index, number of items to delete,
    and items to insert 
    Slice always returns a new array - so, to leave arr2 as new it
    can be sliced initially.
    */
    let arr3 = arr2.slice(); 
    arr3.splice(n, 0, ...arr1);
    // console.log(arr1, arr2, arr3);
    return arr3;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));