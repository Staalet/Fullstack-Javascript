

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

//Ex1
var namesFilter = names.filter(function (name) {
    console.log(name);
    if (name.length <= 3) {
        return name;
    }
});
console.log("namesFilter", namesFilter);

var namesMap = names.map(function (name) {
    return name.toUpperCase();
});
console.log("namesMap", namesMap);

//Ex2
 function myFilter(arr, callback) {
     //aArr = [];
     
         arr.forEach(function(element) {
             return callback(element);      
         });
  //  console.log("myfilter ", array);
    //return callback(aArr);
};

var namesMyC = myFilter(names, function(name){
    return name;
});

console.log(namesMyC);

//Ex4
var list = names.map(function(name){
    return "<li>" + name + "</li>"
}).join("");

document.getElementById("div").innerHTML = list;