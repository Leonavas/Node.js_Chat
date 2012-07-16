var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var socket = require("./socket");

var handle = {}
handle[".css"] = requestHandlers.css;
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);
