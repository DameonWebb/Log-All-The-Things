const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const app = express();
const csvFilePath = './server/log.csv'
const csv = require('csvtojson')

app.use(morgan('dev'))
app.set('json spaces', 2)

app.get('/', (req, res) => {
    let Agent = req.headers['user-agent'].replace(/,/g, "");
    let Time = new Date().toISOString();
    let Method = req.method;
    let Resource = req.originalUrl;
    let Version = "HTTP/" + req.httpVersion;
    let Status = res.statusCode;

    let allData = `${Agent},${Time},${Method},${Resource},${Version},${Status}`; 

    fs.appendFile('./server/log.csv', '\n' + allData, function() {
        console.log("File was appended!");
    });  

    res.status(200);
   
})


    app.get('/logs', (req, res) => {
        csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            console.log(jsonObj);
            res.json(jsonObj);
        })
    });



/*
//middleware
    app.use((req, res, next) => {
        //handle the user agent
        res.locals.ua = req.get('User-Agent');
        next();
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
    }?

    // resource method to log path and the file requested
    app.use(function (req, res, next) {
        var filename = path.basename(req.url);
        var extension = path.extname(filename);
        if (extension === 'index.html' || './')
            console.log("The file " + filename + " was requested.");
        next();
    }):

app.get('/', (req, res) => {
// write your code to respond "ok" here
    if(req == '/') {
       console.log('ok');
    }
});

app.get('/logs', (req, res) => {
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        console.log(jsonObj);
    })
});

*/

module.exports = app;



