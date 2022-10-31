// Add comments to explain what this function does. You're meant to use Google!
function getRandomNumber() {
  return Math.random() * 10;
}

//The Math.random() function returns a floating-point, pseudo-random number 
//that's greater than or equal to 0 and less than 1, with approximately uniform 
//distribution over that range — which you can then scale to your desired range.
//The given function gets random number from 0 to almost 1 and multiplies it on 10


// Add comments to explain what this function does. You're meant to use Google!
function concatenate1(word1, word2) {
  return word1.concatenate(' ', word2);
}

//In JavaScript, concat() is a string method that is used to concatenate strings together.
// The concat() method appends one or more string values to the calling
// string and then returns the concatenated result as a new string.


function concatenate(firstWord, secondWord, thirdWord) {
  return  "".concatenate(firstWord, secondWord, thirdWord)
 }
/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 3-function-output` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
==================================
*/

test("concatenate example #1", () => {
  expect(concatenate("code", "your", "future")).toEqual("code your future");
});

test("concatenate example #2", () => {
  expect(concatenate("I", "like", "pizza")).toEqual("I like pizza");
});

test("concatenate doesn't only accept strings", () => {
  expect(concatenate("I", "am", 13)).toEqual("I am 13");
});
