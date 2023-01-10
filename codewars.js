// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number=function(array){
    //MDN -> map() method creates a new array populated with the results of calling a provided function on every element in the calling array

    return array.map((line, index) => {
      //map() lets you add an index

      return `${index + 1}: ${line}`
      //index + 1 so that you start on 1 instead of 0

    });
  };



// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

function arr(n) { //declare function

    //assign a variable to a blank array
    const containArr = [];

    //loop to make an array using n 
    for(var i = 0; i < n; i++){

      //use.push() MDN -> "method adds one or more elements to the end of an array and returns the new length of the array.
      containArr.push(i);
    }

    //call function
    return containArr;
  };
  

// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone){
    lamps = ['o' || 'x'];
    drone = ['T']
    lengthFlight = lengthDrone;
      if (i < lengthFlight.length) {
        result = "o";
      } else {
        result = "x";
      } return result;
    };

//tbh v confused by this one ? not sure what kata wants flyBy function for


// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage (marks) {
    for (var i=0,sum=0;i<marks.length;i++) {
      sum += marks[i];
    };
    return Math.floor(sum / i);
  };
  
  



// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043

reverse=a=>[...a].map(a.pop,a)