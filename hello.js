var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000 


http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    if (filename == "./") {
        filename = "./index";
    }

    filename = filename + ".html";

    fs.readFile(filename, function (err, data) {
        if (err){
            res.writeHead(404, {'Content-Type': 'text/html'} );
            return res.end("Error 404 Page Not found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
//    res.writeHead(200, {'Content-Type': 'text/html'});
    // var q = url.parse(req.url, true).query;
    // var dates = q.year;
    // res.write(dates);
//    res.end();
}).listen(PORT);

console.log("Serer listening on port 8080.....");