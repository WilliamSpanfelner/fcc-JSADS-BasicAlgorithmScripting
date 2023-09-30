/*
Find the Longest Word in a String

Return the length of the longest word in the provided 
sentence.

Your response should be a number.

*/
function findLongestWordLength(str) {
    let words = str.split(' ');  // create array of words in string
    let longestWordIndex = -1;  // the index of longest word
    let longestWordLength = 0;  // the length of longest word

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > longestWordLength) {
            longestWordLength = word.length;
            longestWordIndex = i;
        }
    }
    console.log(longestWordIndex, longestWordLength);
    return longestWordLength;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");