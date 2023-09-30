/*
Confirm the Ending

Check if a string (first argument, str) ends with the given 
target string (second argument, target).

This challenge can be solved with the .endsWith() 
method, which was introduced in ES2015. But for the 
purpose of this challenge, we would like you to use one of 
the JavaScript substring methods instead.
*/
function confirmEnding(str, target) {
    let startIndex = str.length - target.length;  // number of chars from the string end to start checking
    if (str.indexOf(target, startIndex) > -1) {  // see if the target can be found in str
        const strChars = str.substring(startIndex, startIndex + target.length);
        // console.log(str.substring(start, start + target.length) == target);
        // console.log(start, str.indexOf(target, start));
        return strChars == target;
    } 
    
    return false;
}
  
console.log(confirmEnding("Bastian", "n"));
