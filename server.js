const express = require("express");
const path	  = require("path");
const app     = express();

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, 'view/index.html'));
	console.log('connection established');
});

app.listen(80, function () {
	console.log('WebApp listening on port 80');
});
