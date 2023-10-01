/*
Title Case a Sentence

Return the provided string with the first letter of each word 
capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize 
connecting words like the and of.
*/

function titleCase(str) {
    // Create an array from str using split
    let strArray = str.split(' ');

    // Ensure each element of the strArray is in lowercase
    strArray = strArray.map(word => word.toLowerCase());

    // Iterate over array to capitalise 1st letter in words
    for (let i = 0; i < strArray.length; i++) {
        const word = strArray[i];
        strArray[i] = strArray[i].replace(word[0], word[0].toUpperCase());
    }

    // , strArray.join(' '));
    return strArray.join(' ');
}

const testData = [
    "sHoRt AnD sToUt",
    "HERE IS MY HANDLE HERE IS MY SPOUT",
    "I'm a little tea pot",
]
console.log(titleCase(testData[2]));