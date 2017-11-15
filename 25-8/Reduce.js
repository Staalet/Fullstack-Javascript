var numbers = [3, 4, 5, 23];

var reducer = function(accumulator, item){
    return accumulator + item;
}

var initialValue = 0;

var result = numbers.reduce(reducer, initialValue);

console.log(result);

var members = [
    {name: "hej", age : 23},
    {name: "hej2", age : 43},
    {name: "hej3", age : 43},
    {name: "hej4", age : 45},
    {name: "hej5", age : 103}
];

var reducerM = function(accumulator, member, index, arr){
    var temp = accumulator + member.age;
    if(arr.length -1 === index){
        return temp / arr.length;
    }
    return temp;
}

var resultAge = members.reduce(reducerM, initialValue);

console.log(resultAge);