var env       = process.env.NODE_ENV || 'development';
var config    = require('../config/config.json')[env];
var URLS = require('../config/urls.json');
var request = require('request');

var wiki_token = {
    "login": {
        "result": "Success",
        "lguserid": 25849447,
        "lgusername": "Ashish2091",
        "lgtoken": "bb2e402ae3a5608bfc1179c74599cbb7",
        "cookieprefix": "enwiki",
        "sessionid": "5a96b3649e65c45a8cf18a59f951af95"
    }
}

var options = {
  url: URLS.wiki.api,
  method: '',
  headers: {
    'User-Agent': 'website, email : ashutalewar@gmail.com'
  }
};

exports.post =  function(params, callback){
	options.url += ('?' + 'action=login&format=json')
	options.postData = {		
		lgname : 'ashish2091'
      };
	options.method = 'POST';

	request(options, callback);
}


exports.get = function(params, callback){
	options.method = 'GET';
	options.url += '?'
	Object.keys(params).forEach(function(key){
		options.url += (key + '=' +params[key] + '&');
	})

	request(options, callback);
}