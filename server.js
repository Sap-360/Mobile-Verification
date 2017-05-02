//For routes, see in app/routes.js

var express = require('express');
var app = express(),
	config=require('./config'),
	bodyParser=require('body-parser');

var autho = require("node-autho");

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json()); // parse application/json 

var api=require('./app/routes')(app,express); //using the route.js file for routing
app.use('/api',api);

app.use(express.static(__dirname + '/public'));

app.get('*',function(req,res){
    res.sendFile(__dirname +'/public/index.html'); 
})

autho.certPath = "./node_modules/node-autho/cert.txt";
console.log(autho.certPath);

var gen;
autho.encryptPassword("the quick brown fox").then(function(hash){
  // Save to a database
  console.log(hash);
   autho.comparePassword("the quick brown fox",hash).then(function(){
          // Comparsion passed
          console.log("passed");
        },
        function(){
            console.log("failed");
          // Comparison failed
        });
});

autho.decrypt("d38c0b6d319112f661e0d5ef57114a7c60c6ad74f0d465f7f3ac158f64968a65").then(function(res){
    console.log(typeof(res));

           
});




app.listen(config.port, function (err) {
	if(err){
    	console.log(err);
    }
    else{
    	console.log("listing on port 8000");
    }
});

exports = module.exports = app;