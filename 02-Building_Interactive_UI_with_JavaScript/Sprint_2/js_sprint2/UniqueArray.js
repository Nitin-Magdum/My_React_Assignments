// Write a JavaScript Program that returns a duplicate free array
// Example:
// Input: [1, 2, 3, 1, 2]
// Output: [1, 2, 3]
// Explanation: In the given input, 1 & 2 is appearing more than once hence it is being removed.

function getUnique(arr) {

    let uniqueArr = [];
    for (let i of arr) {
        if (uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}
const array = [1, 2, 3, 2, 3];
getUnique(array);