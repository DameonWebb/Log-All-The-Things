const express = require('express');
const fs = require('fs');
const app = express();
const csvFilePath = './server/log.csv'
const csv = require('csvtojson')
let log = "";
var method = req;

//middleware
    app.use((req, res, next) => {
        //handle the user agent
        res.locals.ua = req.get('User-Agent');
        next();
    });

    //how much time elapsed since sending request
    request.get({ url: 'http://www.google.com', time: true }, function (err, response) {
        console.log('The actual time elapsed:', response.elapsedTime);
    });

    //iso date standard
    const event = new Date('05 October 2011 14:48 UTC');
    console.log(event.toISOString());

    //method to respond to GET, POST or DELETE method
    module.exports = function(req, resp, next){
        if (method == 'GET'){
            console.log('GET')
        }else{
            console.log(req)
        }
    }

app.get('/', (req, res) => {
// write your code to respond "ok" here

});

app.get('/logs', (req, res) => {
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        console.log(jsonObj);
    })
});

module.exports = app;
