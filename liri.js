
const keys = require("./keys.js");
const Twitter = require('twitter');
const spotify = require('spotify');



const consKey = keys.twitterKeys.consumer_key
const consSec = keys.twitterKeys.consumer_secret
const tokKEY = keys.twitterKeys.access_token_key
const tokSec = keys.twitterKeys.access_token_secret

const userInput = process.argv[2];

if (userInput === "my-tweets"){
	myTweets()
}

if (userInput === "spotify-this-song"){
	spotifySearch()
}

if (userInput === "movie-this"){
	movie()
}

if (userInput === "do-what-it-says"){
	doWhat()
}





function myTweets() {
	// body...

const client = new Twitter({
  consumer_key: consKey,
  consumer_secret: consSec,
  access_token_key: tokKEY,
  access_token_secret: tokSec
});



client.get('statuses/user_timeline', {q: 'node.js'}, function(error, tweets, response) {
   if (!error) {

  	 for (let i = 0; i < 20; i++) {
  		
  		var num =i+1;
        console.log("Tweet number "+ num+ " was created on "+tweets[i].created_at)
        console.log("Tweet was: "+"\n"+tweets[i].text+"\n")
  		
  	 }
  	
   }
})

}

function spotifySearch() {

	let songInput = process.argv[3];

	if (songInput === ""){
		spotify.search({ type: 'track', query: "ace of base" }, function(err, data) {
    if (!err) {
        
        const song = data.tracks.items

        for (var i = 0; i < song.length; i++) {
      
 
    console.log("Artist of this song is: " + song[i].artists[0].name+"\n")
    console.log("Name of this song is: " + song[i].name+"\n")
    console.log("Link of this song is: " + song[i].external_urls.spotify+"\n")
    console.log("The album that song was on is: " + song[i].album.name+"\n")
    console.log('-----------------------------------------------------------------------------------')
    
}

	}

    else {
    	throw err
        process.exit(0);
    }

})
	}

spotify.search({ type: 'track', query: songInput }, function(err, data) {
    if (!err) {
        
        const song = data.tracks.items

        for (var i = 0; i < song.length; i++) {
      
 
    console.log("Artist of this song is: " + song[i].artists[0].name+"\n")
    console.log("Name of this song is: " + song[i].name+"\n")
    console.log("Link of this song is: " + song[i].external_urls.spotify+"\n")
    console.log("The album that song was on is: " + song[i].album.name+"\n")
    console.log('-----------------------------------------------------------------------------------')
    console.log("you got: "+song.length+" results in total")
}

    


	}

    else {
    	throw err
        process.exit(0);
    }

})

}
	// body...


// function movie() {


// 	// body...
// }

// function doWhat() {


// 	// body...
// }
