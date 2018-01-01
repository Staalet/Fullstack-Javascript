const fetch = require('node-fetch');
const axios = require('axios');
//const axios = require('axios');

var uArr = [
    {name: "thomas", efternavn: "staal", alder: 23},
    {name: "anders", efternavn: "staal", alder: 23},
    {name: "emma", efternavn: "noget", alder: 23},
    {name: "martin", efternavn: "klose", alder: 23},
    {name: "casper", efternavn: "klose", alder: 23} 
];

const map = uArr.map((name) => {
    return name.alder;
});
console.log(map);
