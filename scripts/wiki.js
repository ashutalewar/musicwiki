var request = require('./apirequest.js');


var params = {
  action : 'query',
  titles: 'indian playback singers',
  prop: 'iwlinks',
  list: 'lists',
  format: 'json',
  "lguserid": 25849447,
  "lgusername": "Ashish2091",
  "lgtoken": "bb2e402ae3a5608bfc1179c74599cbb7",
  "cookieprefix": "enwiki",
  "sessionid": "5a96b3649e65c45a8cf18a59f951af95"
}

request.get(params, function(err, res, body){
  console.log(body);
});

// request.post({action : 'login', lgname:'ashish2091', lgpassword:'ashutalewar', format: 'json'}, function(err, res, body){
//   console.log(body);
// })