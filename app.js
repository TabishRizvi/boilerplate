/**
 * Created by Tabish Rizvi.
 * Github :  https://github.com/TabishRizvi
 * Email : sayyidtabish@gmail.com
 */

config = require("config");                         // provides global variable config
require("./lib/logging");                           // provides global variable logger

var express = require("express"),
    bodyParser = require("body-parser"),
    morgan = require("morgan");

var app = express();

app.use([
    morgan("tiny", { "stream": logger.stream }),
    bodyParser.json(),
    bodyParser.urlencoded()
]);



app.use(function (req,res) {
    console.log(req.headers);
    console.log(req.host);
    console.log(req.origin);
    res.set("Location","http://facebook.com");
    res.status(301).send("hi2");
});


app.set('port',config.get("port"));
app.set('etag',false);

app.listen(app.get('port'),function(){
    console.log("Server running on port\t===============>\t",app.get('port'));
});
