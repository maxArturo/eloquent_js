// Eloquent Javascript
// Chapter 2: Program Structure > Excercises

// Looping a triangle
var triangle = function(){
  var placeholder = '#';

  for (var i = 0; i < 7; i++) {
    console.log(placeholder);
    placeholder = placeholder + '#';
  };
}

// FizzBuzz
var fizzBuzz = function () {
  for (var i = 0; i <= 100; i++){
    if(i % 5 === 0 && i % 3 === 0){
      console.log('fizzBuzz');
    } else if(i % 3 === 0){
      console.log('fizz');
    } else if(i % 5 === 0){
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

// Chess board
var chessBoard = function(size){
  var oddChar = ' ';
  var evenChar = '#';
  var odds = '';
  var evens = '';

  for(var i = 0; i < size; i++){
    odds = odds + (i % 2 === 0 ? oddChar : evenChar);
    evens = evens + (i % 2 === 0 ? evenChar : oddChar);
  }
  for(var i = 0; i < size; i++){
    console.log(i % 2 === 0 ? evens : odds);
  }
}

// Chapter 3: Functions > Excercises
// minimum function
var minimum = function(a, b){
  return a <= b ? a : b;
}

// even-ness function recursively
var isEven = function(num){
  if (num === 1) {
    return false;
  } else if (num === 0){
    return true;
  } else {
    return num > 0 ? isEven(num - 2) : isEven(num + 2);
  }
}

// bean counting
var countBs = function(str, letter){
  var count = 0;
  for (var i = str.length - 1; i >= 0; i--) {
    if (str.charAt(i) === letter) {
      count++;
    };
  };
  return count;
}

// Chapter 4: data structures
// typeof returns the type of an object
// sum of a range     5    2      -1
var range = function(start, end, step){
  var result = [];
  if (step == undefined)
    step = 1;
  if (start <= end){
    for (var i = start; i <= end; i += step){
      result.push(i);
    }
  } else {
    for (var i = start; i >= end; i += step){
      result.push(i);
    }
  }
  return result;
}

var sum = function(arr){
  var result = 0;
  arr.forEach(function(d){result += d;});
  return result;
}

var reverseArray = function(arr){
  var result = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  };
  return result;
};

var arrToList = function(arr){
  if (arr.length === 0) return null;
  var currList = {
    value: arr.shift(),
  };
  var restOfList = arrToList(arr);
  if (restOfList){
    currList.rest = restOfList;
  }
  return currList;
}

var listToArray = function(list){
  if (!list) return null;
  var arr = [list.value];
  if (list.rest)
    arr = arr.concat(listToArray(list.rest));
  return arr;
}i

//Chapter 5: Higher-order functions
//

var reduce = function(arr, operator, start){
  if(start === undefined || !start){
    var current = 0;
  } else {
    var current = start;  
  }

  arr.forEach(function(d){
    current = operator(current, d);
  });
  return current;
}
//example of using concat to 'flatten' an array
//

var flattenArray = function(){
  return reduce(
    [[382, 53], [3,5,3,2], [3,3,5,2,1,2,5]], 
    function(a,b){return a.concat(b);},
    []);
};

//skipping data-dependent examples...
//


