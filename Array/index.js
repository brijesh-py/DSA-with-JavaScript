// 1. Reverse an Array
// Problem: Given an array, reverse the elements of the array in place.
// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

/*
const InputArr = [1, 2, 3, 4, 5];
const outputArr = [];
for (let i = InputArr.length - 1; i >= 0; i--) {
  outputArr[outputArr.length] =(InputArr[i]);
}
console.log(outputArr);
*/

// 2. Find the Maximum Product of Two Elements
// Problem: Given a non-empty array of integers, find the maximum product of any two elements.
// Input: [3, 7, 2, 8, 5]
// Output: 56 (7 * 8)

/*
const inputArr = [3, 7, 2, 8, 5];
const output = [0, 0];
for (let i = 0; i < inputArr.length; i++) {
  if (output[0] < inputArr[i]) {
    if (output[1] < output[0]) {
      output[1] = output[0];
    }
    output[0] = inputArr[i];
  }
}
console.log(output[0] * output[1]);
*/

// 3. Move Zeros to End
// Problem: Given an array of integers, move all the zeros to the end of the array while maintaining the relative order of the non-zero elements.
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

/*
const inputArr = [0, 1, 0, 3, 12];
const zerosArr = [];
let tempArr = [];
for (let i = 0; i < inputArr.length; i++) {
  if (0 === inputArr[i]) {
    zerosArr[zerosArr.length] = inputArr[i];
  } else {
    tempArr = [...tempArr, inputArr[i]];
  }
}
const output = [...tempArr, ...zerosArr];
console.log(output)
*/

// 4. Find the Intersection of Two Arrays
// Problem: Given two arrays, find their intersection, which is a new array that contains all the elements that are present in both arrays. Each element in the result should appear as many times as it shows in both arrays.
// Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
// Output: [4, 9] or [9, 4]
/*
const numArr1 = [4, 9, 5],
  numArr2 = [5, 9, 4, 9, 8, 4];
const greaterLengthOfArr = numArr1.length > numArr2.length ? numArr1 : numArr2;
const LessLengthOfArr = numArr1.length < numArr2.length ? numArr1 : numArr2;
const output = [];

for (let i = 0; i < LessLengthOfArr.length; i++) {
  for (let j = 0; j < greaterLengthOfArr.length; j++) {
    if (numArr1[i] === numArr2[j]) {
      let isDuplicate = false;
      for (let k = 0; k < output.length; k++) {
        if (output[k] === LessLengthOfArr[i]) {
          isDuplicate = true;
        }
      }
      if (!isDuplicate) {
        output[output.length] = LessLengthOfArr[i];
      }
    }
  }
}
console.log(output);
*/


// 5. Find All Pairs with a Given Sum
// Problem: Given an array of integers and a target sum, find all unique pairs of elements that add up to the target sum.
// Input: arr = [1, 2, 3, 4, 5, 6], target = 7
// Output: [[1, 6], [2, 5], [3, 4]]

/*
const inputArr = [1, 2, 3, 4, 5, 6];
const outputArr = [];
let outputLength = 0;

for (let i = 0; i < inputArr.length; i++) {
  for (let j = i + 1; j < inputArr.length; j++) {
    if (inputArr[i] + inputArr[j] === 7) {
      outputArr[outputArr.length] = [inputArr[i], inputArr[j]];
    }
  }
}
console.log(outputArr);
*/
