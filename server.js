var http = require('http');
var fs = require('fs');

function send404Response(response){
	response.writeHead(404, {"Content-type": "text/plain"});
	response.write("Error 404: Page not found!");
	response.end();
}

function onRequest(request, response){
	if(request.method == 'GET' && request.url == '/'){
		response.writeHead(200, {"Content-type": "application/javascript"});
		fs.createReadStream("./app.js");
		//.pipe(response));
	} else{
		send404Response(response);
	}
}

http.createServer(onRequest).listen(3000);
console.log("Server is now running");