const fs = require('fs');

const handler = (req, res) => {
    const url = req.url;
    if (url=== '/'){
        fs.readFile(__dirname + "/../public/index.html", (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.end(data);
        });
    } else if (url.indexOf('.') > -1){
        fs.readFile(__dirname + "/../public" + url, (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-type': 'text/' });
            res.end(data);
        });
    } else {
        res.writeHead(404);
        res.end(`Sorry page you requested isn't here`);
    }
}


module.exports = handler;
