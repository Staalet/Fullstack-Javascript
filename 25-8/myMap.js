var number = [1,2,3,4];

// var times10 = number.map(num => num * 10);

function myMap(arr, callback){
    var temp = [];

    for(var i = 0; i < arr.length; i++){
        temp.push(arr);
    }

    return temp;
}

var times10 = myMap(number, (num) => num *10);

console.log(times10);



