var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* SCRAPE a WEB page. */
router.get('/scrape', function(req, res, next) {
  
    url = 'https://www.youtube.com/watch?v=x1Jm7aMLhPo';

    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html

    request(url, function(error, response, html){

        // First we'll check to make sure no errors occurred when making the request

        if(!error){
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

            var $ = cheerio.load(html);

            // Finally, we'll define the variables we're going to capture

            var title, view_count, rating;
            var json = { title : "", view_count : "", rating : ""};

            $('.watch-view-count').filter(function(){
            	
            	var data = $(this);
            	view_count = data.text();
            	json.view_count = view_count;

            	console.log(data);
            })            
            res.send(JSON.stringify(json));

        }else{
        	res.send('ERROR : '+error);
        }
    })
});


module.exports = router;
