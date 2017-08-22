$(document).ready(function(){

console.log('hello');

var key = 'blaudon1@gmail.com'

var requestStr = 'http://www.budgetyourtrip.com/api/v3/search/locationdata/orlando'

$.ajax({
  type: 'GET',
  url: requestStr,
  headers: {'X-API-KEY': key,'Access-Control-Allow-Origin': '*'},
  dataType: 'json',
  contentType: 'application/json; charset=utf-8'
  // jsonp: 'callback'
}).then(function(data){
  console.log(data);
})

// function callback(data){
//   console.log(data);
// }

});
