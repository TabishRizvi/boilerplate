/**
 * Created by Tabish Rizvi.
 * Github :  https://github.com/TabishRizvi
 * Email : sayyidtabish@gmail.com
 */

var _ = require("underscore"),
    response = require("./response");

module.exports = function (auth) {
    
    return function (req,res,next) {
       
        logger.info(auth);
        
        next();
    }
};