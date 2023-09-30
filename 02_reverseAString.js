/*
Reverse a String

Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".
*/
function reverseString(str) {
    let strReversed = '';
    for (let i = str.length-1; i > -1; i--) {
        strReversed += str[i];
        // console.log(i, strRevered);
    }
    return strReversed;
  }
  
console.log(reverseString("hello"));