/*
Boo who

Check if a value is classified as a boolean primitive. Return 
true or false.

Boolean primitives are true and false.
*/
function booWho(bool) {
    // return bool === true || bool === false ? true : false;
    return typeof(bool) == "boolean";
}

const testData = [
    true,
    false,
    [1,2,3],
    [].slice,
    {"a": 1},
    1,
    NaN,
    "a",
    "true",
    "false"
];

for (let i = 0; i < testData.length; i++) {
    const element = testData[i];
    console.log(element, booWho(element));
}
