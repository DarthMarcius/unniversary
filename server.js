var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;
	console.log(__dirname);
app.use("/", express.static(__dirname + "/public"));
app.set('views', __dirname + "/public/views");

console.log("views:",app.get("views"));
console.log("s:", app.settings.views);

app.get("/", function(req, res) {
	console.log("request came");
	res.sendFile('index.html', {root: app.settings.views});
});

app.listen(port, function() {
	console.log("server is running at port:" + port);
});