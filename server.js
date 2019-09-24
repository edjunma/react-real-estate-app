const express = require('express');

const serveStatic = require('serve-static');

const path = require('path');

// Create the express app

const app = express();

// Create middleware to handle the serving of the app

app.use('/', serveStatic(path.join(__dirname, '/public')));

// Serve index by default

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

// Create default port to serve the app on

const port = process.env.PORT || 5000;

app.listen(port);

// Log to feedback that the app is actually running
console.log('Server has started on port ' + port);
