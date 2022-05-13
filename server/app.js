const express = require('express');
//const csvParser = require('csv-parser');
const fs = require('fs');
const results = []; //stores data for csv file
const app = express();
const csv = require('csvtoJSON');

/*var app = new log2Csv(
    'input.txt',
    new NotificationEventsParser(),
    (output) => process.stdout.write(output)
);
 
app.parse(); */

fs.createReadStream('log.csv')
    .pipe(csvParser({})).
    on('data', () => results.push(data))
    .on('end', () => {
        console.log(results);
    })
app.use((req, res, next) => {
// write your logging code here

});

app.get('/', (req, res) => {
// write your code to respond "ok" here

});

app.get('/logs', (req, res) => {
// write your code to return a json object containing the log data here

});

module.exports = app;
