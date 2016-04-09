var bot = require('nodemw');
var env       = process.env.NODE_ENV || 'development';
var config    = require('../config/config.json')[env];
var URLS = require('../config/urls.json');

  // pass configuration object
  var client = new bot({
    server: 'en.wikipedia.org',  // host name of MediaWiki-powered site
    path: '/w',                  // path to api.php script
    debug: false,               // is more verbose when set to true
	"username": "ashish2091",             // account to be used when logIn is called (optional)
	"password": "ashutalewar",             // password to be used when logIn is called (optional)
	"userAgent": "music wiki client, email : ashish2091@gmail.com",      // define custom bot's user agent
	"concurrency": 5               // how many API requests can be run in parallel (defaults to 3)

  });

var params = {
	action : 'query',
	// assert: 'bot',
	titles: 'Shreya Ghoshal',
	// pageids : 1247722,
	prop: 'iwlinks|links',
	// pllimit:500,
	// pltitles:'song',
	// list:'lists|allpages',
	format: 'json',
	iwurl: true
}

// client.api.call(params /* api.php parameters */, function(err , info, next , data ) {
// 	    console.log(err);
// 	    console.log(data.query);
// 	});


client.logIn('ashish2091', 'ashutalewar', function(err, response){
	console.log(err);
	console.log(response);
	
	client.api.call(params /* api.php parameters */, function(err , info, next , data ) {
	    console.log(err);
	    console.log(data.query.pages['2154804'].iwlinks);
	    // console.log(next);
	});
	
	
})

// client.getPagesByPrefix('Shreya', function(err, response){
// 		console.log(err, response);
// 	})

// client.getArticle('Indian playback singers' /* api.php parameters */, function(err /* Error instance or null */, info  processed query result , next /* more results? */, data /* raw data */) {
//     console.log(err);
//     console.log(data);
// });