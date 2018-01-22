var fs = require('fs');
var request = require('request');
const targetUrl = process.argv[2] || 'https://www.google.com/images/srpr/logo3w.png';
const targetFileWithPath = process.argv[3] || 'image/google.png'

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

download(targetUrl, targetFileWithPath, function(){
  console.log('done');
});