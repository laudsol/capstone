$(document).ready(function(){

var key = 'blaudon1@gmail.com'
var qpxData = {}
var retrievedQpxData = localStorage.getItem('qpxData')


var requestStr = 'http://www.budgetyourtrip.com/api/v3/search/locationdata/orlando'

// $.ajax({
//   type: 'GET',
//   url: 'http://localhost:3000/api/byt',
//   contentType: 'application/json; charset=utf-8'
// }).then(function(data){
//   console.log(data);
// })

function callQpx(){
  var flightData = {request: {
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
          "origin": "BOS",
          "destination": "DIA",
          "date": "2017-10-31"
        },
        {
          "origin": "BOS",
          "destination": "SFO",
          "date": "2017-10-31"
        }
      ],
      "solutions": 10
    }
  }

  $.ajax({
    type: 'POST',
    url:'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAmtnv1WsFhWwmFiYy233BaW1ZLbPOdlLE',
    data: JSON.stringify(flightData),
    contentType: 'application/json; charset=utf-8'
  }).then(function(data){
    localStorage.setItem('qpxData',JSON.stringify(data))
    console.log(data);
  });
};

callQpx();

var topFLightData = [];

for(let i = 0; i < 10; i++){
  topFLightData.push(JSON.parse(retrievedQpxData)['trips']['tripOption'][i]['saleTotal']);
  // topFLightData.push(JSON.parse(retrievedQpxData)['trips']['tripOption'][i]['slice'][0]);
}

console.log(JSON.parse(retrievedQpxData)['trips']['tripOption'][0]['slice'][0]['segment'][0]['flight']);
console.log('depTime',JSON.parse(retrievedQpxData)['trips']['tripOption'][0]['slice'][0]['segment'][0]['leg'][0]['departureTime']);
console.log(topFLightData);


// function callback(data){
//   console.log(data);
// }

});
