/**
 * Created by Tabish Rizvi.
 * Github :  https://github.com/TabishRizvi
 * Email : sayyidtabish@gmail.com
 */


var messageCodes = require("../constants/message_codes");

module.exports.sendSuccessResponse  = function (res,messageCode,data) {
    
    var obj = {
        code : messageCodes[messageCode].code,
        message : messageCodes[messageCode].message,
        data : data!=undefined ? data : {}
    };
    
    res.status(200).send(obj);
};

module.exports.sendErrorResponse  = function (res,messageCode,data) {

    var obj = {
        code : messageCodes[messageCode].code,
        message : messageCodes[messageCode].message,
        data : data!=undefined ? data : {}
    };

    res.status(400).send(obj);
};

module.exports.sendServerError  = function (res) {

    var obj = {
        code : messageCodes.INTERNAL_ERROR.code,
        message : messageCodes.INTERNAL_ERROR.message,
        data : {}
    };

    res.status(500).send(obj);
};