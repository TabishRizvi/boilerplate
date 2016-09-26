/**
 * Created by Tabish Rizvi.
 * Github :  https://github.com/TabishRizvi
 * Email : sayyidtabish@gmail.com
 */

var express = require("express"),
    bodyParser = require("body-parser");


var app = express();

app.use([
    bodyParser.json(),
    bodyParser.urlencoded()
]);

config = require("config");

console.log(config.get("port"));