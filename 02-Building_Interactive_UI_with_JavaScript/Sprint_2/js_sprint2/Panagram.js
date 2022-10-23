// Given a string check if it is Pangram or not. A pangram is a sentence containing every letter in the English Alphabet..

// Example:
// Input:
// S = The quick brown fox jumps over the lazy dog

// Output: 1
// Explanation: In the given input, there are all the letters of the English alphabet. Hence,
//  the output is 1, otherwise the output should be zero.

function isPanagram(s) {
    var compairString = 'abcdefghijklmnopqrstuvwxyz';
    var s1 = s.replace(/\s/g, '');
    s1 = s1.toLowerCase();
    var s2 = s1.split('');
    var s3 = [...new Set(s2)];
    var s4 = s3.sort();
    var s5 = s4.join('');
    if (s5 == compairString) {
        console.log("Given String is Panagram");
    }
    else {
        console.log("Given String is Not Panagram");
    }
}

var s = "The quick brown fox jumps over the lazy dog";
isPanagram(s);