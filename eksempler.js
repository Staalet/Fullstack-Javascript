var object1 = { one : 1};
var object2 = {two : 2};
var object3 = {three : 3};
var object4 = {four : 4};
var object5 = {five : 5};
var object6 = {six: 6};
var object7 = {seven : 7};

var theArgs = [];

function f(object1, object2, object3, object4, object5, object6, object7, theArgs){
   return theArgs;
}

console.log(f(object1, object1, object1, object1, object1, object1, object1, theArgs))