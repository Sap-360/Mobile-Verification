


module.exports=function (app,express) {
	// body...
	var api=express.Router();
	console.log("came in routesjs 6");
	
	api.post('/sendOTP', function(req, res) {
		console.log("in routes 9");
		
		//Creating OTP
		

		res.json("From Server");
	});

	return api;
}