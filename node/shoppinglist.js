//Main js file of our shoppinglist app
var express = require('express');                                       //Import the expresss module

var app = express();                                                    //Create our app object that holds our routes

app.listen(3000, function (err) {                                       //Start listening on port 3000
    console.log('shoppinglist listening on http://localhost:3000');     
});

app.use('/', express.static('../app'));                                  //Serve our static HTML files; .. to go back 2 directories to back out of node to shoppinglist

app.get('/list', function (req, res) {                                  //at whack /list set up array 1, 2, 3
    res.json(['bread', 'cabbage', 'bananas']);
});

