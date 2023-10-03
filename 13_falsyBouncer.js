/*
Falsy Bouncer

Remove all falsy values from an array. Return a new array; 
do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", 
undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/
function bouncer(arr) {
    /* filter creates a new array while the Boolean function
    attempts to convert a value to a boolean primative (
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
    */
    let newArr = arr.filter(item => Boolean(item));
    // console.log(newArr, arr);
    return newArr;
}

bouncer([7, "ate", "", false, true, 9]);
