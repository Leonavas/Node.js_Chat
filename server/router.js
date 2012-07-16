var path = require('path');

function route(handle, pathname, response, postData) {
	console.log("About to route a request for " + pathname);
	
	if (typeof handle[path.extname(pathname)] === 'function') {
		handle[path.extname(pathname)](response, postData, pathname);
	} else if (typeof handle[pathname] === 'function') {
		handle[pathname](response, postData, pathname);
	} else {
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;