var querystring = require("querystring");
var fs = require("fs");
var path = require('path');

function start(response, postData, pathname) {
  console.log("Request handler 'start' was called.");

  fs.readFile("./html/index.html", function (err, content) {
    if (err) {
       throw err; 
      } else {
        response.writeHead(200, {"Content-Type": 'text/html'});
        response.write(content);
		response.end();
      }
    });
}

function upload(response, postData, pathname) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You've sent the text: "+
  querystring.parse(postData).text);
  response.end();
}

function css(response, postData, pathname) {
	fs.readFile(__dirname + pathname, function (err, content) {
		if (err) {
			throw err; 
		} else {
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.end(content, 'utf-8');
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.css = css;