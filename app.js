/**
 * Created by Tabish Rizvi.
 * Github :  https://github.com/TabishRizvi
 * Email : sayyidtabish@gmail.com
 */

config = require("config");                         // provides global variable config
require("./lib/logging");                           // provides global variable logger
var response = require("./lib/response");

var express = require("express"),
    bodyParser = require("body-parser"),
    morgan = require("morgan");

var app = express();

app.use([
    morgan("tiny", { "stream": logger.stream }),
    bodyParser.json(),
    bodyParser.urlencoded({ extended : true})
]);


app.use("/v1",require("./routes/v1"));


app.use(function (err,req,res,next) {
    logger.error(err.stack);
    response.sendServerError(res);
});


app.set('port',config.get("port"));
app.set('etag',false);

app.listen(app.get('port'),function(){
    logger.info("Server started .......");
    logger.info("Port No : "+app.get('port'));
});
