// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

function myFunction(str, i) { //declare function 
    const myArr  = []; //start w empty array/define/assign variable

    for (let j = 0; j < i; i++ ) { //for loop to run through array 
    myArr.push(str);
    //.push(sunshine would return * the value of i )
    }
    return myArr; //return value of myFunction when called 
};

myFunction(); //call function




// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------


//const arr = [1,2,3,4];

function reverseFunction(arr) { //create function expression
   
    var newArr = []; //declare/assign variable value 
    for (let i = 0; i < arr.length; i++){ // index begins on first number, ends when i is no longer less than arr.length
        newArr.unshift(arr[i]);                    //.unshift method adds one or more elements to the beginning of an array and returns the new length of the array - MDN
    };

return newArr;  //return value of new array when function is called 
};

reverseFunction(); //call function

//could return [...arr].reverse(); -> creates copy and mutates the copy instead of the original
// const reverseArray = (arr) => [...arr].reverse(); ->  ie. with fat arrow function

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

//falsy values: false, null, 0, undefined, NaN, " "

function filterFalsy() { //declare function expression

//var arr = [1, 2, null, NaN] //for testing

const falsy             //define variable 
 = arr.filter(Boolean); //use .filter(Boolean) to determine true/false

//console.log(falsy); //testing

};

filterFalsy();      //call function


//ex. of for loop solution 


//function removeFalsyValues(arr) {
//    const result = [];


//    for (let i=0; i < arr.length; i++) {
//        if (!!arr[i]) {                          //could add === true here to be double sure
//            result.push(arr[i]);
//        }


//    }
//    return result;
// };


// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

////////////refactored: /***revist later to review***//////////////////////////

const myArray = [   //list array
    ['name', 'Charlie'],
    ['color', 'brown'],
    ['age', '10']
];

function createObj (arr) { //create function
const result = {}; //assign and define variable 

    for (let i = 0; i <arr.length; i++) { //for loop
        result[arr[i][0]] = arr[i][1];
    }

// could also use for...of
//for (const index of arr) {
//    result [index[0]] = index [1];
//}

return result;
};




// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------


//define the function: ... 
function onlyOne(array) { //declare function expression
    var noDuplicates = [];          //variable declaration and assignment

// for loop to tell the function to run through the array

    for (let i = 0; i < array.length; i++){


//if statement using .indexOf -> "method returns the first index at which a given element can be found in the array" - MDN
     if (noDuplicates.indexOf(array[i]) === -1) { //.indexOf allows us to push -1 if array[i] doesn't exist 
        noDuplicates.push(array[i]);            //.push adds new elements to result array
     }   
    }
    return noDuplicates;                        //execute function

};

//can also use spread operator??
//can use {} to destructure an object 
// .includes vs .indexOf



//use to check solution:
//var num = [1,2,3,4,5,4,3];
//var oneNum = onlyOne(num);
//console.log(oneNum);


// function removeDuplicates(arr) {
//    return [...new Set (arr)]; //...new creates new set / set is an API **see notes 
// };
// use .values when working with sets


// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------



//create function expression
function identicalIsTrue(arr1, arr2) {

    let N = arr1.length;
    let M = arr2.length;

    //compare array length by:
    if (N != M) 
    return false; 

    //sort to compare values in order

    arr1.sort();        
    arr2.sort();

    //can also use .sort(compareFn(a, b)) //where a and b are 2 parameters
    //function compareNumbers (a, b){
    //    return a - b;
    //}
    // to use: anArray.sort(compareNumbers); alphabetical order/numeric order for (a, b)

    //loop to run through the array 

    for (let i = 0; i < N; i++){


    //if arr1 value != arr2 value at same index in array, return false
    if (arr1[i] != arr2[i]){
        return false;
    }
}
    //otherwise return true
        return true;

};



//function compareArrays(arr1, arr2) {
//   if(arr1.length !== arr2.length){
//       return false;
//   }
//};



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
