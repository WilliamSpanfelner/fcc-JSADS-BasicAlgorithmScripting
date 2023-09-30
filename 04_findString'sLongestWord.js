/*
Find the Longest Word in a String

Return the length of the longest word in the provided 
sentence.

Your response should be a number.

*/
function findLongestWordLength(str) {
    let words = str.split(' ').map((word) => word.length);  // map the word lengths directly
    
    return Math.max(...words);  // use the Math.max method to return largest value
}
  
console.log(
    findLongestWordLength("The quick brown fox jumped over the lazy dog"));