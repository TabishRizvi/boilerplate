/**
 * Created by Tabish Rizvi.
 * Github :  https://github.com/TabishRizvi
 * Email : sayyidtabish@gmail.com
 */

var winston = require("winston"),
    winstonDailyRotateFile = require('winston-daily-rotate-file'),
    moment = require("moment"),
    fs = require("fs"),
    path = require("path");

var logDirPath = path.join(__dirname,"..",config.get("logging.logDir"));
var logPath = path.join(logDirPath,config.get("logging.logFileName"));

if (!fs.existsSync(logDirPath)) {
    fs.mkdirSync(logDirPath);
}


var tsFormat = function () {

    return moment().format("YYYY-MM-DD HH:mm:ss");
};

logger = new winston.Logger({
    transports: [
        new (winston.transports.Console)({
            timestamp: tsFormat,
            colorize: true,
            level: config.get("logging.level.console")
        }),
        new winstonDailyRotateFile({
            filename: logPath,
            timestamp: tsFormat,
            datePattern: 'yyyy-MM-dd-',
            prepend : true,
            level: config.get("logging.level.file"),
            maxsize : config.get("logging.logFileSize"),
            json : false
        })
    ],
    exitOnError: false
});


logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};