

module.exports=function (app,express) {
	// body...
	var api=express.Router();
	console.log("came in routesjs 6");
	
	api.post('/verify', function(req, res) {
		
	});
	return api;
}