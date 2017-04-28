
const keys = require("./keys.js");
const Twitter = require('twitter');

const consKey = keys.twitterKeys.consumer_key
const consSec = keys.twitterKeys.consumer_secret
const tokKEY = keys.twitterKeys.access_token_key
const tokSec = keys.twitterKeys.access_token_secret



const client = new Twitter({
  consumer_key: consKey,
  consumer_secret: consSec,
  access_token_key: tokKEY,
  access_token_secret: tokSec
});


client.post('statuses/update', {status: 'I am tweeting'}, function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  }
});
// client.post('statuses/update', {status: 'I am testing Twitter'},  function(error, tweet, response) {
//   if(error) throw error;
//   console.log(tweet);  // Tweet body. 
//   console.log(response);  // Raw response object. 
// });

client.get('statuses/user_timeline', {q: 'node.js'}, function(error, tweets, response) {
   if (!error) {

  	 for (var i = 0; i < 20; i++) {
  		
  		var num =i+1;
        console.log("Tweet number "+ num+ " was created on "+tweets[i].created_at)
        console.log("Tweet was: "+"\n"+tweets[i].text+"\n")
  		
  	 }
  	
   }
});