var fs = require('fs');

var filename = process.argv[2];

file = fs.readFile(filename, function(err, data){
    console.log(data.toString().split("\n").length -1)
})





//Buffer objects can be read by calling the toString(); e.g. var str = buf.toString();
