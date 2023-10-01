/*
Truncate a String

Truncate a string (first argument) if it is longer than the 
given maximum string length (second argument). Return the 
truncated string with a ... ending.
*/
function truncateString(str, num) {
    //1. determine str length and compare to num
    if (str.length > num) {
        //2. Drop characters after num characters & add elipsis;
        const stringToKeep = str.slice(0, num) + '...';
        // console.log(stringToKeep);
        return stringToKeep
    }
    
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);