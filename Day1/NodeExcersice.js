


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
     aArr = [];
    //aArr2 = [];
     if(callback.length === arr){
         aArr.push(arr);
     }

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

document.getElementById("theUL").innerHTML = list;

var names2 = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

var list2 = names2.map(function(name){
    return "<tr><td>" + name.name + "</td>" + "<td>" + name.phone + "</td></tr>";
}).join("");

document.getElementById("table").innerHTML = list2;

var updateList = names2.filter(function(name){
    if(name.length <= 3) {
        return "<tr><td>" + name.name + "</td>" + "<td>" + name.phone + "</td></tr>";
    }
});
document.getElementById("but").onclick = function(){
    documents.getElementById("table").innerHTML = updateList;
    
    
}

