const express = require("express");
const path	  = require("path");
const app     = express();

const WEB_PORT = 3000

app.use(express.static("view"));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "view/index.html"));
	console.log("Connection established!");
});

app.listen(WEB_PORT, () => {
	console.log(`WebApp listening on port ${WEB_PORT}`);
});
