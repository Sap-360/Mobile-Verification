

var express = require('express');
var app = express(),
	config=require('./config'),
	bodyParser=require('body-parser');

// var twilio = require("twilio/lib");

// app.use(twilio);

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json()); // parse application/json 

// app.use(bodyParser.json({ type: 'json/vnd.api+json' })); // parse application/vnd.api+json as json

var api=require('./app/routes')(app,express);
app.use('/api',api);

app.use(express.static(__dirname + '/public'));
// app.set('views', __dirname + '/public');


app.get('*',function(req,res){

    res.sendFile(__dirname +'/public/index.html'); 
})

app.listen(config.port, function (err) {
	if(err){
    	console.log(err);
    }
    else{
    	console.log("listing on port 8000");
    }
});

exports = module.exports = app;