/*
Boo who

Check if a value is classified as a boolean primitive. Return 
true or false.

Boolean primitives are true and false.
*/
function booWho(bool) {
    // return bool === true || bool === false ? true : false;
    return Boolean(bool);
}
  
console.log(booWho(null));