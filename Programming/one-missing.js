function arrayBuilder(length) {
  length = length || 100000;
  var removedNumber = Math.floor(Math.random() * length);
  var array = Array.apply(null, Array(length)).map(function (_, i) {return i + 1;});
  array.splice(removedNumber, 1);
  return array;
}

function arrayBuilder(length) {
  length = length || 100000;
  var removedNumber = Math.floor(Math.random() * length);
  var array = Array.apply(null, Array(length)).map(function (_, i) {return i + 1;});
  array.splice(removedNumber, 1);
  return array;
}

var array = arrayBuilder(10);

// var arr = [1,2,3,4,5,6,7,8,9,10]; //10

var resultBuiltArray = 0;
for(var i =0; i < array.length; i++){
  resultBuiltArray = resultBuiltArray + array[i];
}

var resultFullArray = 0;
for(var i =1; i <= 10; i++){
  resultFullArray = resultFullArray + i;
}

console.log(array);
console.log(resultBuiltArray);
console.log(resultFullArray);

console.log("missing number is:", resultFullArray - resultBuiltArray);
