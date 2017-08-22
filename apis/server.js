'use strict';

const express = require('express');
const app = express();
// const apis = require('./routes/apis');
const bodyParser = require('body-parser');
const request = require('request');

var budgetYourTrip = {
  url:'http://www.budgetyourtrip.com/api/v3/search/locationdata/orlando',
  headers: {'X-API-KEY': 'blaudon1@gmail.com','Access-Control-Allow-Origin': '*'}
};

var qpxKey = 'AIzaSyAmtnv1WsFhWwmFiYy233BaW1ZLbPOdlLE';

var qpxUrl = `https://www.googleapis.com/qpxExpress/v1/trips/search?key=${qpxKey}`

var qpxForm =
{request: {
    "passengers": {
      "adultCount": 1
    },
    "slice":[
      {
        "origin": "BOS",
        "destination": "LAX",
        "date": "2017-10-31"
      },
      {
        "origin": "LAX",
        "destination": "BOS",
        "date": "2017-11-07"
      }
    ]
  }
}

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.use(express.static('public'));

// app.get('/api/byt', function(req,res){
//   function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       var info = JSON.parse(body);
//       console.log(info);
//       res.status(200);
//       return res.send(info);
//     }
//   }
//   request(budgetYourTrip, callback);
// });

// app.post('/api/qpx', function(req,res){
//
//   function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       var info = JSON.parse(body);
//       console.log(info);
//       res.status(200);
//       return res.send(info);
//     }
//   }
//   request.post(qpxUrl.form(qpxForm),callback);
// });


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
