// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

function myFunction(sunshine, i) {
    const str = "sunshine";
    for (let i = 0; i )
}








// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------


const arr = [1,2,3,4];

function reverseFunction(arr) {
   
    var newArr = [];
    for (var i = arr.length - 1; i = 0; i--){ // index should begin on last number in arr, function runs until 0, last part of loop says function -1 every time it runs 
        newArr.push(arr[i]);                    //newArray will add 1st value of arr to end
    };

return newArr;
};

reverseFunction();






// dot reverse method and spread method




// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

//falsy values: false, null, 0, undefined, NaN, " "

function filterFalsy() {

var arr = [1, 2, null, NaN]

const falsy = arr.filter(Boolean);

console.log(falsy);

};

filterFalsy();


// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

function nestedArray() {


    const myArray = new Map([['name', 'Charlie'], ['color', 'brown'], ['age', 10]
    ]);

    for (let i = 0; i < myArray.length; i++){
         
        const obj = Object.fromEntries(myArray);
    }

};

nestedArray();









// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

function onlyOne(array) {
    var noDuplicates = [];

    for (let i = 0; i < array.length; i++){

     if (noDuplicates.indexOf(array[i]) === -1) {
        noDuplicates.push(array[i]);
     }   
    }
    return noDuplicates;

};

var num = [1,2,3,4,5,4,3];
var oneNum = onlyOne(num);
console.log(oneNum);







// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------
