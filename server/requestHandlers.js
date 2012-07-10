function start() {
  console.log("[INFO] Request handler 'start' was called.");
}

function upload() {
  console.log("[INFO] Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;