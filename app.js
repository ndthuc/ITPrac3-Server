const http = require('http');

const express = require("express");
const bodyParser = require('body-parser');

const dataRoutes = require('./controllers/data')

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api', dataRoutes);

app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.writeHead(201, {'Content-Type': 'application/json'});
    response.end();
}).listen(8000);

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    const html = '<!DOCTYPE html>';
    html+= '<html>';
    html+= '  <head>';
    html+= '    <title></title>';
    html+= '  </head>';
    html+= '  <body>';
    html+= '    <h1>'+err.message+'</h1>';
    html+= '    <h2>'+err.status+'</h2>';
    html+= '    <h2>More information: lintangwisesa@ymail.com</h2>';
    html+= '    <pre>'+err.stack+'</pre>';
    html+= '  </body>';
    html+= '</html>';
    res.send(html);
}); 
app.listen(8080);

