/**
 * Created by Tabish Rizvi.
 * Github :  https://github.com/TabishRizvi
 * Email : sayyidtabish@gmail.com
 */

var _ = require("underscore"),
    Joi = require("Joi"),
    async = require("async"),
    response = require("./response");

module.exports = function (validate) {
    
    return function (req,res,next) {

        async.forEachOf(validate,function (el,paramType,cb) {

            Joi.validate(req[paramType], el , {
                presence: "required",
                allowUnknown : false
            }, function (err, value) {
                if (err) {
                    
                    cb(err.details[0].message.replace(/["]/ig, ""));

                }
                else{
                    cb(null);
                }
            });
        },function (err) {
            if(err) {
                response.sendErrorResponse(res,"BAD_REQUEST",err);
            }
            else {
                next();
            }
        });
    }
};